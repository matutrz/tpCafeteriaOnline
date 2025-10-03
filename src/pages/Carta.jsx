import '../App.css';
import CardGenerica from '../components/CardGenerica';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productos from '../data/fakeBackend'

const Carta = () => {
    return (

        <div className='Fondo'>
            <h1>Carta</h1>
            <section>
                <Row className="g-3">
                {productos.map((prod) => (
                    <Col key={prod.id} xs={12} sm={6} md={4} lg={2}>
                    <CardGenerica 
                        img={prod.img}  
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