import React, { useState } from "react";
import "../css/Formulario.css";
import logo from "../assets/log.png";
import { useNavigate, useLocation } from "react-router-dom";

function Formulariopuce42() {
  const location = useLocation();
  const { ci } = location.state || {};

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    bono: "",
    ingresos_mensuales: "",
    empleo_ingresos: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = ['ingresos_mensuales', 'empleo_ingresos'];

    for (let field of requiredFields) {
      if (!formData[field]) {
        setErrorMessage("Todos los campos obligatorios deben ser llenados.");
        return false;
      }
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Datos del formulario:", formData);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/Ingresar/Ingreso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      console.log("Estudiante creado:", data);
      navigate("/formulariopuce43", { state: { ci: formData.id_ci } });
    } catch (error) {
      console.error("Error al crear estudiante:", error);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1 className="text-xl font-semibold mt-6">Ingresos Personales</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="empleo_ingresos">¿En qué emplea sus ingresos?:</label>
          <input
            type="text"
            id="empleo_ingresos"
            name="empleo_ingresos"
            value={formData.empleo_ingresos}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="ingresos_mensuales">Ingresos Mensuales:</label>
          <input
            type="number"
            id="ingresos_mensuales"
            name="ingresos_mensuales"
            value={formData.ingresos_mensuales}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="bono">Bono ($):</label>
          <input
            type="number"
            id="bono"
            name="bono"
            value={formData.bono}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulariopuce42;
