import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.scss';
import Rotas from './Rotas.js'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Rotas />

    </div>

    </BrowserRouter>

  );
}

export default App;
