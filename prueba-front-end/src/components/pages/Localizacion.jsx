import React from "react";
import service from "../../services/LocalizacionService";
import ModalLocalizacion from "../shared/ModalLocalizacion";
import usuarioService from "../../services/UsuarioService";
class Localizacion extends React.Component {
  state = {
    localizaciones: [],
  };

  getLocalizaciones = () => {
    service
      .getAll()
      .then((response) => {
        this.setState({
          localizaciones: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleRemove(localizacion) {
    usuarioService.usuariosConLocalizacion(localizacion.id).then((response) => {
      if (response.data.length === 0) {
        let opc = window.confirm(
          "¿Está seguro de que desea eliminar la localización ?"
        );
        if (opc) {
          service
            .remove(localizacion.id)
            .then((response) => {
              if (response.data === true) {
                alert("Localización eliminada");
                this.getLocalizaciones();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        alert("No se puede eliminar la localización porque tiene usuarios asociados");
      }}).catch((err)=>{
        console.log(err);
      });
  }
  componentDidMount() {
    this.getLocalizaciones();
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-8">
            <h1>Localizaciones</h1>
          </div>
          <div className="col-md-4">
            <ModalLocalizacion
              title={"Crear Localización"}
              getLocalizaciones={this.getLocalizaciones}
            ></ModalLocalizacion>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Localización</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.localizaciones.map((localizacion, index) => (
                <tr key={index}>
                  <td>{localizacion.id}</td>
                  <td>{localizacion.localizacion}</td>
                  <td>{localizacion.estado}</td>
                  <td>
                    <div className="d-grid gap-2">
                      <ModalLocalizacion
                        title={"Editar Localización"}
                        localizacion={localizacion}
                        getLocalizaciones={this.getLocalizaciones}
                      />
                      <button
                        className="btn btn-secondary"
                        onClick={(e) =>
                          this.handleRemove(localizacion, index, e)
                        }
                      >
                        Eliminar localización
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Localizacion;
