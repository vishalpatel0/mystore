import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./template/Template.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        loader: async () => {
          // call API
          try {
            const res = await fetch("https://fakestoreapi.com/products/");
            const resData = await res.json();
            return resData;
          } catch (error) {
            console.log(error);
          }
          // error handaling
          return [];
        },
        element: <Products />,
      },
      {
        path: "product/:product_id",
        element: <Product />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
