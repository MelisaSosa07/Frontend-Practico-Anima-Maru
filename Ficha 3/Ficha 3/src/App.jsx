import Saludo from "./component/Saludo";
import Formulario from "./component/Formulario";
import Tarjeta from "./component/Tarjeta";
import Tarjeta2 from "./component/Tarjeta2";
import "./App.css";
import { useState } from "react";
function App() {
  const [datos, setDatos] = useState(null);
  return (
    <>
      <Saludo />
      <Formulario />
      <div>
        {datos === null ? (
          <Tarjeta setDatos={setDatos} />
        ) : (
          <Tarjeta2 datos={datos} />
        )}
      </div>
    </>
  );
}

export default App;
