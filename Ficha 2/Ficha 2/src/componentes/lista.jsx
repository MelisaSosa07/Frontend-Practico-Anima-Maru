function Lista() {
  const libros = [
    "Harry Potter",
    "El Señor de los Anillos",
    "El Código Da Vinci",
    "Cien Años de Soledad",
    "Eragon",
  ];

  return (
    <ul>
      {libros.map((libro, index) => (
        <li key={index}>{libro}</li>
      ))}
    </ul>
  );
}

export default Lista;
