import { useState } from "react";
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const manejarSubmit = (e) => {
    e.preventDefault();
    alert(`Hola ${nombre}, tienes ${edad} años`);
  };

  return (
    <form onSubmit={manejarSubmit} style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <input
        type="number"
        placeholder="Escribí tu edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", marginTop: "12px" }}
      />
      <button type="submit" style={{ marginTop: "12px", padding: "8px" }}>
        Enviar
      </button>
    </form>
  );
}
export default Formulario;
