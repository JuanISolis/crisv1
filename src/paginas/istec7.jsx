import React, { useState } from 'react';
import '../css/Formulario.css'; // Asegúrate de crear este archivo
import logo from '../assets/logo.png'; // Importa el logo
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirección

function Istec7() {
  const [formData, setFormData] = useState({
    ludoteca: false,
    villas: false,
    autobus: false,
    alquiler: false,
    ludotecaFrequency: "",
    villasFrequency: "",
    autobusFrequency: "",
    alquilerFrequency: "",
  });

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      { key: 'ludoteca', frequency: 'ludotecaFrequency' },
      { key: 'villas', frequency: 'villasFrequency' },
      { key: 'autobus', frequency: 'autobusFrequency' },
      { key: 'alquiler', frequency: 'alquilerFrequency' },
    ];

    for (let { key, frequency } of requiredFields) {
      if (formData[key] && !formData[frequency]) {
        console.log(`Campo no lleno: ${key} - ${frequency}`);
        return `Por favor, seleccione la frecuencia para ${key}.`;
      }
    }

    // Si ningún servicio está seleccionado, se permite continuar sin mostrar un mensaje de error
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationMessage = validateForm();
    if (validationMessage) {
      alert(validationMessage);
    } else {
      // Redirige a la siguiente página si el formulario es válido
      navigate('/istec8');
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" /> {/* Añadir logo */}

      <h1 className="text-xl font-semibold mt-6">Datos institucionales sobre los servicios:</h1>
      <h4>Seleccione los servicios que hará uso:</h4>

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="ludoteca">Ludoteca</label>
          <input
            type="checkbox"
            id="ludoteca"
            name="ludoteca"
            checked={formData.ludoteca}
            onChange={handleChange}
          />
          <select
            id="ludotecaFrequency"
            name="ludotecaFrequency"
            value={formData.ludotecaFrequency}
            onChange={handleChange}
            disabled={!formData.ludoteca}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="villas">Villas de Hospedaje</label>
          <input
            type="checkbox"
            id="villas"
            name="villas"
            checked={formData.villas}
            onChange={handleChange}
          />
          <select
            id="villasFrequency"
            name="villasFrequency"
            value={formData.villasFrequency}
            onChange={handleChange}
            disabled={!formData.villas}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="autobus">Servicio de Autobús</label>
          <input
            type="checkbox"
            id="autobus"
            name="autobus"
            checked={formData.autobus}
            onChange={handleChange}
          />
          <select
            id="autobusFrequency"
            name="autobusFrequency"
            value={formData.autobusFrequency}
            onChange={handleChange}
            disabled={!formData.autobus}
          >
            <option value="">Seleccione</option>
            <option value="pocas">Pocas veces</option>
            <option value="normalmente">Normalmente</option>
            <option value="bastante">Bastante</option>
            <option value="siempre">Siempre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="alquiler">Alquiler de Computadoras</label>
          <input
            type="checkbox"
            id="alquiler"
            name="alquiler"
            checked={formData.alquiler}
            onChange={handleChange}
          />
          <select
            id="alquilerFrequency"
            name="alquilerFrequency"
            value={formData.alquilerFrequency}
            onChange={handleChange}
            disabled={!formData.alquiler}
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

export default Istec7;