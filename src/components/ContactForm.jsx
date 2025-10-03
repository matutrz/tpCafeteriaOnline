import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: '',
        email: '',
        fecha: '', 
        hora: '', 
        mensaje: ''
    });

    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState('');

    const manejarCambio = (e) => {
        setDatosFormulario({ 
            ...datosFormulario, 
            [e.target.name]: e.target.value 
        });
        setEnviado(false); 
        setError('');
    };

    const validarFormulario = () => {
        // Validación simplificada: revisar que los campos con (*) estén llenos
        if (!datosFormulario.nombre || !datosFormulario.email || !datosFormulario.fecha || !datosFormulario.hora) {
            setError('Por favor, rellena todos los campos marcados con (*).');
            return false;
        }
        return true;
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        console.log('Datos de reserva/contacto enviados:', datosFormulario);
        
        // Simular envío a un API/Servicio
        setEnviado(true);
        
        // Limpiar formulario
        setDatosFormulario({
            nombre: '',
            email: '',
            fecha: '',
            hora: '',
            mensaje: ''
        });
    };
    
    return (
        // Se eliminó la Container para mejor control del layout en ContactPage
        <div className={styles.contenedorFormulario}>
            
            <h2 className={styles.titulo}>Reservas y Contacto</h2>
            <p className="mb-4 text-muted">
                Dinos cómo podemos ayudarte. Tu mesa o tu consulta, un mensaje directo.
            </p>

            {enviado && (
                <Alert variant="success" className="mb-4">
                    ¡Tu mensaje/reserva ha sido enviado con éxito! Nos contactaremos pronto.
                </Alert>
            )}

            {error && (
                <Alert variant="danger" className="mb-4">
                    {error}
                </Alert>
            )}

            <Form onSubmit={manejarEnvio}>
                
                {/* Nombre y Email en una sola fila (similar a la imagen) */}
                <div className="d-flex flex-column flex-md-row gap-3">
                    <Form.Group className="mb-3 w-100" controlId="formNombre">
                        <Form.Label className={styles.label}>Nombre (*)</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={datosFormulario.nombre}
                            onChange={manejarCambio}
                            placeholder="Tu nombre"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formEmail">
                        <Form.Label className={styles.label}>Email (*)</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={datosFormulario.email}
                            onChange={manejarCambio}
                            placeholder="tucorreo@ejemplo.com"
                            required
                        />
                    </Form.Group>
                </div>
                
                {/* Fecha y Hora en una sola fila (para la reserva) */}
                <div className="d-flex flex-column flex-md-row gap-3">
                    <Form.Group className="mb-3 w-100" controlId="formFecha">
                        <Form.Label className={styles.label}>Fecha de la Reserva (*)</Form.Label>
                        <Form.Control
                            type="date"
                            name="fecha"
                            value={datosFormulario.fecha}
                            onChange={manejarCambio}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formHora">
                        <Form.Label className={styles.label}>Hora de la Reserva (*)</Form.Label>
                        <Form.Control
                            type="time"
                            name="hora"
                            value={datosFormulario.hora}
                            onChange={manejarCambio}
                            required
                        />
                    </Form.Group>
                </div>
                
                {/* Mensaje */}
                <Form.Group className="mb-3" controlId="formMensaje">
                    <Form.Label className={styles.label}>Mensaje / Detalles</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4} // Aumentado a 4 filas para ser más visible
                        name="mensaje"
                        value={datosFormulario.mensaje}
                        onChange={manejarCambio}
                        placeholder="Ej: Mesa para 4 personas a las 10:00 AM o tu consulta general."
                    />
                </Form.Group>

                <Button 
                    type="submit" 
                    className={`w-100 mt-4 ${styles.btnPrimario}`} 
                >
                    Enviar Solicitud
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;