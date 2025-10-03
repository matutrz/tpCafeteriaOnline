import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardGenerica({ props }) {
  const { imagen, nombre, descripcion, precio } = props.producto;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imagen}
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
      />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>precio:{precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link onClick={() => props.agregarProducto(props.producto)}>
          Agregar al carrito
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardGenerica;
