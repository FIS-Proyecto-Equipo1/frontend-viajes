import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  //estilo para los componentes
import './App.css';
import Viajes from './viajes.js';
import Viajes_curso from './viajes_curso';

function App() {

  //const viajes2 = [
  //  {cliente: "555", id_vehiculo: "1023", estado: "EN CURSO", duracion: "00:05:54"}
  //];

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
