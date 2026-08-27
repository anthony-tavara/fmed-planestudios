import { useState } from "react";
import "./App.css";
import {
  calcularPorcentajeCarerraPorId,
  obtenerCarreraPorId,
} from "./lib/carreras/obtenerCarreraPorId";
import { carreras } from "./data/carreras/carreras-index";
import { calcularEstadoMateria } from "./lib/materias/calcularEstadoMateria";
import type { Materia } from "./data/carreras/types";

function App() {
  const [carreraId, setCarreraId] = useState("");
  const carrera = carreraId ? obtenerCarreraPorId(carreraId) : undefined;
  const [aprobadas, setAprobadas] = useState(new Set<string>());

  function toggleAprobada(materia: Materia) {
    const estadoMateria = calcularEstadoMateria(materia, aprobadas);

    if (estadoMateria == "bloqueada") return null;

    setAprobadas((prev) => {
      const nuevoSet = new Set(prev);
      nuevoSet.has(materia.id)
        ? nuevoSet.delete(materia.id)
        : nuevoSet.add(materia.id);
      return nuevoSet;
    });
  }

  return (
    <>
      <label htmlFor="carrera-select">Carrera</label>
      <select
        id="carrera-select"
        value={carreraId}
        onChange={(e) => {
          setCarreraId(e.target.value);
        }}
      >
        <option key="selecciona-una-carrera" value="Selecciona una carrera">
          Selecciona una carrera
        </option>
        {carreras.map((carrera) => {
          return (
            <option key={carrera.id} value={carrera.id}>
              {carrera.nombre}
            </option>
          );
        })}
      </select>

      <>
        <h1>{carrera && carrera.nombre}</h1>
        {calcularPorcentajeCarerraPorId(carreraId, aprobadas) && (
          <h2>{calcularPorcentajeCarerraPorId(carreraId, aprobadas)} %</h2>
        )}
        <div className="flex flex-col items-center gap-2">
          {carrera &&
            carrera.materias.map((materia) => {
              const estado = calcularEstadoMateria(materia, aprobadas);
              return (
                <button
                  key={materia.id}
                  onClick={() => toggleAprobada(materia)}
                  className={`${estado} cursor-pointer p-4 rounded-xl border`}
                >
                  {materia.nombre} - {estado}
                </button>
              );
            })}
        </div>
      </>
    </>
  );
}

export default App;
