import {
  Lock,
  CircleDashed,
  CircleCheck,
  Info,
  type LucideIcon,
} from "lucide-react";

import {
  calcularEstadoMateria,
  obtenerCorrelativas,
  type EstadoMateria,
} from "../lib/materias/materias";
import type { Carrera, Materia } from "../data/carreras/types";
import type { Dispatch, SetStateAction } from "react";

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

function marcarCorrelativasDeMateria(
  carrera: Carrera,
  materia: Materia,
  aprobadasId: Set<string>,
  setMateriasIdResaltadas: Dispatch<SetStateAction<string[]>>,
) {
  if (!carrera) return;

  const correlativas: Materia[] = [];
  const nuevasResaltadas: string[] = [];
  obtenerCorrelativas(carrera, materia, correlativas);

  for (const correlativa of correlativas) {
    if (calcularEstadoMateria(carrera, correlativa, aprobadasId) !== "aprobada")
      nuevasResaltadas.push(correlativa.id);
  }
  setMateriasIdResaltadas(nuevasResaltadas);
}

export interface MateriasGridProps {
  carrera: Carrera;
  materias: Materia[];
  aprobadas: Set<string>;
  toggleAprobada: (
    carrera: Carrera,
    materia: Materia,
    aprobadas: Set<string>,
  ) => Set<string>;
  setAprobadas: Dispatch<SetStateAction<Set<string>>>;
  setMateriasIdResaltadas: Dispatch<SetStateAction<string[]>>;
  materiasIdResaltadas: string[];
  setMateriaDetalle: Dispatch<SetStateAction<Materia | null>>;
}

export function MateriasGrid({
  carrera,
  materias,
  aprobadas,
  toggleAprobada,
  setAprobadas,
  setMateriasIdResaltadas,
  materiasIdResaltadas,
  setMateriaDetalle,
}: MateriasGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {materias.map((materia) => {
        const estado = calcularEstadoMateria(carrera, materia, aprobadas);
        const config = ESTADO_CONFIG[estado];
        const Icon = config.icon;

        return (
          <button
            key={materia.id}
            onClick={() => {
              const nuevasAprobadas = toggleAprobada(
                carrera,
                materia,
                aprobadas,
              );
              setAprobadas(nuevasAprobadas);
              marcarCorrelativasDeMateria(
                carrera,
                materia,
                nuevasAprobadas,
                setMateriasIdResaltadas,
              );
            }}
            className={`group relative rounded-sm border p-4 text-left transition-all duration-150 ${config.card} cursor-pointer ${
              materiasIdResaltadas.some((materiaId) => materiaId === materia.id)
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

            <p className="font-body text-sm leading-snug">{materia.nombre}</p>
          </button>
        );
      })}
    </div>
  );
}
