import Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
function Navegador(){
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Datos empresa</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Navegador;