import React, { useState, useEffect } from "react";
import "../css/Formulario.css"; 
import logo from "../assets/log.png"; 
import { useNavigate } from "react-router-dom"; 

function Puceexamen() {
  const [formData, setFormData] = useState({
    apellidos: "",
    nombres: "",
    celular: "",
  });

  const [examInfo, setExamInfo] = useState({
    lugar: "",
    fecha: "",
    hora: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Generar un lugar aleatorio
    const lugares = ["Aula 10", "Aula 20", "Aula 30", "Aula 40"];
    const lugarAleatorio = lugares[Math.floor(Math.random() * lugares.length)];

    // Generar una fecha aleatoria dentro del próximo mes
    const today = new Date();
    const fechaAleatoria = new Date(today);
    fechaAleatoria.setDate(today.getDate() + Math.floor(Math.random() * 30));
    const fechaFormateada = fechaAleatoria.toISOString().split("T")[0];

    // Generar una hora aleatoria entre las 8 AM y las 5 PM
    const horaAleatoria = `${String(Math.floor(Math.random() * (17 - 8) + 8)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;

    setExamInfo({
      lugar: lugarAleatorio,
      fecha: fechaFormateada,
      hora: horaAleatoria,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = [];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert("Todos los campos son obligatorios");
        setIsFormValid(false);
        return false;
      }
    }
    setErrorMessage(""); 
    setIsFormValid(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);
      navigate('/tikepuce'); 
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo ISTEC" className="logo" />
        <h2>PROCESO DE MATRICULACION</h2>
      </div>
      <li>EXAMEN DE ADMISION VALOR $50</li>
      <ul>
        <li>
          A. El examen de admisión se hace de forma inmediata en la
          institución cuando el/la postulante se va a matricular. Será
          estudiante regular una vez haya aprobado el examen.
        </li>
      </ul>
      {errorMessage && <div className="error-message">{errorMessage}</div>} 
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="lugar">Lugar:</label>
          <input type="text" id="lugar" value={examInfo.lugar} readOnly />
        </div>
        <div className="form-row">
          <label htmlFor="fecha">Fecha de la Evaluación:</label>
          <input type="date" id="fecha" value={examInfo.fecha} readOnly />
        </div>
        <div className="form-row">
          <label htmlFor="hora">Horario de Evaluación:</label>
          <input type="time" id="hora" value={examInfo.hora} readOnly />
        </div>
      
        
        <div className="button-group">
          <button type="submit">Enviar y Finalizar Proceso</button>
          <button type="button" onClick={() => window.print()}>Imprimir</button>
        </div>
      </form>
     
    </div>
  );
}

export default Puceexamen;
