import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import ContactPage from './pages/Contacto'; 
import Carrito from "./pages/Carrito";

function App() {

  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <Routes>
        <Route 
            path="/contacto"
            element={
              <ContactPage />
            } 
        />
      </Routes>
    </>
  );
}

export default App
