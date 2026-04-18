import { useState } from "react";
import Lista from "./lista2";

const ListaEstado = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar lista" : "Ver lista"}
      </button>

      {mostrar && <Lista />}
    </div>
  );
};

export default ListaEstado;
