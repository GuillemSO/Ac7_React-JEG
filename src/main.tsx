import { createRoot } from "react-dom/client";
import SequentialForms from "./SequentialForms";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <h1 className="text-4xl">Hola</h1>
    <SequentialForms></SequentialForms>
  </>
);
