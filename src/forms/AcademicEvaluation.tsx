import React from "react";

function AcademicEvaluation({ children }: any) {
  return (
    <>
      <h1 className="bg-slate-700 text-white text-5xl text-center p-5">
        Formulario de evaluación académica
      </h1>
      <form
        noValidate
        className="bg-slate-700 p-10 text-2xl text-white flex flex-col [&>*]:p-5"
      >
        <label htmlFor="comentarios">
          <h2>¿Qué mejorarías en el curso?</h2>
          <textarea
            name="comentarios"
            id="inp_comentarios"
            className="border-2 rounded-md p-2"
          ></textarea>
        </label>
        <label htmlFor="satisfaccion">
          <h2>¿Qué tan satisfecho estás con el contenido del curso?</h2>
          <select name="satisfaccion" id="" className="border-2 rounded-md p-2">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </label>
        <label htmlFor="asistencia">
          <h2>¿Asististe a todas las clases?</h2>
          <p>Si</p>
          <input type="checkbox" name="asistencia" id="" value="si" />
          <p>No</p>
          <input type="checkbox" name="asistencia" id="" value="no" />
        </label>
        <label htmlFor="horarios">
          <h2>
            ¿Cuáles horarios prefieres para las clases? (Selecciona hasta 2
            opciones)
          </h2>
          <select name="horarios" id="" className="border-2 rounded-md p-2">
            <option value="">Lunes 9:00 AM - 11:00 AM</option>
            <option value="">Martes 3:00 PM - 5:00 PM</option>
            <option value="">Miércoles 10:00 AM - 12:00 PM"</option>
            <option value="">Jueves 1:00 PM - 3:00 PM</option>
            <option value="">Viernes 4:00 PM - 6:00 PM</option>
          </select>
        </label>
      </form>
      {children}
    </>
  );
}

export default AcademicEvaluation;
