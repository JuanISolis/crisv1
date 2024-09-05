import React, { useState } from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/log.png"; // Importa el logo
import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate y useLocation para redirección

function Formulariopuce2() {
  const location = useLocation();
  const { ci } = location.state || {};
  console.log("CI recibido:", ci);

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    etnia: "",
    estado_civil: "",
    pueblo_nacionalidad: "",
    provincia_nacimiento: "",
    sexo: "",
    nacionalidad: "",
    canton_nacimiento: "",
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
      "etnia",
      "estado_civil",
      "sexo",
      "provincia_nacimiento",
      "nacionalidad",
      "canton_nacimiento"
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        setErrorMessage("Todos los campos obligatorios deben estar llenos.");
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
        const response = await fetch("http://127.0.0.1:8000/api/datos/Ingresar/Estudiante", {
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
        navigate('/formulariopuce3', { state: { ci: formData.id_ci } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1 className="text-xl font-semibold mt-6">Datos Personales:</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="sexo">Sexo:</label>
          <select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="pueblo_nacionalidad">Pueblo Nacionalidad:</label>
          <input
            type="text"
            id="pueblo_nacionalidad"
            name="pueblo_nacionalidad"
            value={formData.pueblo_nacionalidad}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>

        <div className="form-row">
          <label htmlFor="etnia">Etnia:</label>
          <select
            id="etnia"
            name="etnia"
            value={formData.etnia}
            onChange={handleChange}>
            <option value="">Seleccione una Opción</option>
            <option value="indigena">Indigena</option>
            <option value="blanco">Blanco/a</option>
            <option value="mestizo">Mestizo/a</option>
            <option value="mulato">Mulato/a</option>
            <option value="afromericano">Afroamericano/a</option>
            
          </select>


        </div>

        <div className="form-row">
          <label htmlFor="estado_civil">Estado Civil:</label>
          <select
            id="estado_civil"
            name="estado_civil"
            value={formData.estado_civil}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
            <option value="unionlibre">Unión Libre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="canton_nacimiento">Cantón Nacimiento:</label>
          <input
            type="text"
            id="canton_nacimiento"
            name="canton_nacimiento"
            value={formData.canton_nacimiento}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-row">
          <label htmlFor="provincia_nacimiento">Provincia de Nacimiento:</label>
          <input
            type="text"
            id="provincia_nacimiento"
            name="provincia_nacimiento"
            value={formData.provincia_nacimiento}
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

export default Formulariopuce2;
