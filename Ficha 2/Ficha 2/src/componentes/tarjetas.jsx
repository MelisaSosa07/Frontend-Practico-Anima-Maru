import "./tarjetas.css";
function Tarjetas() {
  const personas = [
    { nombre: "Harry", rol: "Mago" },
    { nombre: "Ron", rol: "Alumno" },
    { nombre: "Hermaione", rol: "Bruja" },
    { nombre: "Hagrid", rol: "Cuidador" },
    { nombre: "Dombuldore", rol: "Director" },
  ];

  return (
    <div className="contenedor">
      {personas.map((persona, index) => (
        <div className="card" key={index}>
          <h2>{persona.nombre}</h2>
          <p>{persona.rol}</p>
        </div>
      ))}
    </div>
  );
}

export default Tarjetas;
