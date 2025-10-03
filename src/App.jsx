import "./App.css";
import { useState } from "react";
import Carrito from "./pages/Carrito";
import reactLogo from './assets/react.svg';

function App() {
  //agregar en la parte de nacho
  const [carrito, setCarrito] = useState([]);

  /*
  los productos son objetos que tienen el siguiente formato:
  { 
    id: int,
    nombre: string, 
    imagen: url o archivo,
    precio: int
  }
  */

  //agregar en la parte de nacho
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

  //agregar en la parte de nacho
  function actualizarCarrito(nuevoCarrito) {
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  }

  return (
    <>
      <button //boton para probar agregar productos
        onClick={() =>
          agregarProducto({
            id: 1,
            nombre: "Cafe",
            imagen: reactLogo,
            precio: 1500,
          })
        }
      >
        Agregar Cafe
      </button>
      <button //boton para probar agregar productos
        onClick={() =>
          agregarProducto({
            id: 2,
            nombre: "Cafe con leche",
            imagen: reactLogo,
            precio: 2000,
          })
        }
      >
        Agregar Cafe con Leche
      </button>
      <Carrito funciones={{ carrito, setCarrito, actualizarCarrito }}></Carrito>
import './App.css'
import Header from './components/Header'
import Contacto from './pages/Contacto'
import Carta from './pages/Carta'
import Carrito from './pages/Carrito'
import Inicio from './pages/Inicio'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

      <Header/>
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Carta" element={<Carta/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>

    </>
  );
}

export default App;
