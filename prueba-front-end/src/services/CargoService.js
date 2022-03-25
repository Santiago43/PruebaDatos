import http from "./http-config";
// var module = "cargo";
const getAll = () => {
  return http.get(`/cargo`);
};

const get = (id) => {
  return http.get(`/cargo/${id}`);
};

const create = (data) => {
  return http.post(`/cargo`, data);
};

const update = (id,data) => {
  return http.put(`/cargo/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/cargo/${id}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove
};
export default exportedObject;
