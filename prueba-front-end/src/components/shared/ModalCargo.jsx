import React from "react";
import Functions from "./Functions";
import service from "../../services/CargoService";
import { Button, Modal } from "react-bootstrap";
class ModalCargo extends React.Component{

    state={
        show:false,
        cargo:{
            id:this.props.cargo?this.props.cargo.id:undefined,
            cargo:this.props.cargo?this.props.cargo.cargo:"",
            estado:this.props.cargo?this.props.cargo.estado:"Activo"
        }
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });


    handleInput(e, type) {
        let newValue = e.target.value;
        if (Functions.isNumeric(newValue)) {
          if (newValue.startsWith("0")) {
            newValue = newValue.substring(1);
          }
          newValue = parseFloat(newValue);
        }
        let newcargo = this.state.cargo;
        newcargo[type] = newValue;
        this.setState({ cargo: newcargo });
      }
      handleRadio(e, type) {
        let newcargo = this.state.cargo;
        if (type === "estadoactivo") {
          newcargo["estado"] = "Activo";
        } else {
          newcargo["estado"] = "Inactivo";
        }
        this.setState({ cargo: newcargo });
      }
      handleSubmit(e, type, cargo) {
        e.preventDefault();
        let copyCargo = cargo;
        delete copyCargo.estado;
        let valor = Functions.validateFieldsNoEmpty(copyCargo);
        if(valor){
          if (type === "Crear Cargo") {
            service.create(cargo)
              .then((response) => {
                alert("Cargo creado");
                this.handleClose();
                this.props.getCargos();
                this.setState({
                  cargo:{
                      id:0,
                      cargo:"",
                      estado:""
                  },
                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (type === "Editar Cargo") {
            service.update(cargo.id,cargo)
              .then((response) => {
                alert("Cargo actualizado");
      
                this.props.getCargos();
                this.handleClose();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }else{
          alert("Campos inválidos. Tenga en cuenta que debe llenar el campo de cargo");
        }
        
      }
      closeModal() {
        if (this.props.title === "Crear Cargo") {
          this.setState({
            cargo:{
                id:0,
                cargo:"",
                estado:""
            },
          });
          
        }
        this.handleClose();
      }
      handleClick(e, type) {
        if (this.props.title === "Crear Cargo") {
          e.target.value = "";
          let newValue = e.target.value;
          let newcargo = this.state.cargo;
          newcargo[type] = newValue;
          this.setState({ cargo: newcargo });
        }
      }
    render() {
        return <>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.title}
        </Button>

        <Modal show={this.state.show} onHide={(e)=>{this.closeModal(e)}}>
          <Modal.Header closeButton>
            <Modal.Title>Cargo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              id="login-form"
              className="form row g-2"
              action=""
              method="post"
            >
              <div className="col-md-6">
                <label htmlFor="cargo" className="p3">
                    Cargo
                </label>
                <input
                  type="text"
                  name="cargo"
                  id="cargo"
                  className="form-control"
                  value={this.state.cargo.cargo}
                  onChange={(e) => this.handleInput(e, "cargo")}
                  onClick={(e) => this.handleClick(e, "cargo")}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="p3">
                  Estado:
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioEstado"
                    id="radioEstadoSi"
                    defaultChecked={this.state.cargo.estado === "Activo" ? true : false}
                    onChange={(e) => this.handleRadio(e, "estadoactivo")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="radioEstadoSi"
                  >
                    Activo
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioEstado"
                    id="radioEstadoNo"
                    defaultChecked={this.state.cargo.estado === "Inactivo" ? true : false}
                    onChange={(e) => this.handleRadio(e, "estadoinactivo")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="radioEstadoNo"
                  >
                    Inactivo
                  </label>
                </div>
              </div>
              
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e)=>{this.closeModal(e)}}>
              Cerrar
            </Button>
            <Button
              variant="primary"
              onClick={(e) =>
                this.handleSubmit(e, this.props.title, this.state.cargo)
              }
            >
              {this.props.title}
            </Button>
          </Modal.Footer>
        </Modal>
      </>;
    }
    
}

export default ModalCargo;