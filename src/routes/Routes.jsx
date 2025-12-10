import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ShopPage from "../pages/ShopPage";

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
        Component: Product,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
    ],
  },
]);
