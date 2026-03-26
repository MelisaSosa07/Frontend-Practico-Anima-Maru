import "./App.css";
import Tarjeta from "./components/tarjeta";
import gatito from "./assets/gatito saludando.jpg";
import gatito2 from "./assets/gatito saltando.jpeg";
import gatito3 from "./assets/gatito cayendo.webp";
function App() {
  return (
    <div>
      <h1>Ultimo semestre</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nulla
        atque numquam dolorum cupiditate autem ratione sit eveniet vitae maxime,
        tempora commodi quos repudiandae laudantium? Doloremque repellendus nam
        voluptate omnis?
      </p>
      <Tarjeta
        nombre="Tomi"
        descripcion="Gatito Saludando"
        link="https://www.canva.com/design/DAHEy5bdZmc/LoUJV_sdYoSH6RwrSMcGXw/edit"
        imagen={gatito}
      ></Tarjeta>
      <Tarjeta
        nombre="Manzanita"
        descripcion="Gatito Saltando"
        link="https://www.canva.com/design/DAHEy5bdZmc/LoUJV_sdYoSH6RwrSMcGXw/edit"
        imagen={gatito2}
      ></Tarjeta>
      <Tarjeta
        nombre="Pedro"
        descripcion="Gatito Cayendo"
        link="https://www.canva.com/design/DAHEy5bdZmc/LoUJV_sdYoSH6RwrSMcGXw/edit"
        imagen={gatito3}
      ></Tarjeta>
    </div>
  );
}

export default App;
