import "./app.css";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
