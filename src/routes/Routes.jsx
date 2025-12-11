import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/Home";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutDetails from "../pages/CheckoutDetails";
import OrderComplete from "../pages/OrderComplete";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shop",
        Component: ShopPage,
      },
      {
        path: "product",
        Component: ProductPage,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
      {
        path: "/checkout-details",
        Component: CheckoutDetails,
      },
      {
        path: "/order-complete",
        Component: OrderComplete,
      },
    ],
  },
]);
