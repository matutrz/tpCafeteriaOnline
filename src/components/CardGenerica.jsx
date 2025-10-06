import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import styles from "./CardGenerica.module.css";

function CardGenerica({ props }) {
  const { imagen, nombre, descripcion, precio } = props.producto;
  return (
    <Card className={styles.productCard}>
      <Card.Img
        variant="top"
        src={imagen}
        className= {styles.cardImage}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{nombre}</Card.Title>
        <Card.Text className={styles.cardText}>{descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className={styles.cardPrice}>${precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <Button
          variant="primary"
          className={styles.addToCartButton}
          onClick={() => props.agregarProducto(props.producto)}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardGenerica;
