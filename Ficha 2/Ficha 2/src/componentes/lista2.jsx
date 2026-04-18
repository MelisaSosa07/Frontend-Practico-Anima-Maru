const Lista2 = () => {
  const personas = [
    { nombre: "Aragorn", rol: "Rey" },
    { nombre: "Sauron", rol: "Mago oscuro" },
    { nombre: "Saruman", rol: "Mago malo" },
    { nombre: "Gandalf", rol: "Mago bueno" },
    { nombre: "Frodo", rol: "Hobbit" },
  ];

  return (
    <ul>
      {personas.map((persona, index) => (
        <li key={index}>
          {persona.nombre} - {persona.rol}
        </li>
      ))}
    </ul>
  );
};

export default Lista2;
