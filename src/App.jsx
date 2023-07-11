import "./app.css";
import Main from "./pages/Main";
import { useState } from "react";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import { APP_PATH } from "./utils/path";
import OrderSale from "./pages/OrderSale";
import ProductEdit from "./pages/ProductEdit";
import ProductForm from "./pages/ProductForm";
import OrderSaleEdit from "./pages/OrderSaleEdit";
import OrderSaleInfo from "./pages/OrderSaleInfo";
import OrderSaleForm from "./pages/OrderSaleForm";
import { MainContext } from "./context/MainContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: APP_PATH.root,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: APP_PATH.products,
        element: <Product />,
      },
      {
        path: APP_PATH.createProduct,
        element: <ProductForm />,
      },
      {
        path: APP_PATH.editProduct,
        element: <ProductEdit />,
      },
      {
        path: APP_PATH.orderSales,
        element: <OrderSale />,
      },
      {
        path: APP_PATH.createOrderSale,
        element: <OrderSaleForm />,
      },
      {
        path: APP_PATH.orderSaleInfo,
        element: <OrderSaleInfo />,
      },
      {
        path: APP_PATH.orderSaleEdit,
        element: <OrderSaleEdit />,
      },
    ],
  },
]);

const App = () => {
  const [state, setState] = useState({
    title: "",
    currentProduct: {},
    currentOrderSale: {},
  });
  return (
    <MainContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
};

export default App;
