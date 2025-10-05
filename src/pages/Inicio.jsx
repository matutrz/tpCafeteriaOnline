import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';

const Inicio = () => {
    return (
        <>
            <section className={styles.heroSection} id="inicio">
                <Container className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Luna & Granos Café</h1>
                    <p className={styles.heroSubtitle}>
                        Donde la Tradición Encuentra la Noche.
                    </p>
                    <Button as={Link} to="/carta" className={styles.ctaButton}>
                        Ver Nuestra Carta
                    </Button>
                </Container>
            </section>
        </>
      );
};

export default Inicio;

/*
<div className="main-block">
      <h2 className="bienvenida">¡Bienvenidos a la Cafetería Luna!</h2>
      <img
        alt=""
        src="/mainBg.png"
        width="55%"
        height="auto"
        className="mainBg"
      />

      <div className="intro">
        <p>¡Muchas gracias por visitar nuestra web!</p>

        <p>
          El equipo de Cafetería Luna te invita a visitarnos para probar
          diversos tipos de meriendas y aperitivos. Nuestro local se halla sobre
          la calle Rosales al nro. 3092. Los horarios de atención son de 08:00 a
          14:00 y de 16:00 a 22:00. ¡Te esperamos!
        </p>
*/