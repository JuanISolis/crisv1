import React, { useState } from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/log.png"; // Importa el logo
import { useNavigate, useLocation} from "react-router-dom"; // Importa useNavigate para redirección

function Formulariopuce43() {
  const location = useLocation();
  const { ci } = location.state || {};

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    familiar_bono: "",
    hijos: "",
    nivel_formacion_madre: "",
    nivel_formacion_padre: "",
    miembros_hogar: "",
    Padre_o_Madre_soltera:"",

  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false); // Nuevo estado

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      "hijos",
      "nivel_formacion_madre",
      "nivel_formacion_padre",
      "miembros_hogar",
      "Padre_o_Madre_soltera",

    ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Datos del formulario:", formData);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/Familia2", {
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
      navigate("/formulariopuce44", { state: { ci: formData.id_ci } });
    } catch (error) {
      console.error("Error al crear estudiante:", error);
    }
  };



  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" /> {/* Añadir logo */}
      <h1 className="text-xl font-semibold mt-6">Informacion Familiar</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="nivel_formacion_padre">Nivel formacion Padre</label>
          <select
            id="nivel_formacion_padre"
            name="nivel_formacion_padre"
            value={formData.nivel_formacion_padre}
            onChange={handleChange}>
            <option value="">Seleccione una Opción</option>
            <option value="Estudio Basico">Estudio Basico</option>
            <option value="Estudio Basico Incompleto">Estudio Basico Incompleto</option>
            <option value="Bachillerato">Bachillerato</option>
            <option value="Bachillerato Incompleta">Bachillerato Incompleta</option>
            <option value="Estudio Superior">Estudio Superior</option>
            <option value="Estudio Superior Incompleto">Estudio Superior Incompleto</option>

          </select>
        </div>
        <div className="form-row">
          <label htmlFor="nivel_formacion_madre">Nivel formacion Madre:</label>
          <select
            id="nivel_formacion_madre"
            name="nivel_formacion_madre"
            value={formData.nivel_formacion_madre}
            onChange={handleChange}>

            <option value="">Seleccione una Opción</option>
            <option value="Estudio Basico">Estudio Basico</option>
            <option value="Estudio Basico Incompleto">Estudio Basico Incompleto</option>
            <option value="Bachillerato">Bachillerato</option>
            <option value="Bachillerato Incompleta">Bachillerato Incompleta</option>
            <option value="Estudio Superior">Estudio Superior</option>
            <option value="Estudio Superior Incompleto">Estudio Superior Incompleto</option>

          </select>
        </div>
        <div className="form-row">
          <label htmlFor="Padre_o_Madre_soltera">Madre o Padre soltero:</label>
          <select
            id="Padre_o_Madre_soltera"
            name="Padre_o_Madre_soltera"
            value={formData.Padre_o_Madre_soltera}
            onChange={handleChange}
          >
            <option value="">Seleccione una Opción</option>
            <option value="si">Si</option>
            <option value="no">No</option>
         
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="hijos">Hijos:</label>
          <input
            type="number"
            id="hijos"
            name="hijos"
            value={formData.hijos}
            onChange={handleChange}
            placeholder="0"
          />
        </div>
        <div className="form-row">
          <label htmlFor="miembros_hogar">Miembros del Hogar:</label>
          <input
            type="number"
            id="miembros_hogar"
            name="miembros_hogar"
            value={formData.miembros}
            onChange={handleChange}
            placeholder="1"
          />
        </div>


        <div className="form-row">
          <label htmlFor="familiar_bono">Bono Familiar($):</label>
          <input
            type="number"
            id="familiar_bono"
            name="familiar_bono"
            value={formData.familiar_bono}
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

export default Formulariopuce43;
