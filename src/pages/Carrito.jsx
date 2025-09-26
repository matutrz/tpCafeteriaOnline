import { useEffect, useState } from "react";
import ElementoCarrito from "../components/ElementoCarrito";
import reactLogo from "../assets/react.svg";
import style from "./Carrito.module.css";

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    actualizarTotal();
  }, [carrito]);

  const [total, setTotal] = useState(0);

  function agregarProducto(producto) {
    //Agrego el producto si no esta en el carrito
    if (!carrito.find((item) => item.id === producto.id)) {
      setCarrito((carrito) => [...carrito, producto]);
    }
  }

  function eliminarProducto(id) {
    //Elimino el producto por id
    setCarrito((carrito) => carrito.filter((item) => item.id !== id));
  }

  function actualizarTotal() {
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(total);
  }

  function aumentarCantidad(id) {
    setCarrito((carrito) =>
      carrito.map((item) =>
        item.id === id && item.cantidad < 100
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  }

  function setCantidad(id, cantidad) {
    setCarrito((carrito) =>
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: cantidad } : item
      )
    );
  }

  function disminuirCantidad(id) {
    setCarrito((carrito) =>
      carrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
          : item
      )
    );
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
      <button
        onClick={() =>
          agregarProducto({
            id: 1,
            nombre: "Cafe",
            imagen: reactLogo,
            precio: 1500,
            cantidad: 1,
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
            cantidad: 1,
          })
        }
      >
        Agregar Cafe con Leche
      </button>
      <div id={style.TotalCarritoContainer}>
        <h2 id={style.TotalCarrito}>Total: ${total}</h2>
        <button id={style.BotonPagar}>Pagar</button>
      </div>
    </div>
  );
}

export default Carrito;
