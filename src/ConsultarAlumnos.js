import React, { useState } from 'react';
import axios from 'axios';

const ConsultarAlumnos = () => {
  const [carnet, setCarnet] = useState('');
  const [alumno, setAlumno] = useState(null);
  const [error, setError] = useState('');

  const handleConsultar = async () => {
    try {
      const response = await axios.get(`https://api.example.com/alumnos/${carnet}`);
      setAlumno(response.data);
      setError('');
    } catch (err) {
      setError('Alumno no encontrado');
      setAlumno(null);
    }
  };

  return (
    <div>
      <h2>Consulta de Alumnos</h2>
      <input
        type="text"
        placeholder="Ingrese el carnet"
        value={carnet}
        onChange={(e) => setCarnet(e.target.value)}
      />
      <button onClick={handleConsultar}>Consultar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {alumno && (
        <div>
          <h3>Información del Alumno</h3>
          <p>Nombre: {alumno.nombre}</p>
          <p>Curso: {alumno.curso}</p>
          <p>Nota: {alumno.nota}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultarAlumnos;