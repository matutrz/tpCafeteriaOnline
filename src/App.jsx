import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './pages/Inicio';
import Carta from './pages/Carta';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import SobreNos from "./pages/SobreNos";
import HeaderPagina from './components/HeaderPagina';
import Footer from './components/FooterPagina';
import { CAFE_INFO } from './data/constants'; 

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

  return (
    <>
      <HeaderPagina agregarProducto={agregarProducto} /> 

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Carta" element={<Carta agregarProducto={agregarProducto} />} />
        <Route path="/Carrito" element={<Carrito funciones={{ carrito, setCarrito, actualizarCarrito }} />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path= "/SobreNos" element={<SobreNos />} />
      </Routes>

      <Footer
          cafeName={CAFE_INFO.name}
          direccion={CAFE_INFO.address}
          telefono={CAFE_INFO.phone}
          email={CAFE_INFO.email}
      />
    </>
  );
}

export default App;