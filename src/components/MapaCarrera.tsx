import { useMemo, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import type { Carrera, Materia } from "../data/carreras/types";
import { calcularPosiciones, materiasAGrafo } from "../lib/materias/materiasAGrafo";
import type { EstadoMateria } from "../lib/materias/calcularEstadoMateria";

interface Props {
  carrera: Carrera;
  aprobadas: Set<string>;
  onToggleMateria: (materia: Materia) => void;
}

interface ConfigEstado {
  bgcolor: string;
  bordercolor: string;
  textcolor: string;
  label: string;
  card: string;
  badge: string;
}

const ESTADO_CONFIG: Record<EstadoMateria, ConfigEstado> = {
  bloqueada: {
    bgcolor: "#F4F0E9",
    bordercolor: "#D6D1C5",
    textcolor: "#6B6656",
    label: "Bloqueada",
    card: "border-[#A9A28F]/40 bg-[#FBF9F4]/50 opacity-60 hover:border-[#A9A28F] hover:-translate-y-0.5 focus:-translate-y-0.5 focus:bg-[#A9A28F]",
    badge: "bg-[#A9A28F]/20 text-[#6B6656]",
  },
  disponible: {
    bgcolor: "#FBF9F4",
    bordercolor: "#E2C290",
    textcolor: "#8A5D18",
    label: "Disponible",
    card: "border-[#C98A2C]/50 bg-[#FBF9F4] hover:border-[#C98A2C] hover:-translate-y-0.5",
    badge: "bg-[#C98A2C]/15 text-[#8A5D18]",
  },
  aprobada: {
    bgcolor: "#ECEEE7",
    bordercolor: "#B9C7BA",
    textcolor: "#2E4F39",
    label: "Aprobada",
    card: "border-[#3F6B4E]/50 bg-[#3F6B4E]/[0.06] hover:-translate-y-0.5",
    badge: "bg-[#3F6B4E]/15 text-[#2E4F39]",
  },
};

export function MapaCarrera({ carrera, aprobadas, onToggleMateria }: Props) {
  const materiasSinElectivas: Materia[] = useMemo(
    () => carrera.materias.filter((materia) => !materia.electiva),
    [carrera]
  );

  const onToggleRef = useRef(onToggleMateria);
  onToggleRef.current = onToggleMateria;
  const materiasRef = useRef(materiasSinElectivas);
  materiasRef.current = materiasSinElectivas;

  const elements = materiasAGrafo(materiasSinElectivas, aprobadas);
  const posiciones = useMemo(() => calcularPosiciones(materiasSinElectivas), [materiasSinElectivas]);

  const layout = useMemo(
    () => ({
      name: "preset" as const,
      positions: (node: any) => posiciones[node.id()],
      fit: false,
    }),
    [posiciones]
  );

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100%", height: "1000px" }}
      layout={layout}
      stylesheet={[
        {
          selector: "node",
          style: {
            opacity: (ele: any) => (ele.data("estado") === "bloqueada" ? 0.6 : 1),
            "border-style": "solid",
            "border-width": "1px",
            "border-color": (ele: any) => ESTADO_CONFIG[ele.data("estado")].bordercolor,
            "background-color": (ele: any) => ESTADO_CONFIG[ele.data("estado")].bgcolor,
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": 10,
            color: (ele: any) => ESTADO_CONFIG[ele.data("estado")].textcolor,
            width: 90,
            height: 60,
            shape: 'roundrectangle',
            "text-wrap": "wrap",
            "text-max-width": "80",
            "overlay-opacity": 0,
          },
        },
        {
          selector: "edge",
          style: {
            width: 1.5,
            "line-color": "#b4b2a9",
            "target-arrow-color": "#b4b2a9",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ]}
    />
  );
}