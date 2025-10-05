import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerStyles from './Footer.module.css';

const Footer = ({ cafeName, direccion, telefono, email }) => {
    return (
        <footer className={footerStyles.customFooter}>
            <Container className="py-5">
                <Row>
                    <Col lg={4} className={`mb-4 mb-lg-0 ${footerStyles.separator}`}> 
                        <h4 className={footerStyles.brandName}>☕ {cafeName}</h4>
                        <p>
                            El lugar ideal para disfrutar de la luna y el grano en una taza. Calidad y tradición.
                        </p>
                    </Col>

                    <Col lg={4} className={`mb-4 mb-lg-0 ${footerStyles.separator}`}> 
                        <h5 className={footerStyles.columnTitle}>Enlaces Rápidos</h5>
                        <ul className={footerStyles.linkList}>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/Carta">Carta</Link></li>
                            <li><Link to="/SobreNos">Sobre Nosotros</Link></li>
                            <li><Link to="/Contacto">Contacto</Link></li>
                        </ul>
                    </Col>

                    <Col lg={4}>
                        <h5 className={footerStyles.columnTitle}>Contáctanos</h5>
                        <ul className={footerStyles.contactList}>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> 
                                {direccion}
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className="me-2" /> 
                                {telefono}
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> 
                                {email}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className={footerStyles.copyrightBar}>
                <Container className="text-center py-3">
                    <p className="mb-0">
                        Copyright © {new Date().getFullYear()} {cafeName} | Creado para amantes del café
                    </p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;