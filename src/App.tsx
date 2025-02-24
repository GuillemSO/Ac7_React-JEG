import React from "react";

function App() {
  const func = (hola: string) => {
    return hola;
  };

  return (
    <>
      <h1>{func("Guillem")}</h1>
    </>
  );
}

export default App;
