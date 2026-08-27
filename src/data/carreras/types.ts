export interface Carrera {
  id: string;
  nombre: string;
  materias: Materia[];
}

export interface Materia {
  id: string;
  nombre: string;
  correlativas: string[];
  correlativasTexto?: string;
  ciclo: number;
  periodo: "1c" | "2c" | "cuatrimestral" | "anual";
  electiva?: boolean;
}
