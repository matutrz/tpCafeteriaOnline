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


      {filtro && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            right: "10px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            zIndex: 2000,
            width: "320px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          }}
        >
          {resultados.length > 0 ? (
            resultados.map((p) => (
              <div key={p.id} className="d-flex align-items-center mb-2">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  style={{ width: 50, height: 50, objectFit: "cover", marginRight: 12, borderRadius: 6 }}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>{p.nombre}</div>
                  <div style={{ fontSize: "0.9rem", color: "#555" }}>${p.precio}</div>
                </div>
              </div>
            ))
          ) : (
            <div>No se encontraron productos</div>
          )}
        </div>
      )}
    </Navbar>
  );
}

export default HeaderPagina;