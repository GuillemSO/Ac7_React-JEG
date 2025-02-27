import React from "react";

function TechnologiesPreferences({ children }: any) {
  return (
    <>
      <h1 className="bg-slate-700 text-white text-5xl text-center p-5">
        Preferencias Tecnológicas
      </h1>
      <form
        noValidate
        className="bg-slate-700 p-10 text-2xl text-white flex flex-col [&>*]:p-5"
      >
        <label className="flex flex-col pr-4">
          <h2>¿Qué tecnología te gustaría aprender en el futuro?</h2>
          <textarea
            placeholder="Me gustaría aprender sobre inteligencia artificial y machine learning."
            className="border border-white rounded-2xl bg-white text-black p-2 mt-4 w-2/3"
          ></textarea>
        </label>

        <label className="flex flex-col pr-4">
          <h2>¿Qué sistema operativo prefieres usar?</h2>
          <select className="border border-white rounded-2xl bg-white text-black p-2 mt-4 w-1/3 cursor-pointer">
            <option>Windows</option>
            <option>Linux</option>
            <option>MacOS</option>
          </select>
        </label>

        <label className="flex flex-col pr-4">
          <h2>
            ¿Qué dispositivos usas regularmente? (Selecciona hasta 2 opciones)
          </h2>
          <div className="flex flex-row m-5">
            <input
              type="checkbox"
              className="flex flex-row w-8 mr-2 cursor-pointer"
            />
            <p>smartphone</p>
          </div>
          <div className="flex flex-row m-5">
            <input
              type="checkbox"
              className="flex flex-row w-8 mr-2 cursor-pointer"
            />
            <p>laptop</p>
          </div>
          <div className="flex flex-row m-5">
            <input
              type="checkbox"
              className="flex flex-row w-8 mr-2 cursor-pointer"
            />
            <p>tablet</p>
          </div>
          <div className="flex flex-row m-5">
            <input
              type="checkbox"
              className="flex flex-row w-8 mr-2 cursor-pointer"
            />
            <p>smartwatch</p>
          </div>
        </label>

        <label className="flex flex-col pr-4">
          <h2>
            ¿Cuántas horas a la semana dedicas a aprender sobre tecnología?
          </h2>
          <select className="border border-white rounded-2xl bg-white text-black p-2 mt-4 w-1/3 cursor-pointer">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>
      </form>
      {children}
    </>
  );
}

export default TechnologiesPreferences;
