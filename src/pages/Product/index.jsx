import Page from "./page";
import { memo } from "react";
import useSWR from "swr";
import { BACK_PATH } from "../../utils/path";
import { useRedirect } from "../../hooks/useRedirect";
import { useSetTitle } from "../../hooks/useSetTitle";
import { deleteProduct } from "../../services/products";
import { getAllProducts } from "../../services/products";
import { useHttpDelete } from "../../hooks/useHttpDelete";

const Product = () => {
  useSetTitle("Products");
  const { deleteEntity } = useHttpDelete(deleteProduct);
  const { data, isLoading, mutate } = useSWR(
    BACK_PATH.products,
    getAllProducts
  );
  const { handleRedirect } = useRedirect();
  const handleEditClick = () => {};
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
