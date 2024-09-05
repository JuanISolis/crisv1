import { useEffect, useState } from "react";

function Index() {
  const [lista, setLista] = useState([]);

  const getDatos = async () => {
    const api = await fetch("http://127.0.0.1:8000/api/estudiante");
    let respuesta = await api.json();
    console.log(respuesta);
    setLista(respuesta.data);
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <div>
      <p>Listado estudiantes</p>
      {lista.map((estudiante, index) => {
        return (
          <div key={index}>
            <p>{estudiante.apellidos}</p>
            <p>{estudiante.nombre}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Index;
