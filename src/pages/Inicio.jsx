import { Container, Button, Row, Col, Card } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faSeedling, faCookieBite, faStar } from '@fortawesome/free-solid-svg-icons'; 

const Inicio = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <>
            <section className={styles.heroSection} id="inicio">
                <Container className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Luna & Granos Café</h1>
                    <p className={styles.heroSubtitle}>
                        Donde la Tradición Encuentra la Noche.
                    </p>
                    <Button as={Link} to="/carta" className={styles.ctaButton} onClick={scrollToTop}>
                        Ver Nuestra Carta
                    </Button>
                </Container>
            </section>
            <section className={`py-5 ${styles.promiseSection}`} id="promesa">
                <Container className="text-center">
                    <h2 className={styles.sectionTitle}>NUESTRA PROMESA</h2>
                    <p className={styles.sectionSubtitle}>
                        Hemos cultivado la experiencia perfecta, desde el grano hasta tu taza.
                    </p>
                    
                    <Row className="mt-5">
                        
                        <Col md={3} className={styles.promiseBlock}>
                            <FontAwesomeIcon icon={faMugHot} className={styles.promiseIcon} />
                            <h3 className={styles.promiseTitle}>TUESTO ARTESANAL</h3>
                            <p>
                                Granos seleccionados y tostados diariamente, asegurando la máxima frescura y un sabor inigualable.
                            </p>
                        </Col>

                        <Col md={3} className={styles.promiseBlock}>
                            <FontAwesomeIcon icon={faSeedling} className={styles.promiseIcon} />
                            <h3 className={styles.promiseTitle}>ORIGEN SOSTENIBLE</h3>
                            <p>
                                Colaboramos con fincas que respetan la tierra, garantizando prácticas éticas y granos de alta calidad.
                            </p>
                        </Col>

                        <Col md={3} className={styles.promiseBlock}>
                            <FontAwesomeIcon icon={faCookieBite} className={styles.promiseIcon} />
                            <h3 className={styles.promiseTitle}>REPOSTERÍA FRESCA</h3>
                            <p>
                                Acompaña tu bebida con nuestros postres, perfectos para cualquier momento del día.
                            </p>
                        </Col>

                        <Col md={3} className={styles.promiseBlock}>
                            <FontAwesomeIcon icon={faStar} className={styles.promiseIcon} />
                            <h3 className={styles.promiseTitle}>EXPERIENCIA PREMIUM</h3>
                            <p>
                                Un ambiente acogedor y servicio dedicado para que cada visita sea un escape perfecto.
                            </p>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className={`py-5 ${styles.aboutSection}`} id="sobre-nosotros-preview">
                <Container>
                    <Row className="align-items-center">
                        
                        <Col md={6} className="text-center mb-4 mb-md-0">
                            <img 
                                src="/icon.png"
                                alt="Logo de Luna y Granos Café"
                                className={styles.aboutLogoImage} 
                            />
                        </Col>

                        <Col md={6}>
                            <h2 className={styles.aboutTitle}>Más que solo café... Es un encuentro.</h2>
                            <p className={styles.aboutText}>
                                "Luna & Granos Café" no solo vende la taza perfecta; vendemos la experiencia de una pausa, el confort de un ambiente cálido y la certeza de estar bebiendo un producto con historia y ética. Desde nuestro tostado artesanal de 2003 hasta la sonrisa de nuestro staff, queremos que te sientas como en casa.
                            </p>
                            <Button as={Link} to="/SobreNos" className={styles.aboutCtaButton} onClick={scrollToTop}>
                                Conoce Nuestra Historia Completa
                            </Button>
                        </Col>
                        
                    </Row>
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