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
            <Col lg={5} className={`mb-4 mb-lg-0 ${styles.separatorColumn}`}> {/* 💡 Aplica clase de separador */}
              <h2 className={`mb-4 ${styles.tituloPrincipal}`}>
                Ponte en Contacto
              </h2>
              <p className="mb-4">
                Usa cualquiera de estos métodos para comunicarte con nosotros.
              </p>

              <div className="d-grid gap-3">
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
              </div>

              <div className={`mt-4 ${styles.mapContainer}`}>
                <p className="text-center text-muted mb-1">Encuéntranos</p>
                <div className={styles.mapPlaceholder}>
                  <p className="text-center pt-5">[Aquí iría el Mapa]</p>
                </div>
              </div>
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