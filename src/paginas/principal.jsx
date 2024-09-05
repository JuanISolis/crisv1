import React from 'react';
import '../css/Formulario.css'; // Asegúrate de crear este archivo
import istec2 from '../assets/istec2.png'; // Ajusta la ruta según la estructura de carpetas
import istecLogo from '../assets/logo-istec.png'; // Ajusta la ruta
import puceLogo from '../assets/logo-puce.png'; // Ajusta la ruta
import puce2Logo from '../assets/puce.png'; // Ajusta la ruta

// Definición de la función handleClick
function handleClick(name) {
  console.log(`Clicked on ${name}`);
  // Aquí puedes agregar la lógica para manejar el clic
}

function MainPage() {
  return (
    <div className="main-page"> {/* Cambié 'App' a 'main-page' para claridad */}
      <img src={istec2} alt="Logo" className="istec2" />
      
      <section className="logo-section">
        <img 
          src={istecLogo} 
          alt="ISTEC Logo" 
          className="logo" 
          onClick={() => handleClick('ISTEC')} 
          style={{ cursor: 'pointer' }} 
        />
        
        <img 
          src={puceLogo} 
          alt="PUCE Logo" 
          className="logo" 
          onClick={() => handleClick('PUCE')} 
          style={{ cursor: 'pointer' }} 
        />
      </section>
    </div>
  );
}

export default MainPage;
