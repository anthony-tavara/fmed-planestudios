import { Link } from "react-router-dom";
import type { Carrera } from "../data/carreras/types";
import { carreras } from "../data/carreras/carreras-index";
import { calcularPorcentajeCarerraPorId } from "../lib/carreras/obtenerCarreraPorId";
import type { Dispatch, SetStateAction } from "react";

interface HeaderCarreraProps {
  carrera: Carrera | undefined;
  modoMapa: boolean;
  aprobadas: Set<string>;
  setModoMapa: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderCarrera({ carrera, modoMapa, aprobadas, setModoMapa} : HeaderCarreraProps) {
  const porcentaje = carrera
    ? calcularPorcentajeCarerraPorId(carrera.id, aprobadas)
    : null;
  return (
    <header className="mx-auto max-w-3xl px-6 pt-12 pb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8A5D18]">
        FMED - Plan de estudios
      </p>

      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="flex flex-wrap items-center gap-2">
          {carreras.map((c) => (
            <Link
              to={`/${c.id}`}
              key={c.id}
              className="bg-[#FBF9F4] p-1 rounded"
            >
              {c.nombre}
            </Link>
          ))}

          <h1 className="font-display text-3xl font-semibold leading-tight text-[#1B2A4A]">
            {carrera ? carrera.nombre : ""}
          </h1>
        </div>

        {carrera != undefined && (
          <div className="flex items-center gap-0.5 rounded-full border border-[#1B2A4A]/30 bg-[#FBF9F4] p-0.5 font-mono text-xs uppercase tracking-wide">
            <button
              onClick={() => setModoMapa(false)}
              aria-pressed={!modoMapa}
              className={`rounded-full px-3 py-1.5 transition-colors  ${
                !modoMapa
                  ? "bg-[#C98A2C]/50 text-[#FBF9F4]"
                  : "text-[#1B2A4A]/60 cursor-pointer "
              }`}
            >
              Lista
            </button>
            <button
              onClick={() => setModoMapa(true)}
              aria-pressed={modoMapa}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                modoMapa
                  ? "bg-[#C98A2C]/50 text-[#FBF9F4]"
                  : "text-[#1B2A4A]/60 cursor-pointer"
              }`}
            >
              Mapa
            </button>
          </div>
        )}

        {porcentaje !== null && (
          <div className="flex h-20 w-20 shrink-0 -rotate-6 items-center justify-center rounded-full border-2 border-dashed border-[#3F6B4E] text-[#3F6B4E]">
            <span className="font-mono text-xl font-semibold">
              {porcentaje}%
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
