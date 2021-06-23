import { axiosClient } from "./axiosClient";

const CategoryAPI = {
  getAll() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  get(_id) {
    const url = `/category/${_id}`;
    return axiosClient.get(url);
  },
  add(category) {
    const url = `/category`;
    return axiosClient.post(url, category);
  },
  remove(id) {
    console.log(id);
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  },
  update(_id, data) {
    const url = `/category/${_id}`;
    return axiosClient.put(url, data);
  },
};
export default CategoryAPI;
