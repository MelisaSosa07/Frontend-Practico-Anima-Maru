import Tarjetas from "./components/Tarjetas";
import { useState } from "react";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const bandas = [
    {
      nombre: "Metallica",
      genero: "Metal",
      pais: "Estados Unidos",
      destacado: true,
    },
    {
      nombre: "Iron Maiden",
      genero: "Metal",
      pais: "Reino Unido",
      destacado: false,
    },
    { nombre: "AC/DC", genero: "Rock", pais: "Australia", destacado: false },
    {
      nombre: "Nirvana",
      genero: "Grunge",
      pais: "Estados Unidos",
      destacado: false,
    },
    {
      nombre: "Red Hot Chili Peppers",
      genero: "Funk Rock",
      pais: "Estados Unidos",
      destacado: true,
    },
    {
      nombre: "Green Day",
      genero: "Punk Rock",
      pais: "Estados Unidos",
      destacado: true,
    },
  ];

  return (
    <div clasName="container">
      <h1>Bandas de Rock</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar Bandas" : "Mostrar Bandas"}
      </button>
      {visible && (
        <div className="bandas">
          {bandas.map((banda, index) => (
            <Tarjetas
              key={index}
              nombre={banda.nombre}
              genero={banda.genero}
              pais={banda.pais}
              destacado={banda.destacado}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
