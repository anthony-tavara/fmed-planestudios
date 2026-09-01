import type { Carrera, Materia } from "../../data/carreras/types";
import { calcularEstadoMateria } from "./materias";

export function materiasAGrafo(
  carrera: Carrera,
  materias: Materia[],
  aprobadas: Set<string>,
) {
  const nodos = materias.map((materia) => ({
    data: {
      id: materia.id,
      label: materia.nombre,
      estado: calcularEstadoMateria(carrera, materia, aprobadas),
      electiva: materia.electiva ?? false,
    },
  }));

  const aristas = materias.flatMap((materia) =>
    materia.correlativas.map((correlativaId) => ({
      data: {
        id: `${correlativaId}_${materia.id}`,
        source: correlativaId,
        target: materia.id,
      },
    })),
  );

  return [...nodos, ...aristas];
}
export function calcularPosiciones(materias: Materia[]) {
  const porCiclo = new Map<number, Materia[]>();
  for (const materia of materias) {
    const lista = porCiclo.get(materia.ciclo) ?? [];
    lista.push(materia);
    porCiclo.set(materia.ciclo, lista);
  }

  const ciclosOrdenados = [...porCiclo.keys()].sort((a, b) => a - b);
  const posiciones: Record<string, { x: number; y: number }> = {};

  const MAX_POR_COLUMNA = 4;
  const ANCHO_SUBCOLUMNA = 120;
  const ALTO_FILA = 80;

  let xAcumulado = 80;

  ciclosOrdenados.forEach((ciclo) => {
    const materiasDelCiclo = porCiclo.get(ciclo)!;

    materiasDelCiclo.forEach((materia, indice) => {
      const subColumna = Math.floor(indice / MAX_POR_COLUMNA);
      const fila = indice % MAX_POR_COLUMNA;

      posiciones[materia.id] = {
        x: xAcumulado + subColumna * ANCHO_SUBCOLUMNA,
        y: fila * ALTO_FILA + 80,
      };
    });

    const subColumnasUsadas = Math.ceil(
      materiasDelCiclo.length / MAX_POR_COLUMNA,
    );
    xAcumulado += subColumnasUsadas * ANCHO_SUBCOLUMNA;
  });

  return posiciones;
}
