import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Layout from "../components/layout";
import CartPage from "../pages/cart";
import ProductsPage from "../pages/products";
import AboutPage from "../pages/about";
import Login from "../pages/Login";
import Register from "../pages/register";
import ProductDetail from "../pages/productDetail";
import CheckoutPage from "../pages/checkout";
import PaymentSucess from "../pages/paymentSucess";
import PaymentCancel from "../pages/paymentCancel";
import MyOrders from "../pages/myOrders";
import Private from "./private";

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
      {
        path: "/checkout",
        element: (
          <Private>
            <CheckoutPage />
          </Private>
        ),
      },
      {
        path: "/success",
        element: <PaymentSucess />,
      },
      {
        path: "/cancel",
        element: <PaymentCancel />,
      },
      {
        path: "/orders",
        element: (
          <Private>
            <MyOrders />
          </Private>
        ),
      },
    ],
  },
]);

export default router;
