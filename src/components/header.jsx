import "./header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container className="nav">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
             <a class="navbar-brand" href="#">Cafetería Luna</a>
          </Navbar.Brand>
          <Navbar.Brand href="#cart">
            <img
              alt=""
              src="/carrito-de-compras.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;