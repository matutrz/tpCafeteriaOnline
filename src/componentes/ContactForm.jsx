import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

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
    
    setEnviado(true);
    
    setDatosFormulario({
      nombre: '',
      email: '',
      fecha: '',
      hora: '',
      mensaje: ''
    });
  };
  
  return (
    <Container className="my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Reservas y Contacto</h2>

      {/* Muestra el mensaje de confirmación */}
      {enviado && (
        <Alert variant="success" className="mb-4">
          ¡Tu mensaje/reserva ha sido enviado con éxito! Nos contactaremos pronto.
        </Alert>
      )}

      {/* Muestra el mensaje de error de validación */}
      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      <Form onSubmit={manejarEnvio}>
        
        {/* Campo: Nombre */}
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre (*)</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={datosFormulario.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre completo"
            required
          />
        </Form.Group>

        {/* Campo: Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email (*)</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={datosFormulario.email}
            onChange={manejarCambio}
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </Form.Group>

        {/* Campo: Fecha de la Reserva */}
        <Form.Group className="mb-3" controlId="formFecha">
          <Form.Label>Fecha de la Reserva (*)</Form.Label>
          <Form.Control
            type="date"
            name="fecha"
            value={datosFormulario.fecha}
            onChange={manejarCambio}
            required
          />
        </Form.Group>

        {/* Campo: Hora de la Reserva */}
        <Form.Group className="mb-3" controlId="formHora">
          <Form.Label>Hora de la Reserva (*)</Form.Label>
          <Form.Control
            type="time"
            name="hora"
            value={datosFormulario.hora}
            onChange={manejarCambio}
            required
          />
        </Form.Group>

        {/* Campo: Mensaje / Detalles de la Reserva */}
        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje / Detalles</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="mensaje"
            value={datosFormulario.mensaje}
            onChange={manejarCambio}
            placeholder="Ej: Mesa para 4 personas a las 10:00 AM."
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-4">
          Enviar Solicitud
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;