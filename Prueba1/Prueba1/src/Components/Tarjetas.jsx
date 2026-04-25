function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>{props.genero}</p>
      <span className="categoria">{props.pais}</span>
      {props.destacado && <p className="destacado">🎸</p>}
    </div>
  );
}
export default Tarjeta;
