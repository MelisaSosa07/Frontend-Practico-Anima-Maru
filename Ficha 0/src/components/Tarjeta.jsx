import "./Tarjeta.css";

function Tarjeta(props) {
  return (
    <div>
      <h1>Hola {props.nombre}</h1>
      <h3>{props.descripcion}</h3>
      <a href={props.link}>Link</a>
      <img src={props.imagen} alt="gatito"></img>
    </div>
  );
}
export default Tarjeta;
