import React, { useState } from 'react';
import CrearCurso from './CrearCurso';
import ConsultarAlumnos from './ConsultarAlumnos';

function App() {
  const [view, setView] = useState('crear'); // Manejamos la vista actual

  return (
    <div className="App">
      <h1>Menú de Aplicación</h1>
      <div>
        <button onClick={() => setView('crear')}>Crear Curso</button>
        <button onClick={() => setView('consultar')}>Consultar Alumnos</button>
      </div>

      {view === 'crear' ? <CrearCurso /> : <ConsultarAlumnos />}
    </div>
  );
}

export default App;