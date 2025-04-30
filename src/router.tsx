import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import CartPage from "./pages/cart";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import Login from "./pages/Login";
import Register from "./pages/register";
import ProductDetail from "./pages/productDetail";

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
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/ProductDetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
