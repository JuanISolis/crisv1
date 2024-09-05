import React from 'react';
import '../css/Formulario2.css';
import logo from '../assets/logo.png'; // Importa el logo
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección

function Istec11() {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirige a la página Tikeistec
    navigate('/tikeistec');
  };

  return (
    <div className="form-container">
      {/* Sección del encabezado con imagen y resolución */}
      <div className="header">
        <img src={logo} alt="Logo ISTEC" className="logo" /> {/* Añadir logo */}
        <h2>COMPROMISOS INFORMADOS PREVIOS A LA MATRICULACIÓN</h2>
      </div>

      {/* Sección del texto de compromisos */}
      <div className="commitments">
        <p className="parrafo">He sido informado y estoy conforme con las siguientes condiciones y compromisos previos a la matriculación:</p>
        <ol>
          <li>Debo mostrar al personal competente, el carnet de estudiante al ingresar en la institución y cuando se me solicite. Soy consciente de que, si lo pierdo o no lo llevo conmigo, debo abonar el arancel correspondiente, para su renovación.</li>
          <li>He sido informado de que no puedo acceder con vehículos en horario de clases y que estoy obligado a respetar las normas de circulación establecidas.</li>
          <li>No puedo introducir y consumir alcohol y/o estupefacientes, utilizar armas corto-punzantes, de fuego u otras y me sujetaré a la sanción correspondiente en el caso de no haber respetado estas indicaciones.</li>
          <li>No puedo ejercer violencia de ningún tipo: verbal, psicológica, simbólica, económica o sexual sobre ningún miembro de la comunidad educativa.</li>
          <li>Sé y acepto que la utilización en clases de los dispositivos electrónicos o telefonía, estará sujeta a las indicaciones de los docentes o personal.</li>
          <li>Sé que, en la institución, comportarse desde los valores y principios de ciudadanía y buenas prácticas, forman parte de mi proceso educativo, y , por lo tanto todo acto de falta de civismo y convivencia, será sancionado por la autoridad correspondiente según la normativa vigente.
            Esto incluye el cuidado y buen uso de los servidores de comedor, baños higiénicos, aulas, biblioteca, canchas hall y villas especialmente. </li>
          <li>Sé y reconozco que el servicio de transporte en la institución es ofertado de forma gratuita, y su costo no está incluido en el precio de la matrícula, por lo tanto, no es</li>
          <li>Estoy informado de que el área de Bienestar Estudiantil gestiona el sistema de becas y ayudas, y que debe realizar el debido proceso para la solicitud de las mismas.</li>
          <li>Para los estudiantes de segunda o superior matrícula: sé y acepto que la fecha de corte para el pago de la mensualidad es el dia 10 de cada mes. Puedo solicitar aplazamientos dos días antes de esta fecha en Bienestar EStudiantil.
            Si no lo hago, asumiré lo que la normativa interna estipule  al afecto. El impago acumulado de todas y cada una de las cuotas por más de 40 días puede ocasionar la pérdida del convenio de pagos para el siguiente semestre.</li>
          <li>Cuento con el buzón de sugerencia s de la institución para cualquier pregunta, duda o reclamo, debidamente identificado y formulado con la debida cortesía. Las mismas que se responderá oportunamente, según lo estipulado en la normativa institucional</li>
          <li>Debo realizar durante el proceso de matriculación, el consentimiento informado sobre la utilización de mi imagen o palabras con fines institucionales. </li>
          <li>Del mismo modo, no me está permitido grabar o fotografiar a personas de la comunidad educativa (estudiantes, docentes y personal), o a su trabajo, sin su conocimiento y consentimiento.</li>
          <li>He sido informado de la existencia de un reglamento de estudiantes al que puedo acceder en la página web y que regula los aspectos fundamentales de la vida universitaria.</li>
          <li>Tengo conocimiento y acepto que en cada coordinación de carrera se me informará puntualmente de los procedimientos en relación a los trabajos, deberes, asistencia a clases y compromisos académicos con los que debo cumplir. Por otra parte, he sido informado
             y acepto que el Sistema de Gestión Académica continúa en periodo de pruebas y que sólo serán válidas las notas que personalmente o públicamente comunique mi correspondiente coordinación de carrera.</li>
          <li>He sido informado y acepto que, para poder ser candidato al Órgano Colegiado Superior en la institución, debo pertenecer al menos a una asociación estudiantil y cumplir todos los requisitos establecidos en la normativa.</li>
          <li>He sido informado y acepto que para culminar el proceso de admisión y de graduación, debo plantar, mantener y cuidar tres árboles.</li>
          <li>Me acojo a los procesos establecidos por la institución en lo referente a la admisión, permanencia o anulación de matrícula. Sé que, si no realizo los procedimientos establecidos en relación a esto último, los pagos pendientes no serán anulados.</li>
          <li>Soy consciente de que la deshonestidad académica en cualquiera de sus formas, daña la confianza que se ha puesto en mi proceso educativo y me llevará a tener las consecuencias que estipule la institución y sus reglamentos.</li>
          <li>Sé que, si quiero, puedo tramitar una queja o reclamo, deberé hacerlo en el horario y las condiciones establecidas por la institución, firmando por mí y dirigido al área o persona correspondiente. Si se trata de un documento colectivo,
             deberá estar aprobado tras las firmas de las personas que lo suscriban.</li>
          <li>Puedo acceder en la web institucional a la información que necesite en relación a normativa, reglamentos, principios y valores de la comunidad educativa.</li>
        </ol>
      </div>

      {/* Sección del formulario */}
      <form onSubmit={handleSubmit}>
        {/* Aquí puedes añadir los campos adicionales del formulario */}
        
        <div className="firma">
          <p>Firma:___________________________</p>
          <p className="date">Santa Cecilia, <span>16-ago-24</span></p>
        </div>

        <div className="button-group">
          <button type="submit">Continuar Admision</button>
        </div>
      </form>
    </div>
  );
}

export default Istec11;
