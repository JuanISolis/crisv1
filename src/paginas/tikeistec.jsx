import React, { useState, useEffect } from "react";
import "../css/Formulario.css"; // Asegúrate de crear este archivo
import logo from "../assets/logo.png"; // Importa el logo
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

function Tikeistec() {
  const [ticketInfo, setTicketInfo] = useState({
    lugar: "Laboratorio 1",
    fecha: "",
    hora: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    // Generar una fecha aleatoria dentro del próximo mes
    const today = new Date();
    const fechaAleatoria = new Date(today);
    fechaAleatoria.setDate(today.getDate() + Math.floor(Math.random() * 30));
    const fechaFormateada = fechaAleatoria.toISOString().split("T")[0];

    // Generar una hora aleatoria entre las 8 AM y las 5 PM
    const horaAleatoria = `${String(Math.floor(Math.random() * (17 - 8) + 8)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;

    setTicketInfo({
      lugar: "Laboratorio 1",
      fecha: fechaFormateada,
      hora: horaAleatoria,
    });
  }, []);

  const handleFinalize = () => {
    // Redirige a la página de finalización del proceso
    navigate('/finalizarproceso');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" /> {/* Añadir logo */}
      <h1 className="text-xl font-semibold mt-6">TICKET/ TURNO ASIGNADO</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="ticket-info">
        <p><strong>Laboratorio:</strong> {ticketInfo.lugar}</p>
        <p><strong>Fecha:</strong> {ticketInfo.fecha}</p>
        <p><strong>Hora:</strong> {ticketInfo.hora}</p>
      </div>

      <div className="button-group">
        <button type="button" onClick={handleFinalize}>Finalizar Proceso</button>
        <button type="button" onClick={handlePrint}>Imprimir</button>
      </div>
    </div>
  );
}

export default Tikeistec;
