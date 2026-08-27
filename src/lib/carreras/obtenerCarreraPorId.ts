import { carreras } from "../../data/carreras/carreras-index";
import type { Carrera } from "../../data/carreras/types";

export function obtenerCarreraPorId(id : string) : Carrera{
    return carreras.find((carrera) => carrera.id == id)
}

export function calcularPorcentajeCarerraPorId(id : string, aprobadas : Set<string>) : number{
    const carrera = obtenerCarreraPorId(id);

    if(!carrera)
        return null

    return Math.round(aprobadas.size / carrera.materias.length * 100)
}

