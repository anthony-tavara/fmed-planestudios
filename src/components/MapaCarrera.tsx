import type { Core } from "cytoscape";
import { useMemo, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import type { Carrera, Materia } from "../data/carreras/types";
import {
  calcularPosiciones,
  materiasAGrafo,
} from "../lib/materias/materiasAGrafo";
import type { EstadoMateria } from "../lib/materias/calcularEstadoMateria";
import type { NodeSingular } from "cytoscape";

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
}

const ESTADO_CONFIG: Record<EstadoMateria, ConfigEstado> = {
  bloqueada: {
    bgcolor: "#F4F0E9",
    bordercolor: "#D6D1C5",
    textcolor: "#6B6656",
    label: "Bloqueada",
  },
  disponible: {
    bgcolor: "#FBF9F4",
    bordercolor: "#E2C290",
    textcolor: "#8A5D18",
    label: "Disponible",
  },
  aprobada: {
    bgcolor: "#ECEEE7",
    bordercolor: "#B9C7BA",
    textcolor: "#2E4F39",
    label: "Aprobada",
  },
};

export function MapaCarrera({ carrera, aprobadas, onToggleMateria }: Props) {
  const cyRef = useRef<Core | null>(null);
  const materiasSinElectivas: Materia[] = useMemo(
    () => carrera.materias.filter((materia) => !materia.electiva),
    [carrera],
  );

  const onToggleRef = useRef(onToggleMateria);
  onToggleRef.current = onToggleMateria;
  const materiasRef = useRef(materiasSinElectivas);
  materiasRef.current = materiasSinElectivas;

  const elements = materiasAGrafo(materiasSinElectivas, aprobadas);
  const posiciones = useMemo(
    () => calcularPosiciones(materiasSinElectivas),
    [materiasSinElectivas],
  );

  const layout = useMemo(
    () => ({
      name: "preset" as const,
      positions: (node: any) => posiciones[node.id()],
      fit: false,
    }),
    [posiciones],
  );

  return (
    <CytoscapeComponent
      elements={elements}
      cy={(cy) => {
        cyRef.current = cy;
        cy.removeListener("tap", "node");
        cy.on("tap", "node", (evt) => {
          const id = evt.target.id();
          const materia = materiasRef.current.find((m) => m.id === id);
          if (materia) onToggleRef.current(materia);
        });
      }}
      zoom={1.1}
      style={{ width: "100%", height: "32rem" }}
      layout={layout}
      stylesheet={[
        {
          selector: "node",
          style: {
            opacity: (ele: NodeSingular) =>
              ele.data("estado") === "bloqueada" ? 0.6 : 1,
            "border-style": "solid",
            "border-width": "1px",
            "border-color": (ele: NodeSingular) =>
              ESTADO_CONFIG[ele.data("estado")].bordercolor,
            "background-color": (ele: NodeSingular) =>
              ESTADO_CONFIG[ele.data("estado")].bgcolor,
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": 10,
            color: (ele: NodeSingular) =>
              ESTADO_CONFIG[ele.data("estado")].textcolor,
            width: 90,
            height: 60,
            shape: "roundrectangle",
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
            "overlay-opacity": 0,
          },
        },
      ]}
    />
  );
}
