import { axiosClient } from "./axiosClient.js";

const userAPI = {
  login(email, password) {
    const url = `/signin?email=${email}&password=${password}`;
    return axiosClient.get(url);
  },
  add(user) {
    const url = `api/signup`;
    return axiosClient.post(url, user);
  },
  signin(user) {
    const url = `api/signin`;
    return axiosClient.post(url, user);
  },
};

export default userAPI;
