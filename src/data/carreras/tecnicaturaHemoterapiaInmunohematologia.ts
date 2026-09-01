import type { Carrera } from "./types";

export const tecnicaturaHemoterapiaInmunohematologia: Carrera = {
  id: "tecnicatura-universitaria-en-hemoterapia-e-inmunohematologia",
  nombre: "Tecnicatura Universitaria en Hemoterapia e Inmunohematología",
  materias: [
    // ---------- CBC (Ciclo Básico Común) ----------
    {
      id: "trabajo-y-sociedad",
      nombre: "Trabajo y Sociedad",
      correlativas: [],
      ciclo: 0,
      periodo: "cuatrimestral",
    },
    {
      id: "quimica",
      nombre: "Química",
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
    {
      id: "cbc",
      nombre: "Ciclo Básico Común",
      correlativas: [
        "trabajo-y-sociedad",
        "quimica",
        "biologia-e-introduccion-a-la-biologia-celular",
      ],
      ciclo: 1,
      periodo: "cuatrimestral",
      esAgrupador: true,
    },

    // ---------- Primer Año ----------
    {
      id: "salud-publica",
      nombre: "Salud Pública",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "historia-de-la-medicina-transfusional",
      nombre: "Historia de la Medicina Transfusional",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "anatomia",
      nombre: "Anatomía",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "histologia",
      nombre: "Histología",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "fisiologia-general",
      nombre: "Fisiología General",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },
    {
      id: "fisiologia-de-la-sangre",
      nombre: "Fisiología de la Sangre",
      correlativas: ["cbc"],
      ciclo: 2,
      periodo: "cuatrimestral",
    },

    // ---------- Segundo Año ----------
    {
      id: "microbiologia",
      nombre: "Microbiología",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "inmunologia",
      nombre: "Inmunología",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "inmunohematologia",
      nombre: "Inmunohematología",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "banco-de-sangre",
      nombre: "Banco de Sangre",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "inmunoserologia",
      nombre: "Inmunoserología",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "patologia-inmunohematologica",
      nombre: "Patología Inmunohematológica",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      correlativasTexto:
        "Para cursar: aprobadas CBC, Anatomía, Histología y Fisiología de la Sangre. Regular en Inmunología, Inmunohematología, Banco de Sangre e Inmunoserología.",
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "bioestadistica-y-epidemiologia",
      nombre: "Bioestadística y Epidemiología",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "ingles-basico",
      nombre: "Inglés Básico",
      correlativas: ["cbc"],
      ciclo: 3,
      periodo: "cuatrimestral",
    },
    {
      id: "practica-profesional-segundo-ano",
      nombre: "Práctica Profesional Segundo Año",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
      ],
      correlativasTexto:
        "Para cursar: aprobadas CBC, Anatomía, Histología y Fisiología de la Sangre. Regular en Inmunohematología, Banco de Sangre e Inmunoserología.",
      ciclo: 3,
      periodo: "anual",
    },

    // ---------- Tercer Año ----------
    {
      id: "terapia-transfusional",
      nombre: "Terapia Transfusional",
      correlativas: ["inmunoserologia", "patologia-inmunohematologica"],
      correlativasTexto:
        "Para cursar: aprobadas Inmunoserología y Patología Inmunohematológica. Regular en Práctica Profesional Segundo Año.",
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "deontologia-del-ejercicio-profesional",
      nombre: "Deontología del Ejercicio Profesional",
      correlativas: ["microbiologia"],
      correlativasTexto:
        "Para cursar: aprobada Microbiología. Regular en Inmunología, Inmunohematología, Banco de Sangre, Inmunoserología, Patología Inmunohematológica, Bioestadística y Epidemiología, Inglés Básico y Práctica Profesional Segundo Año.",
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "ingles-tecnico",
      nombre: "Inglés Técnico",
      correlativas: ["ingles-basico"],
      ciclo: 4,
      periodo: "cuatrimestral",
    },
    {
      id: "practica-profesional-tercer-ano",
      nombre: "Práctica Profesional Tercer Año",
      correlativas: [
        "microbiologia",
        "inmunologia",
        "inmunohematologia",
        "banco-de-sangre",
        "inmunoserologia",
        "patologia-inmunohematologica",
        "practica-profesional-segundo-ano",
      ],
      correlativasTexto:
        "Para cursar: aprobadas Microbiología, Inmunología, Inmunohematología, Banco de Sangre, Inmunoserología, Patología Inmunohematológica y Práctica Profesional Segundo Año. Regular en Bioestadística y Epidemiología e Inglés Básico.",
      ciclo: 4,
      periodo: "anual",
    },

    // ---------- Asignaturas Electivas (elegir 1) ----------
    {
      id: "promocion-de-la-donacion-de-sangre",
      nombre: "Promoción de la Donación de Sangre",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
        "practica-profesional-segundo-ano",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "banco-de-sangre-de-cordon-umbilical",
      nombre: "Banco de Sangre de Cordón Umbilical",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
        "practica-profesional-segundo-ano",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "banco-de-tejidos",
      nombre: "Banco de Tejidos",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
        "practica-profesional-segundo-ano",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
      electiva: true,
    },
    {
      id: "biologia-molecular-en-el-banco-de-sangre",
      nombre: "Biología Molecular en el Banco de Sangre",
      correlativas: [
        "cbc",
        "anatomia",
        "histologia",
        "fisiologia-de-la-sangre",
        "practica-profesional-segundo-ano",
      ],
      ciclo: 4,
      periodo: "cuatrimestral",
      electiva: true,
    },
  ],
  nombresCiclos: {
    0: "Ciclo Básico Común",
    2: "1° año",
    3: "2° año",
    4: "3° año",
  },
};
