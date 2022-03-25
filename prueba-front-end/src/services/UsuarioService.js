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

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove
};
export default exportedObject;
