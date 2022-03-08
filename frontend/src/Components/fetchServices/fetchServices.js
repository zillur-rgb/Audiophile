import axios from "axios";

const baseUrl = "http://localhost:3003/api/persons";

const getAll = () => axios.get(baseUrl);

const create = (newObject) => axios.post(baseUrl, newObject);

const update = (id, changedNum) => {
  axios.put(`${baseUrl}/${id}`, changedNum);
};

const deleteData = (id) => axios.delete(`${baseUrl}/${id}`);

export default {
  getAll,
  create,
  update,
  deleteData,
};
