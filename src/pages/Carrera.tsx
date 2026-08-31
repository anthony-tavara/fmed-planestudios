import { useState, useEffect } from "react";
import "../App.css";
import { obtenerCarreraPorId } from "../lib/carreras/obtenerCarreraPorId";
import {
  calcularEstadoMateria,
  obtenerMateriaPorCarreraYId,
  type EstadoMateria,
} from "../lib/materias/calcularEstadoMateria";
import type { Materia } from "../data/carreras/types";
import {
  Lock,
  CircleDashed,
  CircleCheck,
  Info,
  X,
  type LucideIcon,
} from "lucide-react";
import { MapaCarrera } from "../components/MapaCarrera";
import { useParams } from "react-router-dom";
import HeaderCarrera from "../components/HeaderCarrera";
import DetalleMateria from "../components/DetalleMateria";

interface Ciclo {
  numeroCiclo: number;
  materias: Materia[];
}

interface ConfigEstado {
  icon: LucideIcon;
  label: string;
  card: string;
  badge: string;
}

const ESTADO_CONFIG: Record<EstadoMateria, ConfigEstado> = {
  bloqueada: {
    icon: Lock,
    label: "Bloqueada",
    card: "border-[#A9A28F]/40 bg-[#FBF9F4]/50 opacity-60 hover:border-[#A9A28F] hover:-translate-y-0.5 focus:-translate-y-0.5 focus:bg-[#A9A28F]",
    badge: "bg-[#A9A28F]/20 text-[#6B6656]",
  },
  disponible: {
    icon: CircleDashed,
    label: "Disponible",
    card: "border-[#C98A2C]/50 bg-[#FBF9F4] hover:border-[#C98A2C] hover:-translate-y-0.5",
    badge: "bg-[#C98A2C]/15 text-[#8A5D18]",
  },
  aprobada: {
    icon: CircleCheck,
    label: "Aprobada",
    card: "border-[#3F6B4E]/50 bg-[#3F6B4E]/[0.06] hover:-translate-y-0.5",
    badge: "bg-[#3F6B4E]/15 text-[#2E4F39]",
  },
};

function labelCiclo(ciclo: number) {
  if (ciclo === 0) return "Ciclo Básico Común";
  return `${ciclo}° año`;
}

export default function SelectorDeCarrera() {
  const { carreraId } = useParams();
  const carrera = carreraId ? obtenerCarreraPorId(carreraId) : undefined;
  const [aprobadas, setAprobadas] = useState<Set<string>>(new Set<string>());
  const [materiaDetalle, setMateriaDetalle] = useState<Materia | null>(null);

  useEffect(() => {
    if (!carreraId) {
      setAprobadas(new Set());
      return;
    }

    const localMateriasAprobadas = localStorage.getItem(carreraId);
    if (!localMateriasAprobadas) {
      setAprobadas(new Set());
      return;
    }

    try {
      const parsed = JSON.parse(localMateriasAprobadas);
      setAprobadas(new Set<string>(parsed));
    } catch {
      setAprobadas(new Set());
    }
  }, [carreraId]);

  useEffect(() => {
    if (!carreraId) return;
    localStorage.setItem(carreraId, JSON.stringify([...aprobadas]));
  }, [carreraId, aprobadas]);

  const [materiasIdResaltadas, setMateriasIdResaltadas] = useState<string[]>(
    [],
  );
  const [modoMapa, setModoMapa] = useState(false);

  function marcarCorrelativasDeMateria(materia: Materia) {
    if (!carrera) return;

    const correlativas: string[] = materia.correlativas;
    const nuevasResaltadas: string[] = [];

    for (const correlativaId of correlativas) {
      const correlativaInfo = obtenerMateriaPorCarreraYId(
        carrera,
        correlativaId,
      );

      if (
        correlativaInfo &&
        calcularEstadoMateria(correlativaInfo, aprobadas) !== "aprobada"
      )
        nuevasResaltadas.push(correlativaId);
    }

    setMateriasIdResaltadas(nuevasResaltadas);
  }

  function toggleAprobada(materia: Materia) {
    setAprobadas((prev) => {
      const estado = calcularEstadoMateria(materia, prev);
      if (estado === "bloqueada") return prev;

      const nuevoSet = new Set(prev);
      nuevoSet.has(materia.id)
        ? nuevoSet.delete(materia.id)
        : nuevoSet.add(materia.id);
      return nuevoSet;
    });
  }

  const ciclos: Ciclo[] = [];

  if (carrera) {
    for (const materia of carrera.materias) {
      let ciclo = ciclos.find((ciclo) => ciclo.numeroCiclo === materia.ciclo);

      if (!ciclo) {
        ciclo = { numeroCiclo: materia.ciclo, materias: [] };
        ciclos.push(ciclo);
      }

      ciclo.materias.push(materia);
    }

    ciclos.sort((a, b) => a.numeroCiclo - b.numeroCiclo);
  }

  return (
    <div className="min-h-screen bg-[#EDE8DD] font-body text-[#1B2A4A]">
      <HeaderCarrera
        carrera={carrera ?? undefined}
        modoMapa={modoMapa}
        aprobadas={aprobadas}
        setModoMapa={setModoMapa}
      />

      {!modoMapa && (
        <main className="mx-auto max-w-3xl px-6 pb-16">
          {ciclos.map(({ numeroCiclo, materias }) => (
            <section key={numeroCiclo} className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="font-display text-lg font-semibold">
                  {labelCiclo(numeroCiclo)}
                </h2>
                <div className="h-px flex-1 bg-[#1B2A4A]/15" />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {materias.map((materia) => {
                  const estado = calcularEstadoMateria(materia, aprobadas);
                  const config = ESTADO_CONFIG[estado];
                  const Icon = config.icon;

                  return (
                    <button
                      key={materia.id}
                      onClick={() => {
                        toggleAprobada(materia);
                        marcarCorrelativasDeMateria(materia);
                      }}
                      className={`group relative rounded-sm border p-4 text-left transition-all duration-150 ${config.card} cursor-pointer ${
                        materiasIdResaltadas.some(
                          (materiaId) => materiaId === materia.id,
                        )
                          ? "bg-red-200"
                          : ""
                      }`}
                    >
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-1.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${config.badge}`}
                          >
                            <Icon size={11} strokeWidth={2.5} />
                            {config.label}
                          </span>

                          {materia.electiva && (
                            <span className="inline-flex items-center rounded-full border border-dashed border-[#7A4A5A]/50 bg-[#7A4A5A]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7A4A5A]">
                              Electiva
                            </span>
                          )}

                          {materia.periodo === "anual" && (
                            <span className="inline-flex items-center rounded-full bg-[#1B2A4A]/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#1B2A4A]/60">
                              Anual
                            </span>
                          )}
                        </div>

                        {materia.correlativasTexto && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMateriaDetalle(materia);
                            }}
                            title="Ver correlativas"
                            className="rounded-full p-1 text-[#1B2A4A]/40 transition-colors hover:bg-[#8A5D18]/15 hover:text-[#8A5D18]"
                          >
                            <Info size={20} />
                          </button>
                        )}
                      </div>

                      <p className="font-body text-sm leading-snug">
                        {materia.nombre}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}

      {modoMapa && (
        <div className="mx-auto px-6 pb-16">
          {carrera && (
            <MapaCarrera
              carrera={carrera}
              aprobadas={aprobadas}
              onToggleMateria={toggleAprobada}
            />
          )}
        </div>
      )}

      {materiaDetalle && (
        <DetalleMateria
          materia={materiaDetalle}
          setMateriaDetalle={setMateriaDetalle}
        />
      )}
    </div>
  );
}
