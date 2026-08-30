import type { Carrera } from "../data/carreras/types";
import { carreras } from "../data/carreras/carreras-index";
import { calcularPorcentajeCarerraPorId } from "../lib/carreras/obtenerCarreraPorId";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface HeaderCarreraProps {
  carrera: Carrera | undefined;
  modoMapa: boolean;
  aprobadas: Set<string>;
  setModoMapa: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderCarrera({
  carrera,
  modoMapa,
  aprobadas,
  setModoMapa,
}: HeaderCarreraProps) {
  const [isOpen, setIsOpen] = useState(false);
  const porcentaje = carrera
    ? calcularPorcentajeCarerraPorId(carrera.id, aprobadas)
    : null;
  return (
    <header className="mx-auto max-w-3xl px-6 pt-12 pb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8A5D18]">
        FMED - Plan de estudios
      </p>

      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="relative w-full max-w-xs">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between rounded-lg border border-[#8A5D18]/30 bg-[#FBF9F4] px-4 py-2.5 text-left text-sm font-medium text-[#1B2A4A] shadow-sm transition-all hover:border-[#8A5D18]"
          >
            <div className="flex w-full justify-between gap-2 items-center">
              <span className="w-full">
                {carrera?.nombre ?? "Seleccioná una carrera..."}
              </span>
              <ChevronDown />
            </div>
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-[#8A5D18]/20 bg-[#FBF9F4] py-1 shadow-lg">
              {carreras.map((c) => (
                <Link
                  key={c.id}
                  to={`/${c.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-2 text-left text-sm text-[#1B2A4A] transition-colors hover:bg-[#8A5D18]/10"
                >
                  {c.nombre}
                </Link>
              ))}
            </div>
          )}
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
