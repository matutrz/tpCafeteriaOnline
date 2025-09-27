import { useEffect, useState } from "react";
import ElementoCarrito from "../components/ElementoCarrito";
import style from "./Carrito.module.css";

function Carrito({ productos }) {
  const { carrito, setCarrito , actualizarCarrito} = productos;

  useEffect(() => {
    // Cargo el carrito desde localStorage al iniciar, sirve para cuando vuelvo a la pagina o la refresco
    const storageCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(storageCarrito);
  }, []);

  useEffect(() => {
    actualizarTotal();
  }, [carrito]);

  const [total, setTotal] = useState(0);

  function eliminarProducto(id) {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  }

  function actualizarTotal() {
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(total);
  }

  function aumentarCantidad(id) {
    const nuevoCarrito = carrito.map((item) =>
      item.id === id && item.cantidad < 100
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    actualizarCarrito(nuevoCarrito);
  }

  function setCantidad(id, cantidad) {
    const nuevoCarrito = carrito.map((item) =>
        item.id === id ? { ...item, cantidad: cantidad } : item
      );
    actualizarCarrito(nuevoCarrito);
  }

  function disminuirCantidad(id) {
    const nuevoCarrito = carrito.map((item) =>
      item.id === id
        ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
        : item
    );
    actualizarCarrito(nuevoCarrito);
  }

  return (
    <div id={style.ContainerPrincipal}>
      <div id={style.ContainerCarrito}>
        <h1 id={style.TituloCarrito}>Tu Carrito</h1>
        <h2 id={style.ContinuarComprando}>Continuar Comprando</h2>
      </div>
      <div id={style.HeaderCarrito}>
        <p className={style.Seccion}>PRODUCTO</p>
        <p className={style.Seccion}>CANTIDAD</p>
        <p className={style.Seccion}>TOTAL</p>
      </div>
      {carrito.map((producto) => (
        <ElementoCarrito
          elemento={{
            ...producto,
            eliminarProducto: eliminarProducto,
            aumentarCantidad: aumentarCantidad,
            disminuirCantidad: disminuirCantidad,
            setCantidad: setCantidad,
          }}
        ></ElementoCarrito>
      ))}
      <div id={style.TotalCarritoContainer}>
        <h2 id={style.TotalCarrito}>Total: ${total}</h2>
        <button id={style.BotonPagar}>Pagar</button>
      </div>
    </div>
  );
}

export default Carrito;
