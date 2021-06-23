import { axiosClient } from "./axiosClient";
const BlogAPI = {
  getAll() {
    const url = `/blog`;
    return axiosClient.get(url);
  },
  get(_id) {
    const url = `blog/${_id}`;
    return axiosClient.get(url);
  },
};
export default BlogAPI;
