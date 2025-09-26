import './App.css'
import CardGenerica from './components/CardGenerica';
import Header from './components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contacto from './pages/Contacto'
import Carta from './pages/Carta'
import Carrito from './pages/Carrito'
import Inicio from './pages/Inicio'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

      <Header/>
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Carta" element={<Carta/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>

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
