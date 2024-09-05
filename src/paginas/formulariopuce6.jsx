import React, { useState } from "react";
import "../css/Formulario.css";
import logo from "../assets/log.png";
import { useNavigate, useLocation } from "react-router-dom";

function Formulariopuce6() {
  const location = useLocation();
  const { ci } = location.state || {};
  console.log("CI recibido:", ci);

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    nom_colegio: "",
    tipo_colegio: "",
    ciudad: "",
    provincia: "",
    canton: "",
    titulo: "",
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
    const requiredFields = [
      "nom_colegio",
      "tipo_colegio",
      "ciudad",
      "provincia",
      "canton",
      "titulo",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert("Todos los campos son obligatorios");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);

      try {
        const response = await fetch("http://127.0.0.1:8000/api/Estudios2", {
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

        // Redirige a la siguiente página solo si el envío fue exitoso
        setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
        navigate("/formulariopuce7", { state: { ci: formData.id_ci } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage(
          "Error al enviar los datos. Por favor, intente nuevamente."
        );
      }
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1>Estudios Personales:</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="tipo_colegio">Tipo de Colegio:</label>
          <select
            id="tipo_colegio"
            name="tipo_colegio"
            value={formData.tipo_colegio}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="fiscal">Fiscal</option>
            <option value="fiscomisional">Fiscomisional</option>
            <option value="privado">Privado</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="nom_colegio">Nombre del Colegio:</label>
          <input
            type="text"
            id="nom_colegio"
            name="nom_colegio"
            value={formData.nom_colegio}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="canton">Cantón:</label>
          <input
            type="text"
            id="canton"
            name="canton"
            value={formData.canton}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="titulo">Nombre del Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="provincia">Provincia:</label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            value={formData.provincia}
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

export default Formulariopuce6;
