import { useEffect, useState } from "react";
import { CAFE_INFO } from '../data/constants'; 
import Layout from '../components/Layout'; 
import ElementoCarrito from "../components/ElementoCarrito";
import style from "./Carrito.module.css";

function Carrito({ funciones }) {
  const [total, setTotal] = useState(0);
  const { carrito, setCarrito, actualizarCarrito } = funciones;

  useEffect(() => {
    // Cargo el carrito desde localStorage al iniciar, sirve para cuando vuelvo a la pagina o la refresco
    const storageCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(storageCarrito);
  }, []);

  useEffect(() => {
    actualizarTotal();
  }, [carrito]);

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
    const producto = carrito.find((item) => item.id === id);
    if (producto && producto.cantidad === 100) {
      alert("La cantidad máxima es 100 unidades.");
      return;
    }
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
    const producto = carrito.find((item) => item.id === id);
    if (producto && producto.cantidad === 1) {
      alert("La cantidad mínima es 1 unidad.");
      return;
    }
    const nuevoCarrito = carrito.map((item) =>
      item.id === id
        ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
        : item
    );
    actualizarCarrito(nuevoCarrito);
  }

  function confirmarPedido() {
    if (carrito.length !== 0) {
      alert("Pedido Confirmado correctamente. El total es: $" + total);
      actualizarCarrito([]);
    } else {
      alert(
        "El carrito está vacío. Agrega productos antes de confirmar el pedido."
      );
    }
  }

  return (
    <Layout activeLink="Carrito">

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

      {carrito.length === 0 ? (
        <h2 id={style.CarritoVacio}>Tu carrito está vacío</h2>
      ) : (
        carrito.map((producto) => (
          <ElementoCarrito
            key={producto.id}
            elemento={{
              ...producto,
              eliminarProducto: eliminarProducto,
              aumentarCantidad: aumentarCantidad,
              disminuirCantidad: disminuirCantidad,
              setCantidad: setCantidad,
            }}
          ></ElementoCarrito>
        ))
      )}
      <div id={style.TotalCarritoContainer}>
        <h2 id={style.TotalCarrito}>Total: ${total}</h2>
        <button id={style.BotonConfirmar} onClick={() => confirmarPedido()}>
          Confirmar pedido
        </button>
      </div>
    </div>
  </Layout>
  );
}

export default Carrito;
