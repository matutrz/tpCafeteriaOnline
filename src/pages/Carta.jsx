import "../App.css";
import CardGenerica from "../components/CardGenerica";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productos from "../data/fakeBackend";
import { CAFE_INFO } from '../data/constants'; 
import Layout from '../components/Layout'; 

function Carta({ agregarProducto }) {
  return (

    <Layout activeLink="Carta">
    <div className="Fondo">
      <h1>Carta</h1>
      <section>
        <Row className="g-3">
          {productos.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={2}>
              <CardGenerica props={{ producto, agregarProducto }} />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  </Layout>
  );
}

export default Carta;
