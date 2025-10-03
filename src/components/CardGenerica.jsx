import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function CardGenerica({ titulo, img, descripcion, precio }) {
    return (
        <Card>
            <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>precio:{precio}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Agregar al carrito</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CardGenerica;