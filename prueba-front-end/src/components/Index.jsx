import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container  from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Index() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Datos empresa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link > Cargos</Nav.Link>
        <Nav.Link href="#pricing">Localizaciones</Nav.Link>
        <Nav.Link href="#deets">Usuarios</Nav.Link>
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
      <div className="container-fluid">
      
        
      </div>
    </>
  );
}

export default Index;
