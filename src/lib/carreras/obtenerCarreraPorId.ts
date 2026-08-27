import { carreras } from "../../data/carreras/carreras-index";
import type { Carrera } from "../../data/carreras/types";

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
