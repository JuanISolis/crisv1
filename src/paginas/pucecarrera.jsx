import React, { useState } from "react";
import "../css/Formulario2.css"; // Importa el archivo CSS para estilos
import logo from "../assets/log.png"; // Importa el logo
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

// Define el componente funcional 'Pucecarrera'
function Pucecarrera() {
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
        navigate('/formulariopuce1');
      }
    };

  return (
    <div className="container">
      {/* Muestra el logo en el formulario */}
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1>Carrera:</h1>

      {/* Formulario para la selección de carrera */}
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="carrera">Carrera a Seguir:</label>
          <select
            id="carrera"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una carrera</option>
            <option value="MEDICINA GENERAL">Medicina General</option>
            <option value="INGENIERIA AGRICOLA">Ingeniería Agrícola</option>
            <option value="LICENCIATURA EN ADMINISTRACION DE EMPRESAS">Licenciatura en Administración de Empresas</option>
            <option value="LICENCIATURA EN ENFERMERIA">Licenciatura en Enfermería</option>
            <option value="INTERPRETE DE LENGUAS AMAZONICAS">Intérprete de Lenguas Amazónicas</option>
            <option value="MEDICINA VETERINARIA">Medicina Veterinaria</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Pucecarrera;
