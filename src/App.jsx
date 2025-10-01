import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import ContactForm from './components/ContactForm.jsx'; 

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
            <ContactForm />
          }
        />
      </Routes>
    </>
  );
}

export default App
