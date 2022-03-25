import React from "react";
import service from "../../services/CargoService";
import ModalCargo from "../shared/ModalCargo";
class Cargos extends React.Component{
    state = {
        cargos: []
    };
    getCargos=()=>{
        service.getAll().then(response => {
            this.setState({
                cargos: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    };
    handleRemove(cargo, index, e){
        e.preventDefault();
        let opc = window.confirm(
            "¿Está seguro de que desea eliminar el cargo?"
          );
          if (opc) {
            service.remove(cargo.id)
              .then((response) => {
                if (response.status === 204) {
                  alert("Cargo eliminado");
                  this.getCargos();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
    };
    componentDidMount(){
        this.getCargos();
    };
    render(){
        return<>
        <div className="row">
            <div className="col-md-8">
                <h1>Cargos</h1>
            </div>
            <div className="col-md-4">
                <div className="btn btn-primary">
                    <ModalCargo title={"Crear Cargo"} getCargos={this.getCargos}></ModalCargo>
                </div>
            </div>
        </div>
        <div className="row">
        <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cargo</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cargos.map((cargo, index) => (
                  <tr key={index}>
                    <td>{cargo.id}</td>
                    <td>{cargo.cargo}</td>
                    <td>{cargo.estado}</td>
                    <td>
                      <div className="d-grid gap-2">
                        <ModalCargo
                          title={"Editar Cargo"}
                          getCargos={this.getCargos}
                          cargo={cargo}
                        />
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => this.handleRemove(cargo, index, e)}
                        >
                          Eliminar cargo
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

    </div></>;
    }
}


export default Cargos;