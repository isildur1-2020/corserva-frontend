import useSWR from "swr";
import Page from "./page";
import { BACK_PATH } from "../../utils/path";
import { useForm } from "../../hooks/useForm";
import { memo, useEffect, useState } from "react";
import { useSetTitle } from "../../hooks/useSetTitle";
import { useHttpPost } from "../../hooks/useHttpPost";
import { getAllProducts } from "../../services/products";
import { createOrderSale } from "../../services/orderSales";

const ProductForm = () => {
  useSetTitle("Create Order");
  const { data: dataProducts } = useSWR(BACK_PATH.products, getAllProducts);
  const [productsByName, setProductsByName] = useState({});
  const statusOptions = [
    { value: "CANCELED" },
    { value: "PENDING" },
    { value: "COMPLETED" },
  ];
  const initState = {
    status: "PENDING",
    trackingInfo: "",
    productSelected: 0,
    products: [],
    submitDisabled: true,
  };
  const productInitState = {
    quantity: "",
    discount: 20,
    addDisabled: true,
  };
  const { state, setState, handleChange } = useForm(initState);
  const {
    state: productState,
    setState: setProductState,
    handleChange: handleProductChange,
  } = useForm(productInitState);
  const { handleSubmit, loading } = useHttpPost({
    setState,
    initState,
    body: {
      status: state.status,
      trackingInfo: state.trackingInfo,
      products: state.products,
    },
    service: createOrderSale,
  });
  const handleAddProduct = () => {
    const { quantity, discount } = productState;
    const { productSelected, products } = state;
    const isExists = products.some(
      ({ productId }) => productId === productSelected
    );
    if (isExists) return;
    setState({
      ...state,
      productSelected: 0,
      products: [
        ...products,
        { productId: productSelected, quantity, discount },
      ],
    });
    setProductState(productInitState);
  };
  const handleDeleteProduct = (productId) => {
    const { products } = state;
    const newProducts = products.filter((item) => item.productId !== productId);
    setState({
      ...state,
      products: newProducts,
    });
  };
  useEffect(() => {
    const { trackingInfo, products } = state;
    if (!trackingInfo || !products.length) {
      return setState({
        ...state,
        submitDisabled: true,
      });
    }
    setState({
      ...state,
      submitDisabled: false,
    });
  }, [state]);
  useEffect(() => {
    const { quantity, discount } = productState;
    if (quantity < 1 || !discount) {
      return setProductState({ ...productState, addDisabled: true });
    }
    setProductState({ ...productState, addDisabled: false });
  }, [productState]);
  useEffect(() => {
    if (!dataProducts) return;
    const indexProducts = dataProducts.reduce((prev, curr) => {
      const { id, name } = curr;
      return {
        ...prev,
        [id]: name,
      };
    }, {});
    setProductsByName(indexProducts);
  }, [dataProducts]);
  return (
    <Page
      state={state}
      loading={loading}
      productState={productState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      statusOptions={statusOptions}
      productsByName={productsByName}
      dataProducts={dataProducts ?? []}
      handleAddProduct={handleAddProduct}
      handleDeleteProduct={handleDeleteProduct}
      handleProductChange={handleProductChange}
    />
  );
};

export default memo(ProductForm);
