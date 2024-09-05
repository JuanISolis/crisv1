import React, { useState } from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/logo.png"; // Importa el logo
import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate para redirección

function Istec3() {
  const location = useLocation();
  const { ci } = location.state || {};
  console.log("CI recibido:", ci);

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    provincia: "",
    canton: "",
    barrio_recinto: "",
    parroquia: "",
    sector:"",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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
      "provincia",
      "canton",
      "barrio_recinto",
      "parroquia",
      "sector",

    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert ("Todos los campos son obligatorios");
        setIsFormValid(false);
        return false;
      }
    }

    setErrorMessage("");
    setIsFormValid(true);
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

    if (validateForm()) {
      console.log("Datos del formulario:", formData); // Muestra los datos del formulario en la consola

      try {
        const response = await fetch("http://127.0.0.1:8000/api/Ingresar/Residencia", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Estudiante creado:", data);

        // Redirige a la siguiente página solo si el envío fue exitoso
        setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
        navigate('/Istec4', { state: { ci: formData.id_ci } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };


  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1 className="text-xl font-semibold mt-6">Residencia:</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
        <div className="form-row">
          <label htmlFor="sector">Sector:</label>
          <select
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="Urbano">Urbano</option>
            <option value="Rural">Rural</option>
            
          </select>
        </div>


          <label htmlFor="barrio_recinto">Barrio/Recinto:</label>
          <input
            type="text"
            id="barrio_recinto"
            name="barrio_recinto"
            value={formData.barrio_recinto}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="parroquia">Parroquia:</label>
          <input
            type="text"
            id="parroquia"
            name="parroquia"
            value={formData.parroquia}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="canton">Cantón:</label>
          <select
            id="canton"
            name="canton"
            value={formData.canton}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="cuyabeno">Cuyabeno</option>
            <option value="gonzalopizarro">Gonzalo Pizarro</option>
            <option value="lagoagrio">Lago Agrio</option>
            <option value="putumayo">Putumayo</option>
            <option value="shushufinfi">Shushufinfi</option>
            <option value="noamazonico">No Amazonico</option>
            

          
          
          </select>
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

export default Istec3;
