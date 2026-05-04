import { useState } from "react";

function Tarjeta({ setDatos }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    setDatos({
      titulo: titulo,
      descripcion: descripcion,
    });
  };

  return (
    <div>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Tarjeta;
