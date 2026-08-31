import { X } from "lucide-react";
import type { Materia } from "../data/carreras/types";
import type { Dispatch, SetStateAction } from "react";

interface DetalleMateriaProps {
  materia: Materia;
  setMateriaDetalle: Dispatch<SetStateAction<Materia | null>>;
}

export default function DetalleMateria({
  materia,
  setMateriaDetalle,
}: DetalleMateriaProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B2A4A]/40 p-4 backdrop-blur-xs"
      onClick={() => setMateriaDetalle(null)}
    >
      <div
        className="w-full max-w-md rounded-lg border border-[#8A5D18]/30 bg-[#FBF9F4] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-[#1B2A4A]">
              {materia.nombre}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setMateriaDetalle(null)}
            className="rounded-md p-1 text-[#1B2A4A]/50 transition-colors hover:text-[#1B2A4A] cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="border-t border-[#8A5D18]/15 pt-4">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#8A5D18]">
            Correlativas requeridas
          </h4>
          <p className="text-sm leading-relaxed text-[#1B2A4A]/80">
            {materia.correlativasTexto}
          </p>
        </div>
      </div>
    </div>
  );
}
