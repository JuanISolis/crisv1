import React, { useState } from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/logo.png"; // Importa el logo
import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate para redirección

function Istec10() {
  const location = useLocation();
  const { ci } = location.state || {};

  const [formData, setFormData] = useState({
    emergencias: {
      id_ci: ci || "",
      nombre_contacto: "",
      contacto_emergencia: "",
    },
    discapacidad: {
      id_ci: ci || "",
      nro_carnet: "",
      tipo_discapacidad: "",
      porcentaje_discapacidad: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.'); // Desestructurar el nombre del campo

    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const validateForm = () => {
    const requiredFields = [
      'emergencias.nombre_contacto',
      'emergencias.contacto_emergencia',
    ];

    for (let field of requiredFields) {
      const [section, fieldName] = field.split('.');
      if (!formData[section][fieldName]) {
        alert("Los campos de emergencia son obligatorios");
        setIsFormValid(false);
        return false;
      }
    }

    setErrorMessage("");
    setIsFormValid(true);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Datos del formulario:", formData);

    try {
      let response;

      if (formData.discapacidad.nro_carnet || formData.discapacidad.tipo_discapacidad || formData.discapacidad.porcentaje_discapacidad) {
        response = await fetch("http://127.0.0.1:8000/api/Discapacidad2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData.discapacidad),
        });
      }

      if (formData.emergencias.nombre_contacto && formData.emergencias.contacto_emergencia) {
        response = await fetch("http://127.0.0.1:8000/api/Emergencia2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData.emergencias),
        });
      }

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      console.log("Datos enviados:", data);
      navigate("/istec11", { state: { ci: formData.id_ci } });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1 className="text-xl font-semibold mt-6">Discapacidad</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="discapacidad.porcentaje_discapacidad">Porcentaje Discapacidad:</label>
          <input
            type="number"
            id="discapacidad.porcentaje_discapacidad"
            name="discapacidad.porcentaje_discapacidad"
            value={formData.discapacidad.porcentaje_discapacidad}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="discapacidad.nro_carnet">Número de Carnet:</label>
          <input
            type="number"
            id="discapacidad.nro_carnet"
            name="discapacidad.nro_carnet"
            value={formData.discapacidad.nro_carnet}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="discapacidad.tipo_discapacidad">Tipo de Discapacidad:</label>
          <input
            type="text"
            id="discapacidad.tipo_discapacidad"
            name="discapacidad.tipo_discapacidad"
            value={formData.discapacidad.tipo_discapacidad}
            onChange={handleChange}
          />
        </div>

        <h3 style={{ color: "red" }} className="text-xl font-semibold mt-6">En caso de Emergencia llamar:</h3>

        <div className="form-row">
          <label htmlFor="emergencias.nombre_contacto">Nombre del Contacto:</label>
          <input
            type="text"
            id="emergencias.nombre_contacto"
            name="emergencias.nombre_contacto"
            value={formData.emergencias.nombre_contacto}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="emergencias.contacto_emergencia">Número de Contacto:</label>
          <input
            type="number"
            id="emergencias.contacto_emergencia"
            name="emergencias.contacto_emergencia"
            value={formData.emergencias.contacto_emergencia}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Istec10;
