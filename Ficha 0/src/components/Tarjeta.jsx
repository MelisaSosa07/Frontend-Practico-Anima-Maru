import "./Tarjeta.css";

function Tarjeta(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imagen} className="card-img-top" alt="gatito"></img>
      <div className="card-body">
        <h3 className="card-title">Hola {props.nombre}</h3>
        <h5 className="card-text">{props.descripcion}</h5>
        <a href={props.link} className="boton-link">
          Link
        </a>
      </div>
    </div>
  );
}
export default Tarjeta;
