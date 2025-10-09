import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faStore } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CAFE_INFO } from '../data/constants'; 
import ContactForm from "../components/ContactForm";
import styles from "./Contacto.module.css";


const Contacto = () => {
  return (

      <div className={styles.contactPage}>
        <div className={styles.headerBanner}>
          <Container className="py-5">
            <h1 className="text-center mb-2">Contáctanos ☕</h1>
            <p className="text-center px-4">
              Estamos felices de escucharte, ya sea para una reserva, un evento, o
              simplemente un saludo. ¡Tu café te espera!
            </p>
          </Container>
        </div>

        <Container className="my-5">
          <Row className="text-start">
            <Col lg={5} className={`mb-4 mb-lg-0 ${styles.separatorColumn}`}>
              <h2 className={`mb-4 ${styles.tituloPrincipal}`}>
                Ponte en Contacto
              </h2>
              <p className={`mb-4 ${styles.descripcionContacto}`}>
                Usa cualquiera de estos métodos para comunicarte con nosotros.
              </p>

          <Row xs={2} sm={2} className="g-3"> 
                <Col> 
                    <Card className={styles.contactCard}>
                        <Card.Body className="text-center py-4">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={styles.contactIcon}
                                size="2x"
                            />
                            <p className="mt-2 mb-0">Teléfono</p>
                            <strong className={styles.contactValue}>
                                {CAFE_INFO.phone} 
                            </strong>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Card className={styles.contactCard}>
                  <Card.Body className="text-center py-4">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className={styles.contactIcon}
                      size="2x"
                    />
                    <p className="mt-2 mb-0">Whatsapp</p>
                    <strong className={styles.contactValue}>
                      {CAFE_INFO.whatsapp}
                    </strong>
                  </Card.Body>
                </Card>
                </Col>


                <Col>
                <Card className={styles.contactCard}>
                  <Card.Body className="text-center py-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={styles.contactIcon}
                      size="2x"
                    />
                    <p className="mt-2 mb-0">Email</p>
                    <strong className={styles.contactValue}>
                      {CAFE_INFO.email}
                    </strong>
                  </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className={styles.contactCard}>
                  <Card.Body className="text-center py-4">
                    <FontAwesomeIcon
                      icon={faStore}
                      className={styles.contactIcon}
                      size="2x"
                    />
                    <p className="mt-2 mb-0">Nuestra Cafetería</p>
                    <strong className={styles.contactValue}>
                      {CAFE_INFO.address}
                    </strong>
                  </Card.Body>
                </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={7} className={styles.contactFormColumn}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Contacto;