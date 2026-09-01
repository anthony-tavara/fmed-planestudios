import { useState, useEffect } from "react";
import "../App.css";
import {
  obtenerCarreraPorId,
  separarCarreraEnCiclos,
} from "../lib/carreras/carreras";
import { calcularEstadoMateria } from "../lib/materias/materias";
import type { Carrera, Materia } from "../data/carreras/types";
import { MapaCarrera } from "../components/MapaCarrera";
import { useParams } from "react-router-dom";
import HeaderCarrera from "../components/HeaderCarrera";
import DetalleMateria from "../components/DetalleMateria";
import { MateriasGrid } from "../components/MateriasGrid";

interface Ciclo {
  numeroCiclo: number;
  materias: Materia[];
}

function toggleAprobada(
  carrera: Carrera,
  materia: Materia,
  aprobadas: Set<string>,
) {
  const estado = calcularEstadoMateria(carrera, materia, aprobadas);
  if (estado === "bloqueada") return aprobadas;

  const nuevoSet = new Set(aprobadas);
  nuevoSet.has(materia.id)
    ? nuevoSet.delete(materia.id)
    : nuevoSet.add(materia.id);
  return nuevoSet;
}

function labelCiclo(carrera: Carrera, ciclo: number) {
  return carrera.nombresCiclos?.[ciclo] ?? `${ciclo}° año`;
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

  if (!carrera) {
    return <div>Carrera no encontrada</div>;
  }

  const ciclos: Ciclo[] = separarCarreraEnCiclos(carrera);

  return (
    <div className="min-h-screen bg-[#EDE8DD] font-body text-[#1B2A4A]">
      <HeaderCarrera
        carrera={carrera}
        modoMapa={modoMapa}
        aprobadas={aprobadas}
        setModoMapa={setModoMapa}
      />

      {!modoMapa && (
        <main className="mx-auto max-w-3xl px-6 pb-16">
          {ciclos.map(({ numeroCiclo, materias }) => {
            const materias1 = materias.filter(
              (materia) => materia.cuatrimestre == 1,
            );

            const materias2 = materias.filter(
              (materia) => materia.cuatrimestre == 2,
            );

            return (
              <section key={numeroCiclo} className="mb-10">
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="font-display text-lg font-semibold">
                    {labelCiclo(carrera, numeroCiclo)}
                  </h2>
                  <div className="h-px flex-1 bg-[#1B2A4A]/15" />
                </div>

                {materias1.length > 0 && (
                  <>
                    <h3 className="mb-3 mt-2 font-display text-sm font-semibold uppercase tracking-wide text-[#1B2A4A]/60">
                      1° Cuatrimestre
                    </h3>
                    <MateriasGrid
                      materias={materias1}
                      carrera={carrera}
                      aprobadas={aprobadas}
                      toggleAprobada={toggleAprobada}
                      setAprobadas={setAprobadas}
                      materiasIdResaltadas={materiasIdResaltadas}
                      setMateriasIdResaltadas={setMateriasIdResaltadas}
                      setMateriaDetalle={setMateriaDetalle}
                    />
                  </>
                )}

                {materias2.length > 0 && (
                  <>
                    <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-[#1B2A4A]">
                      2° Cuatrimestre
                    </h3>
                    <MateriasGrid
                      materias={materias2}
                      carrera={carrera}
                      aprobadas={aprobadas}
                      toggleAprobada={toggleAprobada}
                      setAprobadas={setAprobadas}
                      materiasIdResaltadas={materiasIdResaltadas}
                      setMateriasIdResaltadas={setMateriasIdResaltadas}
                      setMateriaDetalle={setMateriaDetalle}
                    />
                  </>
                )}

                {materias1.length == 0 && materias2.length == 0 && (
                  <MateriasGrid
                    materias={materias}
                    carrera={carrera}
                    aprobadas={aprobadas}
                    toggleAprobada={toggleAprobada}
                    setAprobadas={setAprobadas}
                    materiasIdResaltadas={materiasIdResaltadas}
                    setMateriasIdResaltadas={setMateriasIdResaltadas}
                    setMateriaDetalle={setMateriaDetalle}
                  />
                )}
              </section>
            );
          })}
        </main>
      )}

      {modoMapa && (
        <div className="mx-auto px-6 pb-16">
          <MapaCarrera
            carrera={carrera}
            aprobadas={aprobadas}
            onToggleMateria={(materia) => {
              const nuevasAprobadas = toggleAprobada(
                carrera,
                materia,
                aprobadas,
              );
              setAprobadas(nuevasAprobadas);
            }}
          />
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
