import { axiosClient } from "./axiosClient";
import { isAuthenticate } from "../auth";

const { user, token } = isAuthenticate();
const ProductAPI = {
  getAll(params) {
    const url = `/product`;
    return axiosClient.get(url, { params });
  },
  get(_id) {
    const url = `/product/${_id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/product/create/${user._id}`;
    return axiosClient.post(url, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  remove(id) {
    const url = `/product/${id}/${user._id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  update(data, _id) {
    console.log();
    const url = `/product/${_id}/${user._id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  getHome(page, limit) {
    const url = `/product?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
  getDetailProduct(params) {
    const url = "/product";
    return axiosClient.get(url, { params });
  },
  search(inp) {
    const url = `/products?q=${inp}`;
    return axiosClient.get(url);
  },
  readPhoto(idProduct) {
    const url = `/product/photo/${idProduct}`;
    return axiosClient.get(url);
  },
};
export default ProductAPI;
