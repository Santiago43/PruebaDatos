import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container  from 'react-bootstrap/Container';
function Navegador(){
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Datos empresa</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          <Nav.Link href="/Cargos"> Cargos</Nav.Link>
          <Nav.Link href="/Localizacion">Localizaciones</Nav.Link>
          <Nav.Link href="/Usuario">Usuarios</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Detalles</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Acerca de...
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Navegador;