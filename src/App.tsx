import React from 'react';
import Image from './img/bento-box.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>React app</h1>
     <img src={Image} alt="bento"/>
    </div>
  );
}

export default App;
