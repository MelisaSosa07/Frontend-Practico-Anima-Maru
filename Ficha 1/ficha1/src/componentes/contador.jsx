import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  const sumar = () => {
    setNumero(numero + 1);
  };

  const restar = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  return (
    <div>
      <h2 className="numero">{numero}</h2>

      <button className="boton" onClick={restar}>
        -
      </button>
      <button className="boton" onClick={sumar}>
        +
      </button>
    </div>
  );
}

export default Contador;
