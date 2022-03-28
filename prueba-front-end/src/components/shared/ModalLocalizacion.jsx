import service from "../../services/LocalizacionService";
import { Button, Modal } from "react-bootstrap";
import React from "react";
import Functions from "./Functions";

class ModalLocalizacion extends React.Component {
  
    state={
        show:false,
        localizacion:{
            id:this.props.localizacion?this.props.localizacion.id:undefined,
            localizacion:this.props.localizacion?this.props.localizacion.localizacion:"",
            estado:this.props.localizacion?this.props.localizacion.estado:"Activo"
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
        let newLocalizacion = this.state.localizacion;
        newLocalizacion[type] = newValue;
        this.setState({ localizacion: newLocalizacion });
      }
      handleRadio(e, type) {
        let newLocalizacion = this.state.localizacion;
        if (type === "estadoactivo") {
          newLocalizacion["estado"] = "Activo";
        } else {
          newLocalizacion["estado"] = "Inactivo";
        }
        this.setState({ localizacion: newLocalizacion });
      }
      handleSubmit(e, type, localizacion) {
        e.preventDefault();
        let copyLocalizacion = localizacion;
        let valor= Functions.validateFieldsNoEmpty(copyLocalizacion);
        if (valor) {
          if (type === "Crear Localización") {
            service.create(localizacion)
              .then((response) => {
                alert("Localización creada");
                this.handleClose();
                this.props.getLocalizaciones();
                this.setState({
                  localizacion:{
                      id:0,
                      localizacion:"",
                      estado:"Activo"
                  },
                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (type === "Editar Localización") {
            service.update(localizacion.id,localizacion)
              .then((response) => {
                alert("Localización actualizada");
      
                this.props.getLocalizaciones();
                this.handleClose();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
          else{
            alert(`Campos inválidos. Tenga en cuenta que debe llenar el campo de localización\n`);
          }
      }
      closeModal() {
        if (this.props.title === "Crear Localización") {
          this.setState({
            localizacion:{
                id:0,
                localizacion:"",
                estado:""
            },
          });
          
        }
        this.handleClose();
      }
      handleClick(e, type) {
        if (this.props.title === "Crear Localizacion") {
          e.target.value = "";
          let newValue = e.target.value;
          let newLocalizacion = this.state.localizacion;
          newLocalizacion[type] = newValue;
          this.setState({ localizacion: newLocalizacion });
        }
      }
    render() {
        return <>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.title}
        </Button>

        <Modal show={this.state.show} onHide={(e)=>{this.closeModal(e)}}>
          <Modal.Header closeButton>
            <Modal.Title>Localización</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              id="login-form"
              className="form row g-2"
              action=""
              method="post"
            >
              <div className="col-md-6">
                <label htmlFor="localizacion" className="p3">
                    Localización
                </label>
                <input
                  type="text"
                  name="localizacion"
                  id="localizacion"
                  className="form-control"
                  value={this.state.localizacion.localizacion}
                  onChange={(e) => this.handleInput(e, "localizacion")}
                  onClick={(e) => this.handleClick(e, "localizacion")}
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
                    defaultChecked={this.state.localizacion.estado === "Activo" ? true : false}
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
                    defaultChecked={this.state.localizacion.estado === "Inactivo" ? true : false}
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
                this.handleSubmit(e, this.props.title, this.state.localizacion)
              }
            >
              {this.props.title}
            </Button>
          </Modal.Footer>
        </Modal>
      </>;
    }
}
export default ModalLocalizacion;
