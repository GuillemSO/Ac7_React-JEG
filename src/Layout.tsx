import React from "react";

function Layout({ children }: any) {
  return (
    <>
      <header className="fixed top-0 border-b-2 border-white w-screen h-20 flex justify-between items-center bg-primary rounded-b-2xl px-10">
        <div className="flex flex-row">
          <img src="vite.svg" alt="Logo vite" />
          <img src="react.svg" alt="Logo react" />
        </div>
        <p className="text-white text-lg font-special">
          Actividad de Cuestionarios con React
        </p>
        <img className="w-10" src="form.svg" alt="Logo form" />
      </header>
      <main className="flex flex-col mt-5 justify-center items-center align-middle h-screen">
        <h1 className="text-secondary font-bold text-5xl m-4 font-special">
          Bienvenidos! Cuestionarios con React
        </h1>
        <p className="text-secondary mb-8 text-2xl font-regular">
          A continuación dale al botón para empezar los siguientes cuestionarios
        </p>
        {children}
      </main>
      <footer className="fixed bottom-0 border-t-2 border-white w-screen h-20 flex justify-center items-center bg-primary rounded-t-2xl">
        <p className="text-white text-lg font-special">
          Hecho por Joel Mesas, Guillem Sanchez y Eric Baena
        </p>
      </footer>
    </>
  );
}

export default Layout;
