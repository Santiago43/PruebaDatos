import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container  from 'react-bootstrap/Container';
import React from 'react';
class Navegador extends React.Component{
    state={
      user:{}
    }
    componentDidMount(){
      this.setState({user:JSON.parse(sessionStorage.getItem("user"))});
    }
    render(){
      return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Datos empresa</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          <Nav.Link href="/Cargos"> Cargos</Nav.Link>
          <Nav.Link href="/Localizacion">Localizaciones</Nav.Link>
          <Nav.Link href="/Usuario">Usuarios</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link eventKey={2} href="#profile">
          {this.state.user.nombres}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    }
    
}

export default Navegador;