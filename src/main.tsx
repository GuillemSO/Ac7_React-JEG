import { createRoot } from "react-dom/client";
import SequentialForms from "./SequentialForms";
import "@fontsource-variable/playpen-sans";
import "@fontsource/poppins";
import "./index.css";
import Layout from "./Layout";

createRoot(document.getElementById("root")!).render(
  <>
    <Layout>
      <SequentialForms></SequentialForms>
    </Layout>
  </>
);
