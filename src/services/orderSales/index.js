import axios from "../../axios";
import { BACK_PATH } from "../../utils/path";

export const getAllOrderSales = (url) =>
  axios.get(url).then(({ data }) => data.data);

export const createOrderSale = (data) => axios.post(BACK_PATH.orderSales, data);

export const updateOrderSale = (id, body) =>
  axios.patch(`${BACK_PATH.orderSales}/${id}`, body);

export const deleteOrderSale = (id) =>
  axios.delete(`${BACK_PATH.orderSales}/${id}`);
