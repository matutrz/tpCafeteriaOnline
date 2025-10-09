import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./CardGenerica.module.css";
import { motion } from "motion/react";

function CardGenerica({ props }) {
  const { imagen, nombre, descripcion, precio } = props.producto;
  return (
    <Card className={styles.productCard}>
      <Card.Img
        variant="top"
        src={imagen}
        className= {styles.cardImage}
      />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{nombre}</Card.Title>
        <Card.Text className={styles.cardText}>{descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className={styles.cardPrice}>${precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <motion.button
          variant="primary"
          className={styles.addToCartButton}
          onClick={() => {
            props.agregarProducto(props.producto);
            alert(nombre + " agregado al carrito ✅ podes gestionar tu compra en la sección 'tu pedido' ");
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Agregar al carrito
        </motion.button>
      </Card.Body>
    </Card>
  );
}

export default CardGenerica;
