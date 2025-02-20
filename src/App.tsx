import React, { useState } from "react";

// 1. Definimos una interfaz para las props del componente.
interface FormularioProps {
  titulo: string; // Propiedad que recibirá el título del formulario.
}

// 2. Componente funcional con una prop tipada mediante la interfaz FormularioProps.
const FormularioRegistro: React.FC<FormularioProps> = ({ titulo }) => {
  // 3. Definimos los estados del formulario con tipos.
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // 4. Función que maneja el envío del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga del formulario

    // 5. Validaciones simples del formulario.
    if (!nombre || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // 6. Si todo está bien, se limpia el error y se procesa el formulario.
    setError("");
    console.log("Formulario enviado con éxito!");
    console.log({ nombre, email, password });
  };

  // 7. JSX para el formulario de registro.
  return (
    <div>
      <h2>{titulo}</h2> {/* Mostramos el título que recibimos como prop */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* 8. Mostrar el mensaje de error si existe */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;
