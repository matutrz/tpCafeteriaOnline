import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary m-0 p-0">
            <Container fluid className="p-0 ms-2">
                <Navbar.Brand href="#home">Cafeteria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Carta</Nav.Link>
                        <Nav.Link href="#link">Tu pedido</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> Inicio </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> Carta </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> Carrito</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4"> Contactanos </NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;