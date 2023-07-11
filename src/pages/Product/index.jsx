import useSWR from "swr";
import Page from "./page";
import { memo, useContext } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import { useSetTitle } from "../../hooks/useSetTitle";
import { APP_PATH, BACK_PATH } from "../../utils/path";
import { MainContext } from "../../context/MainContext";
import { deleteProduct } from "../../services/products";
import { getAllProducts } from "../../services/products";
import { useHttpDelete } from "../../hooks/useHttpDelete";

const Product = () => {
  useSetTitle("Products");
  const { state, setState } = useContext(MainContext);
  const { deleteEntity } = useHttpDelete(deleteProduct);
  const { data, isLoading, mutate } = useSWR(
    BACK_PATH.products,
    getAllProducts
  );
  const { handleRedirect } = useRedirect();
  const handleEditClick = (row) => {
    setState({ ...state, currentProduct: row });
    handleRedirect(APP_PATH.editProduct);
  };
  const handleDeleteClick = async (id) => {
    await deleteEntity(id);
    mutate();
  };
  return (
    <Page
      data={data ?? []}
      isLoading={isLoading}
      handleRedirect={handleRedirect}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default memo(Product);
