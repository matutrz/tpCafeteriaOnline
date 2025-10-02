import '../App.css';
import CardGenerica from '../components/CardGenerica';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productos from '../data/fakeBackend'

const Carta = () => {
    return (

    <div className='Fondo'>
        <section>
            <Row className="g-3">
                {productos.map((prod) => (
                    <Col key={prod.id}>
                        <CardGenerica 
                        titulo={prod.titulo} 
                        descripcion={prod.descripcion} 
                        precio={prod.precio} 
                        />
                    </Col>
                ))}
            </Row>
      </section>
    </div>

    )
}

export default Carta