import React from "react";
import "../css/Formulario1.css";
import logo from "../assets/istec2.png"; 
import puce from "../assets/PE.png"; // Imagen izquierda
import istec from "../assets/logo-istec.png"; // Imagen derecha
import { useNavigate } from "react-router-dom"; 

function Inicio1() {
  const navigate = useNavigate(); 

  const handleLeftImageClick = () => {
    navigate('pucecarrera'); // Ruta para la imagen izquierda
  };

  const handleRightImageClick = () => {
    navigate('/isteccarrera'); // Ruta para la imagen derecha
  };

  return (
    <div className="container1">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <div className="image-group1">
        <img
          src={puce}
          alt="Imagen Izquierda"
          className="side-image1"
          onClick={handleLeftImageClick}
        />
        <img
          src={istec}
          alt="Imagen Derecha"
          className="side-image1"
          onClick={handleRightImageClick}
        />
      </div>
    </div>
  );
}

export default Inicio1;
