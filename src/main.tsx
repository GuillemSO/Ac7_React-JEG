import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FormularioRegistro from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormularioRegistro titulo="Formulario no entiendo nada" />
  </StrictMode>
);
