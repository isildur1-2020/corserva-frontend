import "./app.css";
import Main from "./pages/Main";
import { useState } from "react";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import { APP_PATH } from "./utils/path";
import ProductEdit from "./pages/ProductEdit";
import ProductForm from "./pages/ProductForm";
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
    ],
  },
]);

const App = () => {
  const [state, setState] = useState({ title: "", currentProduct: {} });
  return (
    <MainContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
};

export default App;
