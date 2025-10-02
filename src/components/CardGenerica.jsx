import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cafe from '../assets/cafe.jpg';

function CardGenerica({ titulo, descripcion, precio }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cafe} />
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