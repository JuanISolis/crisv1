import React, { useState } from "react";
import "../css/Formulario2.css"; // Importa el archivo CSS para estilos
import logo from "../assets/log.png"; // Importa el logo
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

function Formulariopuce1() {
  const [formData, setFormData] = useState({
    ci: "",
    nombres: "",
    matricula_cancelada:"",
    apellidos: "",
    edad: "",
    celular: "",
    numero_telefonico: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate(); // Inicializa useNavigate

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validar el formulario antes del envío
  const validateForm = () => {
    const requiredFields = ["ci", "nombres", "apellidos", "edad", "celular", "numero_telefonico"];

    for (let field of requiredFields) {
      if (!formData[field]) {
        setErrorMessage("Todos los campos son obligatorios");
        setIsFormValid(false);
        return false;
      }
    }

    setErrorMessage("");
    setIsFormValid(true);
    return true;
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

    if (validateForm()) {
      console.log("Datos del formulario:", formData); // Muestra los datos del formulario en la consola

      try {
        const response = await fetch("http://127.0.0.1:8000/api/Ingresar/estudiante", {
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
        navigate('/formulariopuce2', { state: { ci: formData.ci } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };

  return (
    <div className="container">
      {/* Muestra el logo en el formulario */}
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1>SOLICITUD DE MATRÍCULA</h1>
      <h2 className="text-xl font-semibold mt-6">Datos Personales:</h2>

      {/* Muestra el mensaje de error si hay alguno */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Formulario para la entrada de datos */}
      <form onSubmit={handleSubmit} className="formulario">
        {/* Campo para nombres */}
        <div className="form-row">
          <label htmlFor="nombres">Nombres:</label>
          <input 
            type="text" 
            id="nombres" 
            name="nombres" 
            value={formData.nombres}
            onChange={handleChange}
          />
        </div>

        {/* Campo para apellidos */}
        <div className="form-row">
          <label htmlFor="apellidos">Apellidos:</label>
          <input 
            type="text" 
            id="apellidos" 
            name="apellidos" 
            value={formData.apellidos}
            onChange={handleChange}
          />
        </div>

        {/* Campo para teléfono */}
        <div className="form-row">
          <label htmlFor="numero_telefonico">Teléfono:</label>
          <input 
            type="number" 
            id="numero_telefonico" 
            name="numero_telefonico" 
            value={formData.numero_telefonico}
            onChange={handleChange}
          />
        </div>

        {/* Campo para celular */}
        <div className="form-row">
          <label htmlFor="celular">Celular:</label>
          <input 
            type="number" 
            id="celular" 
            name="celular" 
            value={formData.celular}
            onChange={handleChange}
          />
        </div>

        {/* Campo para cédula */}
        <div className="form-row">
          <label htmlFor="ci">Cédula:</label>
          <input 
            type="number" 
            id="ci" 
            name="ci" 
            value={formData.ci}
            onChange={handleChange}
          />
        </div>

        {/* Campo para fecha de nacimiento */}
        <div className="form-row">
          <label htmlFor="edad">Fecha de nacimiento:</label>
          <input
            type="date"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </div>

        {/* Botón para enviar el formulario */}
        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulariopuce1;
