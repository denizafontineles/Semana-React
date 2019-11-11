import React from 'react';
import Comentario from './Comentario'

import dog from './img/dog.jpg';
import './App.css';


function App() {
  return (
    <div className="App">

      <Comentario
      img={dog}
      nome="Deniza"
      titulo="Adorei sua performace"
      comentario="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  
      />

      <Comentario
      nome="Jhenny"
      titulo="Adorei sua performace"
      comentario="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />

    </div>
  );
}

export default App;
