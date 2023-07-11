import Page from "./page";
import { memo } from "react";
import { useForm } from "../../hooks/useForm";
import { useSetTitle } from "../../hooks/useSetTitle";
import { useHttpPost } from "../../hooks/useHttpPost";
import { createProduct } from "../../services/products";

const ProductForm = () => {
  useSetTitle("Create Product");
  const initState = {
    name: "",
    price: "",
    stock: "",
  };
  const { state, setState, handleChange } = useForm(initState);
  const { handleSubmit, loading } = useHttpPost({
    setState,
    initState,
    body: state,
    service: createProduct,
  });
  return (
    <Page
      state={state}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default memo(ProductForm);
