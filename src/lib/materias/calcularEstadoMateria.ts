import type { Materia } from "../../data/carreras/types";

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
