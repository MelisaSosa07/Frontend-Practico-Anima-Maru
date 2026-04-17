import Contador from "./contador.jsx";
import "./estado.css";
import { useState } from "react";

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(false);

  const cambiarEstado = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="contenedor">
      <div className="tarjeta">
        <button className="boton toggle" onClick={cambiarEstado}>
          {mostrar ? "Ocultar contador" : "Ver contador"}
        </button>

        {mostrar && <Contador />}
      </div>
    </div>
  );
}

export default MostrarOcultar;
