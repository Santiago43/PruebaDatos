import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import Functions from "../shared/Functions";
import service from "../../services/UsuarioService";
class Index extends React.Component {
  state={
    usuario:{
        identificacion:"",
        contrasena:""
    }
  }
  handleInput(e, type) {
    let newValue = e.target.value;
    if (Functions.isNumeric(newValue)) {
      if (newValue.startsWith("0")) {
        newValue = newValue.substring(1);
      }
      newValue = parseFloat(newValue);
    }
    let newusuario = this.state.usuario;
    newusuario[type] = newValue;
    this.setState({ usuario: newusuario });
  }
  handleSubmit(e, usuario) {
    e.preventDefault();
      service
        .login(usuario.identificacion, usuario.contrasena)
        .then((response) => {
          if(response.data){
            let usuarioLogged = response.data;
            sessionStorage.setItem("user", JSON.stringify(usuarioLogged));
            this.setState({
              usuario: {
                identificacion: "",
                contrasena: ""
              },
            });
            alert("¡Bienvenido! " + usuarioLogged.nombres);
            window.location.href = "/Cargos";
          }
        })
        .catch((err) => {
          console.log(err);
        });
     
  }
  render(){
    return (
      <div>
        <div className="row">
          <h1>Página principal</h1>
          <p>
            Por favor, para interactuar con la herramienta, seleccione alguna de
            las opciones en el menú superior
          </p>
        </div>
        <div className="row">
          <div className="col-md-3">
  
          </div>
          <div className="col-md-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Identificación</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su identificación" value={this.state.usuario.identificacion} onChange={(e)=>{this.handleInput(e,"identificacion")}}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" value={this.state.usuario.contrasena} onChange={(e)=>{this.handleInput(e,"contrasena")}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>{this.handleSubmit(e,this.state.usuario)}}>
              Ingresar al sistema
            </Button>
          </Form>
          </div>
          <div className="col-md-3">
  
  
          </div>
        </div>
      </div>
    );
  } 
}

export default Index;
