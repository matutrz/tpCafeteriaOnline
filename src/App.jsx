import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carrito from "./pages/Carrito";
import reactLogo from "./assets/react.svg";

function App() {
  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
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
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Bienvenido a la Cafetería Online</h1>
              <button
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
              <button
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
            </div>
          }
        />
        <Route
          path="/carrito"
          element={
            <Carrito productos={{ carrito, setCarrito, actualizarCarrito }} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
