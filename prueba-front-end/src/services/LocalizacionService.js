import http from "./http-config";
// var module = "localizacion";
const getAll = () => {
  return http.get(`/localizacion`);
};

const get = (id) => {
  return http.get(`/localizacion/${id}`);
};

const create = (data) => {
  return http.post(`/localizacion`, data);
};

const update = (id,data) => {
  return http.put(`/localizacion/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/localizacion/${id}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove
};
export default exportedObject;
