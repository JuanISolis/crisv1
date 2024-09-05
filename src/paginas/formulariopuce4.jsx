import React, { useState } from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/log.png"; // Importa el logo
import { useNavigate , useLocation} from "react-router-dom"; // Importa useNavigate para redirección

function Formulariopuce4() {
  const location = useLocation();
  const { ci } = location.state || {};
  console.log("CI recibido:", ci);

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    cargo: "",
    telefono_trabajo: "",
    ocupacion: "",
    origen_recursos: "",
    lugar_trabajo: "",
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
  
      "origen_recursos",
  
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert ("!Obligatorio llenar el campo Origenes de Recursos!");
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
        const response = await fetch("http://127.0.0.1:8000/api/Info_general/Ingresar", {
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
        navigate('/formulariopuce5', { state: { ci: formData.id_ci } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" /> {/* Añadir logo */}
      <h1 className="text-xl font-semibold mt-6">Información General:</h1>
      <h3>En caso de no estar trabajando, deje estos campos o secciones en blanco.</h3>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="lugar_trabajo">Lugar de trabajo:</label>
          <input
            type="text"
            id="lugar_trabajo"
            name="lugar_trabajo"
            value={formData.lugar_trabajo}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="origen_recursos">Origen de Recursos:</label>
          <input
            type="text"
            id="origen_recursos"
            name="origen_recursos"
            value={formData.origen_recursos}
            onChange={handleChange}
            placeholder="!Obligatorio!"
          />
        </div>

        <div className="form-row">
          <label htmlFor="ocupacion">Ocupación:</label>
          <input
            type="text"
            id="ocupacion"
            name="ocupacion"
            value={formData.ocupacion}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="cargo">Cargo:</label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="telefono_trabajo">Teléfono de Trabajo:</label>
          <input
            type="text"
            id="telefono_trabajo"
            name="telefono_trabajo"
            value={formData.telefono_trabajo}
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

export default Formulariopuce4;
