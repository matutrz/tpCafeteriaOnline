import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStore } from '@fortawesome/free-solid-svg-icons'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../components/ContactForm';
import styles from './Contacto.module.css';

const Contacto = () => {
    // Datos de ejemplo para Luna & Granos Café
    const datosContacto = {
        telefono: '555-GRANOS',
        whatsapp: '555-LUNAS',
        email: 'hola@lunaygranos.com',
        direccion: 'dirección 123'
    };

    return (
        <div className={styles.contactPage}>
            
            {/* 2. Banner*/}
            <div className={styles.headerBanner}>
                <Container className="py-5">
                    <h1 className="text-center mb-2">Contáctanos ☕</h1>
                    <p className="text-center px-4">
                        Estamos felices de escucharte, ya sea para una reserva, un evento, o simplemente un saludo. 
                        ¡Tu café te espera!
                    </p>
                </Container>
            </div>

            <Container className="my-5">
                <Row>
                    {/* 3. Columna de Información de Contacto (Iconos) */}
                    <Col lg={5} className="mb-4 mb-lg-0">
                        <h2 className={`mb-4 ${styles.tituloPrincipal}`}>Ponte en Contacto</h2>
                        <p className="mb-4">
                            Usa cualquiera de estos métodos para comunicarte con nosotros.
                        </p>

                        <div className="d-grid gap-3">
                            {/* Tarjetas de Contacto */}
                            <Card className={styles.contactCard}>
                                <Card.Body className="text-center py-4">
                                    <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} size="2x" />
                                    <p className="mt-2 mb-0">Teléfono</p>
                                    <strong className={styles.contactValue}>{datosContacto.telefono}</strong>
                                </Card.Body>
                            </Card>

                            <Card className={styles.contactCard}>
                                <Card.Body className="text-center py-4">
                                    <FontAwesomeIcon icon={faWhatsapp} className={styles.contactIcon} size="2x" />
                                    <p className="mt-2 mb-0">Whatsapp</p>
                                    <strong className={styles.contactValue}>{datosContacto.whatsapp}</strong>
                                </Card.Body>
                            </Card>

                            <Card className={styles.contactCard}>
                                <Card.Body className="text-center py-4">
                                    <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} size="2x" />
                                    <p className="mt-2 mb-0">Email</p>
                                    <strong className={styles.contactValue}>{datosContacto.email}</strong>
                                </Card.Body>
                            </Card>

                            <Card className={styles.contactCard}>
                                <Card.Body className="text-center py-4">
                                    <FontAwesomeIcon icon={faStore} className={styles.contactIcon} size="2x" />
                                    <p className="mt-2 mb-0">Nuestra Cafetería</p>
                                    <strong className={styles.contactValue}>{datosContacto.direccion}</strong>
                                </Card.Body>
                            </Card>
                        </div>
                        
                        {/* Mapa */}
                        <div className={`mt-4 ${styles.mapContainer}`}>
                            <p className="text-center text-muted mb-1">Encuéntranos</p>
                            <div className={styles.mapPlaceholder}>
                                {/* En un entorno real, aquí iría el iframe o componente de Google Maps */}
                                <p className="text-center pt-5">[Aquí iría el Mapa]</p>
                            </div>
                        </div>

                    </Col>

                    {/* 4. Columna del Formulario de Contacto/Reserva */}
                    <Col lg={7}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Contacto