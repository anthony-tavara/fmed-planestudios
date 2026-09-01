import type { Carrera } from "./types";

export const licenciaturaEnNutricion: Carrera = {
  id: "licenciatura-en-nutricion",
  nombre: "Licenciatura en Nutrición",
  materias: [
    // ---------- CBC (Ciclo Basico Comun) ----------
    {
      id: "quimica",
      nombre: "Química",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
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
      id: "matematica",
      nombre: "Matemática",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
    {
      id: "fisica-e-introduccion-a-la-biofisica",
      nombre: "Física e Introducción a la Biofísica",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
    {
      id: "biologia-e-introduccion-a-la-biologia-celular",
      nombre: "Biología e Introducción a la Biología Celular",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
    // ---------- Componente CBC para eliminar muchas flechas ----------
    {
      id: "cbc",
      nombre: "Ciclo Básico Común",
      correlativas: [
        "quimica",
        "introduccion-al-pensamiento-cientifico",
        "biologia-e-introduccion-a-la-biologia-celular",
        "matematica",
        "fisica-e-introduccion-a-la-biofisica",
        "introduccion-al-conocimiento-de-la-sociedad-y-el-estado",
      ],
      ciclo: 1,
      periodo: "cuatrimestral",
      esAgrupador: true,
    },

    // ---------- 2do año ----------
    {
      id: "bioquimica-de-la-nutricion",
      nombre: "Bioquímica de la Nutrición",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "anual",
    },
    {
      id: "anatomia",
      nombre: "Anatomía",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "anual",
    },
    {
      id: "fisiologia",
      nombre: "Fisiología",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "anual",
    },
    {
      id: "nutricion-normal",
      nombre: "Nutrición Normal",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "anual",
    },
    {
      id: "introduccion-a-la-salud-publica",
      nombre: "Introducción a la Salud Pública",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "socioantropologia",
      nombre: "Socio Antropología",
      correlativas: ["cbc"],

      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "estadistica",
      nombre: "Estadística",
      correlativas: ["cbc"],

      ciclo: 2,
      periodo: "cuatrimestral",
    },

    // ---------- 3er año ----------
    {
      id: "fisiopatologia",
      nombre: "Fisiopatología",
      correlativas: [
        "anatomia",
        "fisiologia",
        "bioquimica-de-la-nutricion",
        "nutricion-normal",
      ],
      ciclo: 3,
      periodo: "anual",
    },
    {
      id: "tecnica-dietetica",
      nombre: "Técnica Dietética",
      correlativas: ["bioquimica-de-la-nutricion", "nutricion-normal"],
      ciclo: 3,
      periodo: "anual",
    },
    {
      id: "bromatologia-y-tecnologia-alimentaria",
      nombre: "Bromatología y Tecnología Alimentaria",
      correlativas: ["bioquimica-de-la-nutricion", "nutricion-normal"],
      ciclo: 3,
      periodo: "anual",
    },
    {
      id: "microbiologia-y-parasitologia",
      nombre: "Microbiología y Parasitología",
      correlativas: ["bioquimica-de-la-nutricion", "anatomia", "fisiologia"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "alimentacion-del-nino-sano",
      nombre: "Alimentación del Niño Sano",
      correlativas: [
        "anatomia",
        "fisiologia",
        "bioquimica-de-la-nutricion",
        "nutricion-normal",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "desarrollo-de-la-comunidad",
      nombre: "Desarrollo de la Comunidad",
      correlativas: ["cbc"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "economia-general-y-familiar",
      nombre: "Economía General y Familiar",
      correlativas: ["nutricion-normal"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "bioestadistica",
      nombre: "Bioestadística",
      correlativas: ["estadistica"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "relaciones-humanas-y-eticas",
      nombre: "Relaciones Humanas y Éticas",
      correlativas: ["cbc"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "saneamiento-ambiental-e-higiene-de-los-alimentos",
      nombre: "Saneamiento Ambiental e Higiene de los Alimentos",
      correlativas: ["introduccion-a-la-salud-publica"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "produccion-y-mercadeo-de-alimentos",
      nombre: "Producción y Mercadeo de Alimentos",
      correlativas: [],
      correlativasTexto:
        "Para cursar: regular en Economía General y Familiar. Para el final: 1° Economía General y Familiar, 2° Producción y Mercadeo de Alimentos.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "metodologia-de-la-investigacion-en-nutricion",
      nombre: "Metodología de la Investigación en Nutrición",
      correlativas: [],
      correlativasTexto:
        "Para cursar: regular en Bioestadística. Para el final: 1° Bioestadística, 2° Metodología de la Investigación en Nutrición.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },

    // ---------- 4to año ----------
    {
      id: "psicologia-de-la-nutricion",
      nombre: "Psicología de la Nutrición",
      correlativas: ["socioantropologia", "alimentacion-del-nino-sano"],
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "educacion-en-nutricion",
      nombre: "Educación en Nutrición",
      correlativas: [
        "alimentacion-del-nino-sano",
        "desarrollo-de-la-comunidad",
        "tecnica-dietetica",
        "bromatologia-y-tecnologia-alimentaria",
      ],
      ciclo: 4,
      periodo: "anual",
    },
    {
      id: "administracion-de-servicios-de-alimentacion",
      nombre: "Administración de Servicios de Alimentación",
      correlativas: [
        "produccion-y-mercadeo-de-alimentos",
        "tecnica-dietetica",
        "bromatologia-y-tecnologia-alimentaria",
      ],
      ciclo: 4,
      periodo: "anual",
    },
    {
      id: "planificacion-y-administracion-general-y-sanitaria",
      nombre: "Planificación y Administración General y Sanitaria",
      correlativas: [
        "introduccion-a-la-salud-publica",
        "economia-general-y-familiar",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "epidemiologia-en-nutricion",
      nombre: "Epidemiología en Nutrición",
      correlativas: ["metodologia-de-la-investigacion-en-nutricion"],
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "evaluacion-nutricional",
      nombre: "Evaluación Nutricional",
      correlativas: ["bioestadistica", "alimentacion-del-nino-sano"],
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "tecnica-dietoterapica",
      nombre: "Técnica Dietoterápica",
      correlativas: [
        "fisiopatologia",
        "tecnica-dietetica",
        "bromatologia-y-tecnologia-alimentaria",
      ],
      ciclo: 4,
      periodo: "anual",
    },
    {
      id: "fisiopatologia-y-dietoterapia-del-nino",
      nombre: "Fisiopatología y Dietoterapia del Niño",
      correlativas: [
        "alimentacion-del-nino-sano",
        "fisiopatologia",
        "tecnica-dietetica",
        "bromatologia-y-tecnologia-alimentaria",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "nutricion-en-salud-publica",
      nombre: "Nutrición en Salud Pública",
      correlativas: ["introduccion-a-la-salud-publica"],
      correlativasTexto:
        "Ademas, regular en Epidemiología en Nutrición y Evaluación Nutricional. Para el final: 1° Epidemiología en Nutrición y Evaluación Nutricional, 2° Nutrición en Salud Pública.",
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "dietoterapia-del-adulto",
      nombre: "Dietoterapia del Adulto",
      correlativas: [
        "fisiopatologia",
        "tecnica-dietetica",
        "bromatologia-y-tecnologia-alimentaria",
      ],
      ciclo: 4,
      periodo: "anual",
    },

    // ---------- 5to año ----------
    {
      id: "practicas-de-nutricion-en-salud-publica",
      nombre: "Prácticas de Nutrición en Salud Pública",
      correlativas: [],
      correlativasTexto: "Aprobadas todas las materias hasta 4° año inclusive",
      ciclo: 5,
      periodo: "cuatrimestral",
    },
    {
      id: "practicas-de-dietoterapia-y-administracion-de-servicios-de-alimentacion",
      nombre:
        "Prácticas de Dietoterapia y Administración de Servicios de Alimentación",
      correlativas: [],
      correlativasTexto: "Aprobadas todas las materias hasta 4° año inclusive",
      ciclo: 5,
      periodo: "cuatrimestral",
    },
    {
      id: "seminarios",
      nombre: "Seminarios",
      correlativas: [],
      correlativasTexto: "Aprobadas todas las materias hasta 4° año inclusive",
      ciclo: 5,
      periodo: "cuatrimestral",
    },

    // ---------- Electivas de 5to año (elegir 3) ----------
    {
      id: "politica-alimentaria",
      nombre: "Política Alimentaria",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "informatica",
      nombre: "Informática",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "comunicacion-y-audiovisuales",
      nombre: "Comunicación y Audiovisuales",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "extension-rural",
      nombre: "Extensión Rural",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "tecnica-dietetica-experimental",
      nombre: "Técnica Dietética Experimental",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "ingles-tecnico",
      nombre: "Inglés Técnico",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "interaccion-droga-alimentos-en-enfermedades-de-la-nutricion",
      nombre: "Interacción Droga-Alimentos en Enfermedades de la Nutrición",
      correlativas: [
        "dietoterapia-del-adulto",
        "fisiopatologia-y-dietoterapia-del-nino",
      ],
      correlativasTexto:
        "Ademas, todo 3° año y aprobadas 2 materias anuales y 2 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "nutricion-y-deporte",
      nombre: "Nutrición y Deporte",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "nutricion-en-el-paciente-critico",
      nombre: "Nutrición en el Paciente Crítico",
      correlativas: [],
      correlativasTexto:
        "Todo 3° año y aprobadas 3 materias anuales y 3 cuatrimestrales de 4° año",
      ciclo: 5,
      periodo: "cuatrimestral",
      electiva: true,
    },
  ],
  nombresCiclos: {
    0: "Ciclo Básico Común",
    2: "2° año",
    3: "3° año",
    4: "4° año",
    5: "5° año",
  },
};
