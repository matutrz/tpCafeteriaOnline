import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buscador from "./Buscador";

function HeaderPagina({ agregarProducto }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-0 p-0" style={{ position: "relative" }}>
      <Container fluid className="px-3 d-flex align-items-center">
        <a className="navbar-brand me-2" href="/">
          <img src="/icon.png" alt="logo" width="48" height="48" />
        </a>
        <Navbar.Brand className="me-4" href="#home">
          Cafetería Luna
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Carta">Carta</Nav.Link>
            <Nav.Link href="/Carrito">Tu pedido</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>
          
            <Buscador agregarProducto={agregarProducto} />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderPagina;