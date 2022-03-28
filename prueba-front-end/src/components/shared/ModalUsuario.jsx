import service from "../../services/UsuarioService";
import { Button, Modal } from "react-bootstrap";
import React from "react";
import Functions from "./Functions";
import LocalizacionService from "../../services/LocalizacionService";
import CargoService from "../../services/CargoService";
class ModalUsuario extends React.Component {
  state = {
    show: false,
    usuario: {
      id: this.props.usuario ? this.props.usuario.id : 0,
      nombres: this.props.usuario ? this.props.usuario.nombres : "",
      apellidos: this.props.usuario ? this.props.usuario.apellidos : "",
      identificacion: this.props.usuario
        ? this.props.usuario.identificacion
        : "",
      cargo: this.props.usuario ? this.props.usuario.cargo : {},
      localizacion: this.props.usuario ? this.props.usuario.localizacion : {},
      estado: this.props.usuario ? this.props.usuario.estado : "Activo",
      contrasena: "",
    },
  };
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
    let newusuario = this.state.usuario;
    newusuario[type] = newValue;
    this.setState({ usuario: newusuario });
  }
  handleRadio(e, type) {
    let newusuario = this.state.usuario;
    if (type === "estadoactivo") {
      newusuario["estado"] = "Activo";
    } else {
      newusuario["estado"] = "Inactivo";
    }
    this.setState({ usuario: newusuario });
  }
  handleSelect(e, type) {
    let newusuario = this.state.usuario;
    newusuario[type] = { id: e.target.value };
    this.setState({ usuario: newusuario });
  }
  handleSubmit(e, type, usuario) {
    e.preventDefault();
    let copyUsuario = usuario;
    if (type === "Crear Usuario") {
      let valor = Functions.validateFieldsNoEmpty(copyUsuario);
      if(valor){
        service
        .create(usuario)
        .then((response) => {
          alert("usuario creado");
          this.handleClose();
          this.props.getUsuarios();
          this.setState({
            usuario: {
              id: 0,
              nombres: "",
              apellidos: "",
              identificacion: "",
              cargo: {},
              localizacion: {},
              estado: "Activo",
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });  
      }
      else{
        alert(`Campos inválidos. Tenga en cuenta que debe llenar los campos\n
        Nombres, Apellidos, Identificación, Cargo y Localización`);
      }
    } else if (type === "Editar Usuario") {
      let valor = Functions.validateFieldsNoEmpty(copyUsuario);
      if(valor){
        service
          .update(usuario.id, usuario)
          .then((response) => {
            if (response.data) {
              alert("Usuario actualizado");

              this.props.getUsuarios();
              this.handleClose();
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }
}
  closeModal() {
    if (this.props.title === "Crear usuario") {
      this.setState({
        usuario: {
          id: 0,
          nombres: "",
          apellidos: "",
          identificacion: "",
          cargo: {},
          localizacion: {},
          estado: "Activo",
          contrasena:""
        },
      });
    }
    this.handleClose();
  }
  handleClick(e, type) {
    if (this.props.title === "Crear usuario") {
      e.target.value = "";
      let newValue = e.target.value;
      let newusuario = this.state.usuario;
      newusuario[type] = newValue;
      this.setState({ usuario: newusuario });
    }
  }
  getCargos = () => {
    CargoService.getAll()
      .then((response) => {
        this.setState({ cargos: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getLocalizaciones = () => {
    LocalizacionService.getAll()
      .then((response) => {
        this.setState({ localizaciones: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getCargos();

    this.getLocalizaciones();
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.title}
        </Button>

        <Modal
          show={this.state.show}
          onHide={(e) => {
            this.closeModal(e);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              id="login-form"
              className="form row g-2"
              action=""
              method="post"
            >
              <div className="col-md-6">
                <label htmlFor="identificacion" className="p3">
                  Identificacion
                </label>
                <input
                  type="number"
                  name="identificacion"
                  id="identificacion"
                  className="form-control"
                  value={this.state.usuario.identificacion}
                  onChange={(e) => this.handleInput(e, "identificacion")}
                  onClick={(e) => this.handleClick(e, "identificacion")}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="nombres" className="p3">
                  Nombres
                </label>
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  className="form-control"
                  value={this.state.usuario.nombres}
                  onChange={(e) => this.handleInput(e, "nombres")}
                  onClick={(e) => this.handleClick(e, "nombres")}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="apellidos" className="p3">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  className="form-control"
                  value={this.state.usuario.apellidos}
                  onChange={(e) => this.handleInput(e, "apellidos")}
                  onClick={(e) => this.handleClick(e, "apellidos")}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="select" className="p3">
                  Cargo
                </label>
                <select
                  id="cargo"
                  className="form-select"
                  name="cargo"
                  onChange={(e) => {
                    this.handleSelect(e, "cargo");
                  }}
                  defaultValue={
                    this.state.usuario.cargo ? this.state.usuario.cargo.id : 0
                  }
                >
                  <option value="0">Seleccione un cargo</option>
                  {this.state.cargos
                    ? this.state.cargos.map((cargo, index) => (
                        <option key={index} value={cargo.id}>
                          {cargo.cargo}
                        </option>
                      ))
                    : "No hay cargos"}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="select" className="p3">
                  Localización
                </label>
                <select
                  id="localizacion"
                  className="form-select"
                  name="localizacion"
                  onChange={(e) => {
                    this.handleSelect(e, "localizacion");
                  }}
                  defaultValue={
                    this.state.usuario.localizacion
                      ? this.state.usuario.localizacion.id
                      : 0
                  }
                >
                  <option value="0">Seleccione una localización</option>
                  {this.state.localizaciones
                    ? this.state.localizaciones.map((localizacion, index) => (
                        <option key={index} value={localizacion.id}>
                          {localizacion.localizacion}
                        </option>
                      ))
                    : "No hay localizaciones"}
                </select>
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
                    defaultChecked={
                      this.state.usuario.estado === "Activo" ? true : false
                    }
                    onChange={(e) => this.handleRadio(e, "estadoactivo")}
                  />
                  <label className="form-check-label" htmlFor="radioEstadoSi">
                    Activo
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioEstado"
                    id="radioEstadoNo"
                    defaultChecked={
                      this.state.usuario.estado === "Inactivo" ? true : false
                    }
                    onChange={(e) => this.handleRadio(e, "estadoinactivo")}
                  />
                  <label className="form-check-label" htmlFor="radioEstadoNo">
                    Inactivo
                  </label>
                </div>
                
              </div>
              <div className="col-md-12">
                <label htmlFor="contrasena" className="p1">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="contrasena"
                  id="contrasena"
                  className="form-control"
                  value={this.state.usuario.contrasena}
                  onChange={(e) => this.handleInput(e, "contrasena")}
                  onClick={(e) => this.handleClick(e, "contrasena")}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => {
                this.closeModal(e);
              }}
            >
              Cerrar
            </Button>
            <Button
              variant="primary"
              onClick={(e) =>
                this.handleSubmit(e, this.props.title, this.state.usuario)
              }
            >
              {this.props.title}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalUsuario;
