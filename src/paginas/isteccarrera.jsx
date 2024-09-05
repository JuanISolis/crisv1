import React, { useState } from "react";
import "../css/Formulario2.css"; // Importa el archivo CSS para estilos
import logo from "../assets/logo.png"; // Importa el logo
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

// Define el componente funcional 'Isteccarrera'
function Isteccarrera() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    carrera: "", // Solo se necesita la carrera a seguir
  });

  // Estado para almacenar el mensaje de error
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado del formulario con el nuevo valor del campo
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar el formulario antes del envío
  const validateForm = () => {
    // Verifica si el campo de carrera tiene un valor
    if (!formData.carrera) {
      alert("Debe seleccionar una carrera");
      return false;
    }

    // Limpia el mensaje de error si todo está bien
    setErrorMessage("");
    return true;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

    if (validateForm()) { // Valida el formulario
      console.log("Datos del formulario:", formData); // Muestra los datos del formulario en la consola
      setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
      
      // Redirige a la siguiente página si el formulario es válido
      navigate('/istec1');
    }
  };

  return (
    <div className="container">
      {/* Muestra el logo en el formulario */}
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1>SOLICITUD DE MATRÍCULA</h1>
      
      {/* Muestra el mensaje de error si hay alguno */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Formulario para la selección de carrera */}
      <form onSubmit={handleSubmit} className="formulario">
        {/* Selección de carrera a seguir */}
        <div className="form-row">
          <label htmlFor="carrera">Carrera a Seguir:</label>
          <select
            id="carrera"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
          >
            <option value="">Seleccione una carrera</option>
            <option value="TECNOLOGIA SUPERIOR EN ADMINISTRACION">Tecnología Superior en Administración</option>
            <option value="TECNOLOGIA EN PROCESAMIENTO DE ALIMENTOS">Tecnología en Procesamiento de Alimentos</option>
            <option value="TECNOLOGIA SUPERIOR EN AGROFORESTERIA">Tecnología Superior en Agroforestería</option>
            <option value="TECNOLOGIA EN ENFERMERIA">Tecnología en Enfermería</option>
            <option value="TECNOLOGIA EN CONSTRUCCION">Tecnología en Construcción</option>
            <option value="TECNOLOGIA SUPERIOR EN GASTRONOMIA">Tecnología Superior en Gastronomía</option>
            <option value="TECNOLOGIA SUPERIOR EN DESARROLLO DE SOFTWARE">Tecnología Superior en Desarrollo de Software</option>
            <option value="TECNOLOGIA SUPERIOR EN ELECTROMECANICA EN AUTOMOTRIZ">Tecnología Superior en Electromecánica en Automotriz</option>
          </select>
        </div>

        {/* Botón para enviar el formulario */}
        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Isteccarrera;
