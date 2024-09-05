import React, { useState } from 'react';
import '../css/Formulario.css'; // Asegúrate de crear este archivo
import logo from '../assets/log.png'; // Importa el logo
import { useNavigate , useLocation} from 'react-router-dom'; // Importa useNavigate para redirección

function Formulariopuce5() {
  const location = useLocation();
  const { ci } = location.state || {};
  console.log("CI recibido:", ci);

  const [formData, setFormData] = useState({
    id_ci: ci || '',
    enfermedad: '',
    enf_piel: '',
    diabetes: '',
    tipo_sangre: '',
    vih_sida: '',
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const requiredFields = ["catastrofica", "tipo_sangre"];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert ("Todos los campos son obligatorios");
        setIsFormValid(false);
        return false;
      }
    }

    if (formData.catastrofica === "si" && !formData.enfermedad) {
      alert ("Todos los campos son obligatorios");
      setIsFormValid(false);
      return false;
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
        const response = await fetch("http://127.0.0.1:8000/api/Info_salud2", {
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
        navigate('/formulariopuce6', { state: { ci: formData.id_ci } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };
  

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <h1>Información Salud:</h1>

      <h3 className="text-xl font-semibold mt-6">Datos institucionales sobre salud:</h3>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="catastrofica">¿Tiene alguna enfermedad catastrófica?</label>
          <select
            id="catastrofica"
            name="catastrofica"
            value={formData.catastrofica}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.catastrofica === "si" && (
          <div className="form-row">
            <label htmlFor="enfermedad">Nombre de la enfermedad:</label>
            <input
              type="text"
              id="enfermedad"
              name="enfermedad"
              value={formData.enfermedad}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-row">
          <label htmlFor="tipo_sangre">Tipo de Sangre:</label>
          <select
            id="tipo_sangre"
            name="tipo_sangre"
            value={formData.tipo_sangre}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <h4>Seleccione si tiene alguna de estas enfermedades:</h4>

        <div className="form-row">
          <label htmlFor="diabetes">Diabetes</label>
          <input
            type="checkbox"
            id="diabetes"
            name="diabetes"
            checked={formData.diabetes}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="enf_piel">Herpes-Enfermedades contagiosas de la piel</label>
          <input
            type="checkbox"
            id="enf_piel"
            name="enf_piel"
            checked={formData.enf_piel}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="vih_sida">VHI/Sida</label>
          <input
            type="checkbox"
            id="vih_sida"
            name="vih_sida"
            checked={formData.vih_sida}
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

export default Formulariopuce5;

