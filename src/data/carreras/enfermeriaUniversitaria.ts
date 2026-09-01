import type { Carrera } from "./types";

export const enfermeriaUniversitaria: Carrera = {
  id: "enfermeria-universitaria",
  nombre: "Enfermería Universitaria",
  nombresCiclos: {
    0: "Ciclo Básico Común",
    2: "1° Año",
    3: "2° Año",
    4: "3° año",
  },
  materias: [
    // ---------- CBC (Ciclo Básico Común) ----------
    {
      id: "introduccion-al-conocimiento-de-la-sociedad-y-el-estado",
      nombre: "Introducción al Conocimiento de la Sociedad y el Estado",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
    {
      id: "introduccion-al-pensamiento-cientifico",
      nombre: "Introducción al Pensamiento Científico",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
    {
      id: "cbc",
      nombre: "Ciclo Básico Común",
      correlativas: [
        "introduccion-al-conocimiento-de-la-sociedad-y-el-estado",
        "introduccion-al-pensamiento-cientifico",
      ],
      ciclo: 1,
      periodo: "cuatrimestral",
      esAgrupador: true,
    },

    // ---------- Primer Año ----------
    {
      id: "anatomofisiologia",
      nombre: "Anatomofisiología",
      correlativas: ["cbc"],
      correlativasTexto:
        "Anual, dividida en los módulos Anatomía y Fisiología. Para cursar el módulo de Fisiología se debe tener regular el módulo de Anatomía.",
      ciclo: 2,
      periodo: "anual",
    },
    {
      id: "quimica-biologica",
      nombre: "Química Biológica",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "fisica-biologica",
      nombre: "Física Biológica",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "introduccion-a-la-enfermeria-en-salud-publica",
      nombre: "Introducción a la Enfermería en Salud Pública",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "introduccion-a-las-cs-psicosociales",
      nombre: "Introducción a las Cs. Psicosociales",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "enfermeria-medica-1",
      nombre: "Enfermería Médica I",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "deontologia-1",
      nombre: "Deontología I",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "microbiologia-parasitologia",
      nombre: "Microbiología - Parasitología",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "nutricion",
      nombre: "Nutrición",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "enfermeria-en-salud-publica-1",
      nombre: "Enfermería en Salud Pública I",
      correlativas: ["introduccion-a-la-enfermeria-en-salud-publica"],
      correlativasTexto:
        "Para cursar: Introducción a la Enfermería en Salud Pública regular. Para rendir: Introducción a la Enfermería en Salud Pública aprobada.",
      ciclo: 2,
      periodo: "cuatrimestral",
    },

    // ---------- Segundo Año (Para cursar se necesita) ----------
    //    "introduccion-a-la-enfermeria-en-salud-publica",
    //    "introduccion-a-las-cs-psicosociales",
    //    "microbiologia-parasitologia",
    //    "anatomofisiologia",
    //    "nutricion",

    {
      id: "enfermeria-en-salud-materno-infantil",
      nombre: "Enfermería en Salud Materno Infantil",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
        "enfermeria-medica-1",
        "enfermeria-en-salud-publica-1",
      ],
      correlativasTexto:
        "Para cursar: Enfermería Médica I regular. Para rendir: Enfermería Médica I y Enfermería en Salud Pública I aprobadas.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "psicologia-evolutiva",
      nombre: "Psicología Evolutiva",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "enfermeria-en-salud-mental",
      nombre: "Enfermería en Salud Mental",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "enfermeria-en-salud-publica-2",
      nombre: "Enfermería en Salud Pública II",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
        "enfermeria-en-salud-publica-1",
      ],
      correlativasTexto:
        "Para cursar: Enfermería en Salud Pública I regular. Para rendir: Enfermería en Salud Pública I aprobada.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "enfermeria-medica-2",
      nombre: "Enfermería Médica II",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
        "enfermeria-medica-1",
        "fisica-biologica",
        "quimica-biologica",
      ],
      correlativasTexto:
        "Para cursar: Enfermería Médica I regular. Para rendir: Enfermería Médica I, Física Biológica y Química Biológica aprobadas.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "enfermeria-quirurgica",
      nombre: "Enfermería Quirúrgica",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
        "enfermeria-medica-1",
        "enfermeria-medica-2",
      ],
      correlativasTexto:
        "Para cursar: Enfermería Médica I y II regulares. Para rendir: Enfermería Médica II aprobada.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "dietoterapia",
      nombre: "Dietoterapia",
      correlativas: [
        "introduccion-a-la-enfermeria-en-salud-publica",
        "introduccion-a-las-cs-psicosociales",
        "microbiologia-parasitologia",
        "anatomofisiologia",
        "nutricion",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },

    // ---------- Tercer Año - 1° Semestre ----------
    {
      id: "introduccion-a-la-administracion-en-enfermeria",
      nombre: "Introducción a la Administración en Enfermería",
      correlativas: [
        "psicologia-evolutiva",
        "dietoterapia",
        // solo trabajos practicos
        "enfermeria-en-salud-materno-infantil",
        "enfermeria-en-salud-mental",
        "enfermeria-medica-2",
        "enfermeria-quirurgica",
        //
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
      cuatrimestre: 1,
    },
    {
      id: "deontologia-2",
      nombre: "Deontología II",
      correlativas: [
        "psicologia-evolutiva",
        "dietoterapia",
        // solo trabajos practicos
        "enfermeria-en-salud-materno-infantil",
        "enfermeria-en-salud-mental",
        "enfermeria-medica-2",
        "enfermeria-quirurgica",
        //
        "deontologia-1",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
      cuatrimestre: 1,
    },
    {
      id: "enfermeria-pediatrica",
      nombre: "Enfermería Pediátrica",
      correlativas: [
        "psicologia-evolutiva",
        "dietoterapia",
        // solo trabajos practicos
        "enfermeria-en-salud-materno-infantil",
        "enfermeria-en-salud-mental",
        "enfermeria-medica-2",
        "enfermeria-quirurgica",
        //
      ],
      correlativasTexto:
        "Para rendir: Enfermería en Salud Materno Infantil y Enfermería Quirúrgica aprobadas.",
      ciclo: 4,
      periodo: "cuatrimestral",
      cuatrimestre: 1,
    },
    {
      id: "enfermeria-obstetrica",
      nombre: "Enfermería Obstétrica",
      correlativas: [
        "psicologia-evolutiva",
        "dietoterapia",
        // solo trabajos practicos
        "enfermeria-en-salud-materno-infantil",
        "enfermeria-en-salud-mental",
        "enfermeria-medica-2",
        "enfermeria-quirurgica",
        //
      ],
      correlativasTexto:
        "Para rendir: Enfermería en Salud Materno Infantil y Enfermería Quirúrgica aprobadas.",
      ciclo: 4,
      periodo: "cuatrimestral",
      cuatrimestre: 1,
    },
    {
      id: "enfermeria-psiquiatrica",
      nombre: "Enfermería Psiquiátrica",
      correlativas: [
        "psicologia-evolutiva",
        "dietoterapia",
        // solo trabajos practicos
        "enfermeria-en-salud-materno-infantil",
        "enfermeria-en-salud-mental",
        "enfermeria-medica-2",
        "enfermeria-quirurgica",
        //
      ],
      correlativasTexto:
        "Para cursar: Enfermería en Salud Mental regular. Para rendir: Enfermería en Salud Mental aprobada.",
      ciclo: 4,
      periodo: "cuatrimestral",
      cuatrimestre: 1,
    },
  ],
};
