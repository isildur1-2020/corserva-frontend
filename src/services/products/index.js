import axios from "../../axios";
import { BACK_PATH } from "../../utils/path";

export const createProduct = (data) => axios.post(BACK_PATH.products, data);

export const getAllProducts = (url) =>
  axios.get(url).then(({ data }) => data.data);

export const updateProduct = (id, body) =>
  axios.patch(`${BACK_PATH.products}/${id}`, body);

export const deleteProduct = (id) =>
  axios.delete(`${BACK_PATH.products}/${id}`);
