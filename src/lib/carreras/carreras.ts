import { carreras } from "../../data/carreras/carreras-index";
import type { Carrera, Materia } from "../../data/carreras/types";

interface Ciclo {
  numeroCiclo: number;
  materias: Materia[];
}

export function obtenerCarreraPorId(id: string): Carrera | null {
  const carrera = carreras.find((carrera) => carrera.id == id);

  if (!carrera) return null;

  return carrera;
}

export function calcularPorcentajeCarerraPorId(
  id: string,
  aprobadas: Set<string>,
): number | null {
  const carrera = obtenerCarreraPorId(id);

  if (!carrera) return null;

  return Math.round((aprobadas.size / carrera.materias.length) * 100);
}

export function separarCarreraEnCiclos(carrera: Carrera) {
  const ciclos: Ciclo[] = [];
  if (carrera) {
    for (const materia of carrera.materias)
      if (!materia.esAgrupador) {
        let ciclo = ciclos.find((ciclo) => ciclo.numeroCiclo === materia.ciclo);

        if (!ciclo) {
          ciclo = { numeroCiclo: materia.ciclo, materias: [] };
          ciclos.push(ciclo);
        }

        ciclo.materias.push(materia);
      }

    ciclos.sort((a, b) => a.numeroCiclo - b.numeroCiclo);
  }
  return ciclos;
}
