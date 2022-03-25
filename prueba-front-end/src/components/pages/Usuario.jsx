import React from "react";
import service from "../../services/UsuarioService";
import ModalUsuario from "../shared/ModalUsuario";
class Usuario extends React.Component{

    state = {
        usuarios: []
    }
    getUsuarios=()=>{
        service.getAll().then(response => {
            this.setState({
                usuarios: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    };
    handleRemove(usuario, index, e){
        e.preventDefault();
        let opc = window.confirm(
            "¿Está seguro de que desea eliminar el usuario?"
          );
          if (opc) {
            service.remove(usuario.id)
              .then((response) => {
                if (response.data) {
                  alert("Usuario eliminado");
                  this.getUsuarios();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
    };
    componentDidMount(){
        this.getUsuarios();
    };
    render(){
        return <>
        <div className="row">
            <div className="col-md-8">
                <h1>Usuarios</h1>
            </div>
            <div className="col-md-4">
                <div className="btn btn-primary">
                    <ModalUsuario title={"Crear Usuario"} getUsuarios={this.getUsuarios}></ModalUsuario>
                </div>
            </div>
        </div>
        <div className="row">
        <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Apellidos</th>
                  <th>Nombres</th>
                  <th>Identificación</th>
                  <th>Localización</th>
                  <th>Cargo</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.usuarios.map((usuario, index) => (
                  <tr key={index}>
                    <td>{usuario.id}</td>
                    <td>{usuario.apellidos}</td>
                    <td>{usuario.nombres}</td>
                    <td>{usuario.identificacion}</td>
                    <td>{usuario.localizacion.localizacion}</td>
                    <td>{usuario.cargo.cargo}</td>
                    <td>{usuario.estado}</td>
                    <td>
                      <div className="d-grid gap-2">
                        <ModalUsuario
                          title={"Editar Usuario"}
                          usuario={usuario}
                          getUsuarios={this.getUsuarios}
                        />
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => this.handleRemove(usuario, index, e)}
                        >
                          Eliminar usuario
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

    </div></>
    }
}
export default Usuario;