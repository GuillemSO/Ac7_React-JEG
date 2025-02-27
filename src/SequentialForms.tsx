import { useState } from "react";
import AcademicEvaluation from "./forms/AcademicEvaluation";
import PersonalInfo from "./forms/PersonalInfo";
import TechnologiesPreferences from "./forms/TechnologiesPreferences";
import CinemaPreferences from "./forms/CinemaPreferences";

function SequentialForms() {
  const [actualForm, setActualForm] = useState(0);

  const changeForm = () => {
    setActualForm((actualForm) => actualForm + 1);
  };

  const forms = [
    <button
      key="start"
      className="cursor-pointer text-white text-4xl border rounded-md p-5"
      onClick={changeForm}
    >
      Empezar el cuestionario
    </button>,
    <PersonalInfo key="personal">
      <button onClick={changeForm}>Evaluacion academica</button>
    </PersonalInfo>,
    <AcademicEvaluation key="academic">
      <button onClick={changeForm}>Preferencias tecnologicas</button>
    </AcademicEvaluation>,
    <TechnologiesPreferences key="tech">
      <button onClick={changeForm}>Preferencias cinematograficas</button>
    </TechnologiesPreferences>,
    <CinemaPreferences key="cinema" onNext={changeForm}>
      <button onClick={changeForm}>Finalizar cuestionario</button>
    </CinemaPreferences>,
  ];

  return (
    <section>{forms[actualForm] || <h1>Cuestionario finalizado</h1>}</section>
  );
}

export default SequentialForms;
