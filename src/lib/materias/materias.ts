import type { Carrera, Materia } from "../../data/carreras/types";

export type EstadoMateria = "bloqueada" | "disponible" | "aprobada";

export function calcularEstadoMateria(
  carrera: Carrera,
  materia: Materia,
  aprobadas: Set<string>,
): EstadoMateria {
  if (aprobadas.has(materia.id)) return "aprobada";

  const correlativas: Materia[] = [];
  obtenerCorrelativas(carrera, materia, correlativas);

  const habilitada =
    !materia.correlativas ||
    materia.correlativas.length == 0 ||
    correlativas.every((correlativa) => aprobadas.has(correlativa.id));

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

export function obtenerCorrelativas(
  carrera: Carrera,
  materia: Materia,
  correlativas: Materia[],
) {
  if (materia.correlativas.length == 0) return;

  for (const correlativa of materia.correlativas) {
    const correlativaInfo = obtenerMateriaPorCarreraYId(carrera, correlativa);

    if (correlativaInfo) {
      if (correlativaInfo.esAgrupador)
        obtenerCorrelativas(carrera, correlativaInfo, correlativas);
      else correlativas.push(correlativaInfo);
    }
  }
}
