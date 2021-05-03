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
      <div className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3 mb-4">



          </div>
        </div>
      </div>
      <div className="container">
        <AppGFW />
      </div>
      <footer className="p-3 tex-center bg-dark text-white">With Love & React for Alyra</footer>
    </div>


  );
}

export default App;
