import { useState } from 'react'
import AppGFW from './components/AppGFW'
import './App.css';

function App() {


  return (

    <div className="App">
      <header className="p-5 bg-danger text-white text-center">
        <h1 className="display-1">Quoi de neuf, Google Fonts ?</h1>
        <p className="h4">Le plus récents, les plus trendy et les plus populaires polices Google.</p>
      </header>
      <AppGFW />

      <footer className="p-3 tex-center bg-dark text-white">With Love & React for Alyra</footer>
    </div>


  );
}

export default App;
