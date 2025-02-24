import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import CartPage from "./pages/cart";
import ProductsPage from "./pages/products";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
