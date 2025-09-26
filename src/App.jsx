import './App.css'
import CardGenerica from './components/CardGenerica';
import Header from './components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  return (
    <>

      <Header/>
      <div className='Fondo'>
        <section>
          <Row className="g-3">
            <Col> <CardGenerica titulo='Cafe' descripcion='El mejor del oeste' precio='1500'/> </Col>
            <Col> <CardGenerica titulo='Cafe con 2 medialunas' descripcion='El verdadero desayuno' precio='3000'/> </Col>
            <Col> <CardGenerica titulo='Pastafrola' descripcion='El dulce justo' precio='1500'/> </Col>
            <Col> <CardGenerica titulo='Cafe con Sandwich de miga' descripcion='Desayuno argentino' precio='5000'/> </Col>
            <Col> <CardGenerica titulo='Cafe' descripcion='El mejor del oeste' precio='1500'/> </Col>
            <Col> <CardGenerica titulo='Cafe con 2 medialunas' descripcion='El verdadero desayuno' precio='3000'/> </Col>
            <Col> <CardGenerica titulo='Pastafrola' descripcion='El dulce justo' precio='1500'/> </Col>
            <Col> <CardGenerica titulo='Cafe con Sandwich de miga' descripcion='Desayuno argentino' precio='5000'/> </Col>
          </Row>
        </section>
      </div>

    </>
  )
}

export default App
