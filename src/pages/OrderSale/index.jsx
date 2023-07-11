import useSWR from "swr";
import Page from "./page";
import { memo, useContext } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import { useSetTitle } from "../../hooks/useSetTitle";
import { APP_PATH, BACK_PATH } from "../../utils/path";
import { MainContext } from "../../context/MainContext";
import { useHttpDelete } from "../../hooks/useHttpDelete";
import { deleteOrderSale } from "../../services/orderSales";
import { getAllOrderSales } from "../../services/orderSales";

const OrderSale = () => {
  useSetTitle("Order Sales");
  const { state, setState } = useContext(MainContext);
  const { deleteEntity } = useHttpDelete(deleteOrderSale);
  const { data, isLoading, mutate } = useSWR(
    BACK_PATH.orderSales,
    getAllOrderSales
  );
  const { handleRedirect } = useRedirect();
  const handleEditClick = (row) => {
    setState({ ...state, currentOrderSale: row });
    handleRedirect(APP_PATH.orderSaleEdit);
  };
  const handleDeleteClick = async (id) => {
    await deleteEntity(id);
    mutate();
  };
  const handleInfoClick = (row) => {
    setState({ ...state, currentOrderSale: row });
    handleRedirect(APP_PATH.orderSaleInfo);
  };
  return (
    <Page
      data={data ?? []}
      isLoading={isLoading}
      handleRedirect={handleRedirect}
      handleEditClick={handleEditClick}
      handleInfoClick={handleInfoClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default memo(OrderSale);
