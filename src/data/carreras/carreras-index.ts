import { medicina } from "./medicina";
import { licenciaturaEnNutricion } from "./licenciaturaEnNutricion";
import type { Carrera } from "./types";
import { tecnicaturaHemoterapiaInmunohematologia } from "./tecnicaturaHemoterapiaInmunohematologia";
import { enfermeriaUniversitaria } from "./enfermeriaUniversitaria";

export const carreras: Carrera[] = [
  enfermeriaUniversitaria,
  licenciaturaEnNutricion,
  medicina,
  tecnicaturaHemoterapiaInmunohematologia,
];
