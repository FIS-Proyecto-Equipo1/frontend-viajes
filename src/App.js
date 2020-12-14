import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  //estilo para los componentes
import './App.css';
import Contacts from './contacts.js';

function App() {

  const contacts = [{
    name: "Robert",
    phone: "666"
  },
  {name: "Juan", phone: "666"}];

  return (
    <div>
      <h1>Hello World</h1>
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
