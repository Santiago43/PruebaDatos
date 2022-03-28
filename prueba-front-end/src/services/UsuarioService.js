import http from "./http-config";
// var module = "usuario";
const getAll = () => {
  return http.get(`/usuario`);
};

const get = (id) => {
  return http.get(`/usuario/${id}`);
};

const create = (data) => {
  return http.post(`/usuario`, data);
};

const update = (id,data) => {
  return http.put(`/usuario/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/usuario/${id}`);
};

const login =(identificacion,password)=>{
  return http.post(`/usuario/login`,{identificacion:identificacion,contrasena:password});
}

const usuariosConCargo = (cargoId) => {
  return http.get(`/usuario/cargo/${cargoId}`);
}
const usuariosConLocalizacion = (localizacionId)=>{
  return http.get(`/usuario/localizacion/${localizacionId}`);
}
const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  login,
  usuariosConCargo,
  usuariosConLocalizacion
};
export default exportedObject;
