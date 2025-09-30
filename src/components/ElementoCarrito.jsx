import styles from "./ElementoCarrito.module.css";

function ElementoCarrito({ elemento }) {
  function cambiarCantInput(e) {
    const value = e.target.value;
    const num = Number(value);
    if (num > 100){
      alert("La cantidad máxima es 100 unidades.");
      return;
    }

    if (num < 1){
      alert("La cantidad minima es 1 unidad.");
      return;
    }

    if (num >= 1 && num <= 100) {
      elemento.setCantidad(elemento.id, num);
    }
  }

  function actualizarInput(e) {
    const value = e.target.value;
    const num = Number(value); //devuelve Nan si no es un numero
    // Si el input está vacío o es inválido, poné 1
    if (value === "" || isNaN(num)) {
      elemento.setCantidad(elemento.id, 1);
    }
  }

  return (
    <div className={styles.ElementoContainer}>
      <div className={styles.DescripcionContainer}>
        <img src={elemento.imagen} className={styles.ImagenCarrito} />
        <div className={styles.Descripcion}>
          <p className={styles.NombreProducto}>{elemento.nombre}</p>
          <p className={styles.PrecioProducto}>${elemento.precio}</p>
        </div>
      </div>
      <div className={styles.CantidadContainer}>
        <button
          className={styles.BotonCarrito}
          onClick={() => elemento.disminuirCantidad(elemento.id)}
        >
          -
        </button>
        <input
          className={styles.CantidadProducto}
          type="text"
          value={elemento.cantidad}
          onChange={cambiarCantInput}
          onBlur={actualizarInput}
        />
        <button
          className={styles.BotonCarrito}
          onClick={() => {
            elemento.aumentarCantidad(elemento.id);
          }}
        >
          +
        </button>
        <button
          className={styles.BotonEliminar}
          onClick={() => elemento.eliminarProducto(elemento.id)}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/project-management-1-9/48/28-512.png"
            alt="Eliminar"
            className={styles.TachoEliminar}
          />
        </button>
      </div>
      <p className={styles.TextoSubtotal}>
        ${elemento.precio * elemento.cantidad}
      </p>
    </div>
  );
}

export default ElementoCarrito;
