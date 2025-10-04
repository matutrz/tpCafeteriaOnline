import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary m-0 p-0">
            <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                <img src="/icon.png" alt="Bootstrap" width="48px" height="48px"img/>
                </a>
            </div>
            </nav>
            <Container fluid className="p-0 ms-2">
                <Navbar.Brand href="#home">Cafetería Luna</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Carta">Carta</Nav.Link>
                        <Nav.Link href="/Carrito">Tu pedido</Nav.Link>
                        <Nav.Link href="/Contacto">Contacto</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Inicio"> Inicio </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Carta"> Carta </NavDropdown.Item>
                            <NavDropdown.Item href="/Carrito"> Carrito</NavDropdown.Item>
                            <NavDropdown.Item href="/Contacto"> Contactanos </NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                <img src="/carrito.png" alt="Bootstrap" width="48px" height="48px"img/>
                </a>
            </div>
            </nav>
        </Navbar>
    );
}

export default Header;