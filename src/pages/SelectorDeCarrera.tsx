import { carreras } from "../data/carreras/carreras-index";
import { Link } from "react-router-dom";

export default function SelectorDeCarrera({}) {
  return (
    <div className="min-h-screen bg-[#EDE8DD] font-body text-[#1B2A4A]">
      <header className="mx-auto max-w-3xl px-6 pt-12 pb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8A5D18]">
          FMED - Plan de estudios
        </p>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            {carreras.map((c) => (
              <Link
                to={`/${c.id}`}
                key={c.id}
                className="bg-[#FBF9F4] p-1 rounded"
              >
                {c.nombre}
              </Link>
            ))}
            <h1 className="font-display text-3xl font-semibold leading-tight text-[#1B2A4A]"></h1>
          </div>
        </div>
      </header>
    </div>
  );
}
