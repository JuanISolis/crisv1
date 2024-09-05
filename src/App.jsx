import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/Formulario.css'; // Asegúrate de crear este archivo
import Formulariopuce1 from './paginas/formulariopuce1';
import Formulariopuce2 from './paginas/formulariopuce2';
import Formulariopuce3 from './paginas/formulariopuce3';
import Formulariopuce4 from './paginas/formulariopuce4';
import Formulariopuce5 from './paginas/formulariopuce5';
import Formulariopuce6 from './paginas/formulariopuce6';
import Formulariopuce7 from './paginas/formulariopuce7';
import Formulariopuce43 from './paginas/formulariopuce43';
import Formulariopuce44 from './paginas/formulariopuce44';
import Formulariopuce42 from './paginas/formulariopuce42';
import Pucematriculacion from './paginas/pucematriculacion';
import Puceexamen from './paginas/puceexamen';
import Pucepedagogico from './paginas/pucepedagogico';
import Inicio1 from './paginas/inicio1';
import Istec1 from './paginas/istec1';
import Istec2 from './paginas/istec2';
import Istec3 from './paginas/istec3';
import Istec4 from './paginas/istec4';
import Istec5 from './paginas/istec5';
import Istec6 from './paginas/istec6';
import Istec7 from './paginas/istec7';
import Istec8 from './paginas/istec8';
import Istec9 from './paginas/istec9';
import Istec10 from './paginas/istec10';
import Matricula2 from './paginas/matricula2';
import Istec11 from './paginas/istec11';
import Tikepuce from './paginas/tikepuce';
import Tikeistec from './paginas/tikeistec';
import Pucecarrera from './paginas/pucecarrera';
import Isteccarrera from './paginas/isteccarrera';

function App() {
  return (
    <Router>
      <div className="div"   >
        <Routes>
          <Route path="/" element={<Inicio1 />} />
          <Route path="formulariopuce1" element={<Formulariopuce1 />} />
          
          
          <Route path="pucecarrera" element={<Pucecarrera />} />
          <Route path="isteccarrera" element={<Isteccarrera />} />
          <Route path="formulariopuce2" element={<Formulariopuce2 />} />
          <Route path="formulariopuce3" element={<Formulariopuce3 />} />
          <Route path="formulariopuce4" element={<Formulariopuce4 />} />
          <Route path="formulariopuce43" element={<Formulariopuce43 />} />
          <Route path="formulariopuce44" element={<Formulariopuce44 />} />
          <Route path="formulariopuce5" element={<Formulariopuce5 />} />
          <Route path="formulariopuce6" element={<Formulariopuce6 />} />
          <Route path="formulariopuce7" element={<Formulariopuce7 />} />
          <Route path="formulariopuce42" element={<Formulariopuce42 />} />
          <Route path="pucematriculacion" element={<Pucematriculacion />} />
          <Route path="matricula2" element={<Matricula2 />} />
          <Route path="puceexamen" element={<Puceexamen />} />
          <Route path="pucepedagogico" element={<Pucepedagogico />} />
          <Route path="tikepuce" element={<Tikepuce />} />
          <Route path="istec1" element={<Istec1 />} />
          <Route path="istec2" element={<Istec2 />} />
          <Route path="istec3" element={<Istec3 />} />
          <Route path="istec4" element={<Istec4 />} />
          <Route path="istec5" element={<Istec5 />} />
          <Route path="istec6" element={<Istec6 />} />
          <Route path="istec7" element={<Istec7 />} />
          <Route path="istec8" element={<Istec8 />} />
          <Route path="istec9" element={<Istec9 />} />
          <Route path="istec10" element={<Istec10 />} />
          <Route path="istec11" element={<Istec11 />} />
          <Route path="tikeistec" element={<Tikeistec />} />



        </Routes>
      </div>
    </Router>
  );
}
export default App;