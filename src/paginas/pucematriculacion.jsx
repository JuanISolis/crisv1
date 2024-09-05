import React from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/log.png"; // Importa el logo
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

function Pucematriculacion() {
  const navigate = useNavigate(); // Inicializa useNavigate para redirección

  // Función para manejar la redirección
  const handleNavigation = (route) => {
    navigate(route); // Redirige a la ruta especificada
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1 className="text-xl font-semibold mt-6">Proceso de Matriculacion</h1>

      <h2 className="text-xl font-semibold mt-6">Seleccione una opción</h2>
      <li>EXAMEN DE ADMISION VALOR $50</li>
      <li>PROCESO PEDAGOGICO VALOR $200</li>


      <div className="button-group">
        {/* Botón para redirigir a "Examen de Admisión" */}
        <button
          type="button"
          onClick={() => handleNavigation('/matricula2')}
          className="button-exam">
          A.)Examen de Admisión
          
        </button>
        
        {/* Botón para redirigir a "Proceso Pedagógico" */}
        <button
          type="button"
          onClick={() => handleNavigation('/pucepedagogico')}
          className="button-pedagogico">
          Proceso Pedagógico
        </button>
      </div>
      
      
    </div>
  );
}

export default Pucematriculacion;
