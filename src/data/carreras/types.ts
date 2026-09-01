export interface Carrera {
  id: string;
  nombre: string;
  materias: Materia[];
  nombresCiclos?: Record<number, string>; // opcional, si no está usa fallback genérico
}

export interface Materia {
  id: string;
  nombre: string;
  correlativas: string[];
  correlativasTexto?: string;
  ciclo: number;
  periodo: "1c" | "2c" | "cuatrimestral" | "anual";
  electiva?: boolean;
  esAgrupador?: boolean;
}
