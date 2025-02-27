import { createRoot } from "react-dom/client";
import SequentialForms from "./SequentialForms";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <section>
      <SequentialForms></SequentialForms>
    </section>
  </>
);
