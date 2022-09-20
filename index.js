import React from "react";
import ReactDom from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./src/App";
import Cart from "./src/pages/Cart";
import Product from "./src/pages/Product";
import ProductList from "./src/pages/ProductList";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import store from "./src/redux/store";
import SuccessPayment from "./src/pages/SuccessPayment";
import FailedPayment from "./src/pages/FailedPayment";

const routes = [
  { path: "/", element: <App /> },
  { path: "/products/:category", element: <ProductList /> },
  { path: "/product/:productId", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/payment/sucess", element: <SuccessPayment /> },
  { path: "/payment/failed", element: <FailedPayment /> },
];

const router = createBrowserRouter(routes);

ReactDom.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);
