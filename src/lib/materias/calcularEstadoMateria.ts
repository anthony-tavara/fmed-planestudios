import type { Carrera, Materia } from "../../data/carreras/types";

export type EstadoMateria = "bloqueada" | "disponible" | "aprobada";

export function calcularEstadoMateria(
  materia: Materia,
  aprobadas: Set<string>,
): EstadoMateria {
  if (aprobadas.has(materia.id)) return "aprobada";

  const habilitada =
    !materia.correlativas ||
    materia.correlativas.length == 0 ||
    materia.correlativas.every((id) => aprobadas.has(id));

  return habilitada ? "disponible" : "bloqueada";
}

export function obtenerMateriaPorCarreraYId(
  carrera: Carrera,
  id: string,
): Materia | null {
  const materias = carrera.materias;
  const materia = materias.find((carrera) => carrera.id == id);

  if (!materia) return null;

  return materia;
}
