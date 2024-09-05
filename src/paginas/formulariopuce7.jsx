import React, { useState } from 'react';
import '../css/Formulario.css';
import logo from '../assets/log.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Formulariopuce7() {
  const location = useLocation();
  const { ci } = location.state || {};

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    servicio1: false,
    frecuencia1: "",
    servicio2: false,
    frecuencia2: "",
    servicio3: false,
    frecuencia3: "",
    servicio4: false,
    frecuencia4: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      { key: 'servicio1', frequency: 'frecuencia1' },
      { key: 'servicio2', frequency: 'frecuencia2' },
      { key: 'servicio3', frequency: 'frecuencia3' },
      { key: 'servicio4', frequency: 'frecuencia4' },
    ];

    for (let { key, frequency } of requiredFields) {
      if (formData[key] && !formData[frequency]) {
        return `Por favor, seleccione la frecuencia para ${key}.`;
      }
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationMessage = validateForm();
    if (validationMessage) {
      console.log(validationMessage);
      return;
    }

    console.log("Datos del formulario:", formData);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/SuDServicio", {
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
      navigate("/formulariopuce42", { state: { ci: formData.id_ci } });
    } catch (error) {
      console.error("Error al crear estudiante:", error);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1 className="text-xl font-semibold mt-6">Datos institucionales sobre los servicios:</h1>
      <h4>Seleccione los servicios que hará uso:</h4>

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="servicio1">Ludoteca</label>
          <input
            type="checkbox"
            id="servicio1"
            name="servicio1"
            checked={formData.servicio1}
            onChange={handleChange}
          />
          <select
            id="frecuencia1"
            name="frecuencia1"
            value={formData.frecuencia1}
            onChange={handleChange}
            disabled={!formData.servicio1}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="servicio2">Villas de Hospedaje</label>
          <input
            type="checkbox"
            id="servicio2"
            name="servicio2"
            checked={formData.servicio2}
            onChange={handleChange}
          />
          <select
            id="frecuencia2"
            name="frecuencia2"
            value={formData.frecuencia2}
            onChange={handleChange}
            disabled={!formData.servicio2}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="servicio3">Servicio de Autobús</label>
          <input
            type="checkbox"
            id="servicio3"
            name="servicio3"
            checked={formData.servicio3}
            onChange={handleChange}
          />
          <select
            id="frecuencia3"
            name="frecuencia3"
            value={formData.frecuencia3}
            onChange={handleChange}
            disabled={!formData.servicio3}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="servicio4">Alquiler de Computadoras</label>
          <input
            type="checkbox"
            id="servicio4"
            name="servicio4"
            checked={formData.servicio4}
            onChange={handleChange}
          />
          <select
            id="frecuencia4"
            name="frecuencia4"
            value={formData.frecuencia4}
            onChange={handleChange}
            disabled={!formData.servicio4}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulariopuce7;
