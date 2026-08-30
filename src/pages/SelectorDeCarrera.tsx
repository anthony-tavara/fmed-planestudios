import { useState } from "react";
import { carreras } from "../data/carreras/carreras-index";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function SelectorDeCarrera() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#EDE8DD] font-body text-[#1B2A4A]">
      <header className="mx-auto max-w-3xl px-6 pt-12 pb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8A5D18]">
          FMED - Plan de estudios
        </p>

        <div className="relative w-full max-w-xs">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between rounded-lg border border-[#8A5D18]/30 bg-[#FBF9F4] px-4 py-2.5 text-left text-sm font-medium text-[#1B2A4A] shadow-sm transition-all hover:border-[#8A5D18]"
          >
            <div className="flex w-full justify-between gap-2 items-center">
              <span className="w-full">"Seleccioná una carrera..."</span>
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
      </header>
    </div>
  );
}
