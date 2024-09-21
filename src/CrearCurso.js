import React, { useState } from 'react';
import axios from 'axios';

const CrearCurso = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const curso = {
      nombre,
      creditos: parseInt(creditos),
      descripcion
    };

    try {
      const response = await axios.post('https://test-deploy-12.onrender.com/cursos', curso);
      console.log('Curso creado:', response.data);
      setNombre('');
      setCreditos('');
      setDescripcion('');
    } catch (error) {
      console.error('Error creando el curso:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Créditos:</label>
        <input
          type="number"
          value={creditos}
          onChange={(e) => setCreditos(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <button type="submit">Crear Curso</button>
    </form>
  );
};

export default CrearCurso;