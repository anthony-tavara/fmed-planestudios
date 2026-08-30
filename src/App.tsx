import { Routes, Route } from "react-router-dom";
import SelectorDeCarrera from "./pages/SelectorDeCarrera";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectorDeCarrera />} />
    </Routes>
  );
}
