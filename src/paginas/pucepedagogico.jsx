import React, { useState, useEffect } from "react";
import "../css/Formulario.css";
import logo from "../assets/log.png";
import { useNavigate } from "react-router-dom";

function Pucepedagogico() {
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
        <h2>PROCESO PEDAGOGICO</h2>
      </div>
      <li>PROCESO PEDAGOGICO VALOR $200</li>
      <ul>
        <li>
          El proceso pedagógico consta de 96 horas que se harán en dos semestres, 4 horas por semana en el primer semestre y 2 horas por semana en el segundo semestre.
        </li>
      </ul>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            readOnly
          />
        </div>
        <div className="form-row">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            readOnly
          />
        </div>
        <div className="form-row">
          <label htmlFor="celular">Celular:</label>
          <input
            type="number"
            id="celular"
            name="celular"
            value={formData.celular}
            readOnly
          />
        </div>
        <div className="button-group">
          <button type="submit">Enviar y Finalizar Proceso</button>
          <button type="button" onClick={() => window.print()}>Imprimir</button>
        </div>
      </form>
    </div>
  );
}

export default Pucepedagogico;
