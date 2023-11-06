import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [id_rol, setId_rol] = useState('');
  const [nombre_rol, setNombrerol] = useState('');
  const [modulo_id, setModulo_id] = useState('Modulo de subir archivos');

  const asignarPermiso = () => {
    // Obtén el ID del módulo seleccionado
    let modulo_id;
    if (modulo_id === 'Modulo de subir archivos') {
      modulo_id = 1;
    } else if (modulo_id === 'Modulo de trazabilidad') {
      modulo_id = 2;
    } else if (modulo_id === 'Modulo de importancia') {
      modulo_id = 3;
    }

    axios.post('http://localhost:3001/insertar-permiso', {
      id_rol: id_rol,
      nombre_rol: nombre_rol,
      modulo_id: modulo_id
    })
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error(error);
    });
    
  };

  return (
    <div className="App">
      <h1>Asignar Permiso a Módulo</h1>
      <div>
        <label>Código Rol:</label>
        <input type="text" value={id_rol} onChange={(e) => setId_rol(e.target.value)} />
      </div>
      <div>
        <label>Rol:</label>
        <input type="text" value={nombre_rol} onChange={(e) => setNombrerol(e.target.value)} />
      </div>

      <div>
        <label>Módulo:</label>
        <select value={modulo_id} onChange={(e) => setModulo_id(e.target.value)}>
          <option value="Modulo de subir archivos">Modulo de subir archivos</option>
          <option value="Modulo de trazabilidad">Modulo de trazabilidad</option>
          <option value="Modulo de importancia">Modulo de importancia</option>
        </select>
      </div>

      <button onClick={asignarPermiso}>Asignar Permiso</button>
    </div>
  );
};

export default App;
