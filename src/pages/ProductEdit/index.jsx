import Page from "./page";
import { memo, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { useSetTitle } from "../../hooks/useSetTitle";
import { MainContext } from "../../context/MainContext";
import { useHttpPatch } from "../../hooks/useHttpPatch";
import { updateProduct } from "../../services/products";

const ProductEdit = () => {
  useSetTitle("Create Product");
  const { state: mainState } = useContext(MainContext);
  const { currentProduct } = mainState;
  const { state, handleChange } = useForm(currentProduct);
  const { loading, updateEntity } = useHttpPatch(updateProduct);
  const handleSubmit = updateEntity(currentProduct.id, state);
  return (
    <Page
      state={state}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default memo(ProductEdit);
