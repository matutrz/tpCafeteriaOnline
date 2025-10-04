import './App.css'
import Contacto from './pages/Contacto'
import Carta from './pages/Carta'
import Carrito from './pages/Carrito'
import Inicio from './pages/Inicio'
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";


function App() {
  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    //logica para agregar producto al carrito desde la carta
    //sirve para agregar un producto o agregar varias veces el mismo producto
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
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Carta" element={<Carta agregarProducto={agregarProducto}/>}/>
          <Route path="/Carrito" element={<Carrito funciones={{ carrito, setCarrito, actualizarCarrito }}></Carrito>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
    </>
  );
}

export default App;
