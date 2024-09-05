import React, { useState } from 'react';
import '../css/Formulario.css'; // Asegúrate de crear este archivo
import logo from '../assets/logo.png'; // Importa el logo



function Formulario() {
  const [formData, setFormData] = useState({
    apellidos: '',
    nombres: '',
    nacionalidad: '',
    cedula: '',
    fechaNacimiento: '',
    provinciaNacimiento: '',
    cantonNacimiento: '',
    sexo: '',
    genero: '',
    etnia: '',
    puebloNacionalidad: '',
    discapacidad: false,
    porcentajeDiscapacidad: 0,
    tipoDiscapacidad: '',
    nroCarnet: '',
    estadoCivil: '',
    tipoSangre: '',
    mail: '',
    cel: '',
    contacto: '',
    emergencia: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="logo" /> {/* Añadir logo */}
      <h1>SOLICITUD DE MATRÍCULA</h1>

      <div className="content">
        <p className="date">Santa Cecilia, <span>16-ago-24</span></p>
        <p>Dr. Enrique Fuertes Grávalos</p>
        <p className= "rector">RECTOR DEL ISTEC</p>
        <p>Presente.</p>

        <p>
          Sírvase conceder la autorización de matrícula en el Instituto Tecnológico Superior
          "CRECERMAS", adjunto los documentos prescritos en el Reglamento. Declaro que la información
          consignada se ajusta estrictamente a la verdad.
        </p>

        <p>
          Me comprometo a cumplir fielmente las normas y disposiciones contenidas en los Estatutos y
          Reglamentos del Instituto.
        </p>
      </div>     

      <div className="firma">
        <p>De usted atentamente,</p>
        <p>(Firma)______________________</p>
      </div>

              
           
        <div className="form-row">
          <label htmlFor="carreras">Carreras:</label>
          <select id="carreras" name="carreras" value={formData.carreras} onChange={handleChange} required>
            <option value="">Seleccione una opción</option>
            <option value="administración">Tecnología Superior en Administración</option>
            <option value="procesamiento">Tecnología Superior en Procesamiento de Alimentos</option>
            <option value="agroforestería">Tecnología Superior en Agroforestería</option>
            <option value="enfermería">Tecnología Superior en Enfermería</option>
            <option value="construcción">Tecnología Superior en Construcción</option>
            <option value="gastronomía">Tecnología Superior en Gastronomía</option>
            <option value="desarrollo de Software">Tecnología Superior en Desarrollo de Software</option>
            <option value="electromecánica">Tecnología Superior en Electromecánica Automotriz</option>
                    
          </select>
          
        </div>

      <h2 className="text-xl font-semibold mt-6">Datos Personales:</h2>

      <form onSubmit={handleSubmit} className="formulario">
                  
        <div className="form-row">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="sexo">Sexo:</label>
          <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" value={formData.nombres} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="genero">Género:</label>
          <select id="genero" name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input type="text" id="nacionalidad" name="nacionalidad" value={formData.nacionalidad} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="etnia">Etnia:</label>
          <select id="etnia" name="etnia" value={formData.etnia} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="mestizo">Mestizo</option>
            <option value="indigena">Indígena</option>
            <option value="afrodescendiente">Afrodescendiente</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="cedula">Cédula:</label>
          <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="puebloNacionalidad">Pueblo y Nacionalidad:</label>
          <input type="text" id="puebloNacionalidad" name="puebloNacionalidad" value={formData.puebloNacionalidad} onChange={handleChange} />
        </div>

        
        <div className="form-row">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="discapacidad">Discapacidad:</label>
          <select id="discapacidad" name="discapacidad" value={formData.discapacidad} onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Sí</option>
          </select>
          <div className="form-row">
            <label htmlFor="porcentajeDiscapacidad">Porcentaje de Discapacidad:</label>
            <input type="number" id="porcentajeDiscapacidad" name="porcentajeDiscapacidad" value={formData.porcentajeDiscapacidad} onChange={handleChange} min="0" max="100" />
            </div>
        </div>
        
        
        <div className="form-row">
          <label htmlFor="provinciaNacimiento">Provincia de Nacimiento:</label>
          <input type="text" id="provinciaNacimiento" name="provinciaNacimiento" value={formData.provinciaNacimiento} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="tipoDiscapacidad">Tipo de Discapacidad:</label>
          <input type="text" id="tipoDiscapacidad" name="tipoDiscapacidad" value={formData.tipoDiscapacidad} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="cantonNacimiento">Cantón de Nacimiento:</label>
          <input type="text" id="cantonNacimiento" name="cantonNacimiento" value={formData.cantonNacimiento} onChange={handleChange} />
        </div>
             
                       
        <div className="form-row">
          <label htmlFor="nroCarnet">Nro. Carnet:</label>
          <input type="text" id="nroCarnet" name="nroCarnet" value={formData.nroCarnet} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="estadoCivil">Estado Civil:</label>
          <select id="estadoCivil" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
            <option value="unionLibre">Unión Libre</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="tipoSangre">Tipo de Sangre:</label>
          <select id="tipoSangre" name="tipoSangre" value={formData.tipoSangre} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
             
      </form>

      <h2 className="text-xl font-semibold mt-6">Residencia Habitual:</h2>

      <form onSubmit={handleSubmit} className="formulario">
               
        <div className="form-row">
          <label htmlFor="provincia">Provincia:</label>
          <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="mail">E-mail:</label>
          <input type="text" id="mail" name="mail" value={formData.mail} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="cantón">Cantón:</label>
          <input type="text" id="cantón" name="cantón" value={formData.cantón} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="telefono">Telefóno:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefóno} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="parroquia">Parroquia:</label>
          <input type="text" id="parroquia" name="parroquia" value={formData.parroquia} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="cel">Cel:</label>
          <input type="text" id="cel" name="cel" value={formData.cel} onChange={handleChange} />
        </div>

      </form>

      <div className="form-row">
          <label htmlFor="barrio">Barrio/Recinto:</label>
          <input type="text" id="barrio" name="barrio" value={formData.barrio} onChange={handleChange} />
      </div>

      <form onSubmit={handleSubmit} className="formulario">

        <div className="form-row">
          <label htmlFor="contacto">Nombre de Contacto:</label>
          <input type="text" id="contacto" name="contacto" value={formData.contacto} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="emergencia">Contacto de Emergencia:</label>
          <input type="text" id="emergencia" name="emergencia" value={formData.emergencia} onChange={handleChange} />
        </div>
      
      </form>

      <h2 className="text-xl font-semibold mt-6">Información de la Institución Educativa donde concluyó su Bachillerato:</h2>

      <form onSubmit={handleSubmit} className="formulario">
               
        <div className="form-row">
          <label htmlFor="colegio">Colegio:</label>
          <input type="text" id="colegio" name="colegio" value={formData.provincia} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="tipo">Tipo:</label>
          <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="fiscal">Fiscal</option>
            <option value="municipal">Municipal</option>
            <option value="privado">Privado</option>
            <option value="fiscomisional">Fiscomisional</option>
            
          </select>
        </div>  

        <div className="form-row">
          <label htmlFor="provincia">Provincia:</label>
          <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} />
        </div>      

        <div className="form-row">
          <label htmlFor="cantón">Cantón:</label>
          <input type="text" id="cantón" name="cantón" value={formData.cantón} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label htmlFor="ciudad">Ciudad del Colegio:</label>
          <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} />
        </div>  

        
      </form>

      <h3 className="text-xl font-semibold mt-6">Título de Bachiller en:</h3>

      <div class="checkbox-group">
        <input type="checkbox" id="ciencias" name="titulo" value="Ciencias Generales"/>
        <label for="ciencias" class="option-label">Ciencias Generales</label>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="tecnico" name="titulo" value="Técnico"/>
        <label for="tecnico" class="option-label">Técnico en:</label>
        <input type="text" id="tecnico-en" name="tecnico-en" class="input-field"/>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="internacional" name="titulo" value="Internacional"/>
        <label for="internacional" class="option-label">Internacional</label>
      </div>
      
      

      <h2 className="text-xl font-semibold mt-6">Datos Estadísticos:</h2>

      <form onSubmit={handleSubmit} className="formulario">

        <div className="form-row">
          <label htmlFor="ocupacion">Ocupación:</label>
          <select id="ocupacion" name="ocupacion" value={formData.ocupacion} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="solo">Solo Estudia</option>
            <option value="trabaja">Trabaja y Estudia</option>
            
            
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="cargo">Cargo:</label>
          <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} />
        </div> 

        <div className="form-row">
          <label htmlFor="lugar">Lugar de Trabajo:</label>
          <input type="text" id="lugar" name="lugar" value={formData.lugar} onChange={handleChange} />
        </div>  

        <div className="form-row">
          <label htmlFor="ingresos">Sus Ingresos Emplea en:</label>
          <select id="ingresos" name="ingresos" value={formData.ingresos} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="financiar">Financiar Estudios</option>
            <option value="mantener">Para mantener su hogar</option>
            <option value="gastos">Gastos Personales</option>
            
          </select>
        </div> 
      
      </form>

      <div className="form-row">
          <label htmlFor="telefono">Telefóno de su Lugar de Trabajo:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
      </div>

      <div className="form-row">
          <label htmlFor="ingresos">Recibe el Bono de Desarrollo Humano :</label>
          <select id="recibe" name="recibe" value={formData.recibe} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="si">Si</option>
            <option value="no">No</option>
            
            
          </select>
        </div> 

        <div className="form-row">
          <label htmlFor="ingresos">Algún familiar recibe el bono de desarrollo humano  :</label>
          <select id="bono" name="bono" value={formData.bono} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="si">Si</option>
            <option value="no">No</option>
            
            
          </select>
        </div> 

        <div className="form-row">
          <label htmlFor="ingresos">Origen de los Recursos:</label>
          <select id="origen" name="origen" value={formData.origen} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="recursos">Recursos Propios</option>
            <option value="tutores">Padres Tutores</option>
            <option value="pareja">Pareja Sentimental</option>
            <option value="hermanos">Hermanos</option>
            <option value="otros">Otros Familiares</option>
            
            
            
          </select>
        </div> 

        <div className="form-row">
          <label htmlFor="ingresos">Nivel de Formación de la Madre:</label>
          <select id="madre" name="madre" value={formData.madre} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="Primaria">Instrucción  Primaria</option>
            <option value="Secundania">Instrucción  Secundaria </option>
            <option value="Tercer">Tercer Nivel o Tecnología </option>
            <option value="Cuarto">Cuarto Nivel o Posgrado</option>
            
            
            
          </select>
        </div> 

        <div className="form-row">
          <label htmlFor="ingresos">Nivel de Formación del Padre:</label>
          <select id="padre" name="padre" value={formData.padre} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="Primaria">Instrucción  Primaria</option>
            <option value="Secundania">Instrucción  Secundaria </option>
            <option value="Tercer">Tercer Nivel o Tecnología </option>
            <option value="Cuarto">Cuarto Nivel o Posgrado</option>
                        
          </select>
        </div> 

      <form onSubmit={handleSubmit} className="formulario">
               
        <div className="form-row">
          <label htmlFor="hijos">¿Tiene Hijos?:</label>
          <select id="hijos" name="hijos" value={formData.hijos} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
            
        </div>
       
        <div className="form-row">
          <label htmlFor="cuantos">¿Cuántos hijos tiene?:</label>
          <select id="cuantos" name="cuantos" value={formData.cuantos} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="1 a 3">De 1 a 3</option>
            <option value="3 a 5">De 3 a 5</option>
            <option value="mas de 5">Más de 5</option>
          </select>
        </div>
      </form>

      <div className="form-row">
          <label htmlFor="telefono">Cantidad de miembros del hogar:</label>
          <input type="text" id="miembros" name="miembros" value={formData.miembros} onChange={handleChange} />
      </div>

      <div className="form-row">
          <label htmlFor="mensuales">¿Cuales son los ingresos mensuales de su hogar?:</label>
          <input type="text" id="mensuales" name="mensuales" value={formData.mensuales} onChange={handleChange} />
      </div>

      
      <h2 className="text-xl font-semibold mt-6">Datos institucionales sobre salud:</h2>

      <form onSubmit={handleSubmit} className="formulario">
      <div className="form-row">
      <label htmlFor="catastrofica">¿Tiene alguna enfermedad catastrófica?:</label>
          <select id="ccatastrofica" name="catastrofica" value={formData.catastrofica} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="si">Si</option>
            <option value="no">No</option>
            
          </select>
        
      </div>

      <div className="form-row">
          <label htmlFor="enfermedad">Nombre de la enfermedad:</label>
          <input type="text" id="enfermedad" name="enfermedad" value={formData.enfermedad} onChange={handleChange} />
      </div>
      </form>

      <h4>Seleccione si tiene alguna de estas enfermedades:</h4>

      <form onSubmit={handleSubmit} className="formulario">
      <div className="form-row">
        <label htmlFor="diabetes">Diabetes</label>
        <input type="checkbox"  id="diabetes" name="diabetes" value={formData.diabetes} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label htmlFor="catastrofica">Herpes-Enfermedades contagiosas de la piel</label>
        <input type="checkbox" id="contagiosas" name="contagiosas" value={formData.contagiosas} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label htmlFor="sida">VHI/Sida</label>
        <input type="checkbox"  id="sida" name="sida" value={formData.sida} onChange={handleChange} />
      </div>
      </form>


      <h2 className="text-xl font-semibold mt-6">Datos institucionales sobre los servicios:</h2>
      <h4>Seleccione los servicios que hará uso:</h4>

      <form onSubmit={handleSubmit} className="formulario"> 
      <div className="form-row">
        <label htmlFor="ludoteca">Ludoteca</label>
        <input type="checkbox"  id="ludoteca" name="ludoteca" value={formData.ludoteca} onChange={handleChange} />
          <select>
          <option value="">Seleccione</option>
          <option value="nunca">Nunca</option>
          <option value="pocas">Pocas veces</option>
          <option value="normalmente">Normalmente</option>
          <option value="bastante">Bastante</option>
          <option value="siempre">Siempre</option>

        </select>
      </div>
                 
      <div className="form-row">
        <label htmlFor="villas">Villas de Hospedaje</label>
        <input type="checkbox"  id="villas" name="villas" value={formData.villas} onChange={handleChange} />
          <select>
          <option value="">Seleccione</option>
          <option value="nunca">Nunca</option>
          <option value="pocas">Pocas veces</option>
          <option value="normalmente">Normalmente</option>
          <option value="bastante">Bastante</option>
          <option value="siempre">Siempre</option>
        </select>
      </div>
      </form>

      <form onSubmit={handleSubmit} className="formulario"> 
      <div className="form-row">
        <label htmlFor="autobus">Servicio de Autobús</label>
        <input type="checkbox"  id="autobus" name="autobus" value={formData.autobus} onChange={handleChange} />
          <select>
          <option value="">Seleccione</option>
          <option value="nunca">Nunca</option>
          <option value="pocas">Pocas veces</option>
          <option value="normalmente">Normalmente</option>
          <option value="bastante">Bastante</option>
          <option value="siempre">Siempre</option>
        </select>
      </div>
                 
      <div className="form-row">
        <label htmlFor="alquiler">Alquiler de Computadoras</label>
        <input type="checkbox"  id="alquiler" name="alquiler" value={formData.alquiler} onChange={handleChange} />
          <select>
          <option value="">Seleccione</option>
          <option value="nunca">Nunca</option>
          <option value="pocas">Pocas veces</option>
          <option value="normalmente">Normalmente</option>
          <option value="bastante">Bastante</option>
          <option value="siempre">Siempre</option>
        </select>
      </div>
      </form>
     
       
      <div className="button-group">
        
        <button onClick={() => handleSubmit('continuar')}>Guardar y Continuar</button>
      </div>

      
    </div>
  );
}

export default Formulario;
