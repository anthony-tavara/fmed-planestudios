import { Routes, Route } from "react-router-dom";
import SelectorDeCarrera from "./pages/SelectorDeCarrera";
import Carrera from "./pages/Carrera";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectorDeCarrera />} />
      <Route path="/:carreraId" element={<Carrera />} />
    </Routes>
  );
}
