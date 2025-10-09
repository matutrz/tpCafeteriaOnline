import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './pages/Inicio';
import Carta from './pages/Carta';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import SobreNos from "./pages/SobreNos";
import HeaderPagina from './components/HeaderPagina';
import Footer from './components/FooterPagina';
import { CAFE_INFO, EQUIPO_MIEMBROS } from './data/constants'; 

function App() {
  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    const storageCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let nuevoCarrito;
    const existe = storageCarrito.find((item) => item.id === producto.id);
    if (!existe) {
      nuevoCarrito = [...storageCarrito, { ...producto, cantidad: 1 }];
    } else {
      nuevoCarrito = storageCarrito.map((item) =>
        item.id === producto.id && item.cantidad < 100
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    }
    actualizarCarrito(nuevoCarrito);
  }

  function actualizarCarrito(nuevoCarrito) {
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  }

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}> 
      <HeaderPagina 
        agregarProducto={agregarProducto} 
        isDarkMode={isDarkMode}          
        toggleDarkMode={toggleDarkMode}   
      /> 

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Carta" element={<Carta agregarProducto={agregarProducto} />} />
        <Route path="/Carrito" element={<Carrito funciones={{ carrito, setCarrito, actualizarCarrito }} />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path= "/SobreNos" element={<SobreNos />} />
      </Routes>

      <Footer
          miembros={EQUIPO_MIEMBROS}
          cafeName={CAFE_INFO.name}
          direccion={CAFE_INFO.address}
          telefono={CAFE_INFO.phone}
          email={CAFE_INFO.email}
      />
    </div>
  );
}

export default App;