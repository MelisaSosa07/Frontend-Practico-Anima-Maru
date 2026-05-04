import { useState } from "react";
function Saludo() {
  const [nombre, setNombre] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <p style={{ marginTop: "12px", fontSize: "18px" }}>
        {nombre ? <span>Hola {nombre}</span> : <span>Hola</span>}
      </p>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </div>
  );
}
export default Saludo;
