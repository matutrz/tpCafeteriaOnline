import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Buscador from "./buscador";        
import productos from "../data/fakeBackend"; 

function HeaderPagina() {
  const [filtro, setFiltro] = useState("");

  const handleFiltrar = (texto) => {
    setFiltro(texto);
  };

  const resultados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.trim().toLowerCase())
  );

  return (
    <Navbar expand="lg" className="bg-body-tertiary m-0 p-0" style={{ position: "relative" }}>

      <div className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/icon.png" alt="logo" width="48" height="48" />
          </a>
        </div>
      </div>

      <Container fluid className="p-0 ms-2">
        <Navbar.Brand href="#home">Cafetería Luna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Carta">Carta</Nav.Link>
            <Nav.Link href="/Carrito">Tu pedido</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Inicio"> Inicio </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Carta"> Carta </NavDropdown.Item>
              <NavDropdown.Item href="/Carrito"> Carrito</NavDropdown.Item>
              <NavDropdown.Item href="/Contacto"> Contactanos </NavDropdown.Item>
            </NavDropdown>
          </Nav>


          <Buscador onFiltrar={handleFiltrar} />
        </Navbar.Collapse>
      </Container>


      <div className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/Carrito">
            <img src="/carrito.png" alt="carrito" width="48" height="48" />
          </a>
        </div>
      </div>

    </Navbar>
  );
}

export default HeaderPagina;