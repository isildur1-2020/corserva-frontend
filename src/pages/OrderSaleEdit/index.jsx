import Page from "./page";
import { memo, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { useSetTitle } from "../../hooks/useSetTitle";
import { MainContext } from "../../context/MainContext";
import { useHttpPatch } from "../../hooks/useHttpPatch";
import { updateOrderSale } from "../../services/orderSales";

const ProductForm = () => {
  useSetTitle("Edit Order Sale");
  const { state: mainState } = useContext(MainContext);
  const { currentOrderSale } = mainState;
  const { status, trackingInfo } = currentOrderSale;
  const statusOptions = [
    { value: "CANCELED" },
    { value: "PENDING" },
    { value: "COMPLETED" },
  ];
  const { state, handleChange } = useForm(currentOrderSale);
  const { updateEntity, loading } = useHttpPatch(updateOrderSale);
  const handleSubmit = updateEntity(currentOrderSale.id, {
    status: state.status,
    trackingInfo: state.trackingInfo,
  });
  return (
    <Page
      state={state}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      statusOptions={statusOptions}
    />
  );
};

export default memo(ProductForm);
