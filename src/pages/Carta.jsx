import { Container, Row, Col } from "react-bootstrap";
import CardGenerica from "../components/CardGenerica";
import productos from "../data/fakeBackend";
import styles from "./Carta.module.css";

function Carta({ agregarProducto }) {
  return (
    <div className={styles.cartaPage}>
      <header className={styles.cartaHeader}>
        <Container>
          <h1>Nuestra Carta Completa</h1>
          <p>Explora nuestras especialidades, desde el grano hasta el postre.</p>
        </Container>
      </header>

      <Container className="py-5">
        <section>
          <Row className="g-3 justify-content-center"> 
            {productos.map((producto) => (
              <Col key={producto.id} xs={12} sm={6} md={3} lg={3} xl={3}>
                <CardGenerica props={{ producto, agregarProducto }} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Carta;
