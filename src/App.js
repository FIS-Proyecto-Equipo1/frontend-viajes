import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  //estilo para los componentes
import './App.css';
import Viajes from './viajes.js';
import Viajes_curso from './viajes_curso';

function App() {

  return (
    <div>
      <h1>Viajes en Curso</h1>
      <Viajes_curso/>
      <h1>Historial de viajes</h1>
      <Viajes/>
    </div>
  );
}

export default App;
