import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./providers/layout/layout";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import CreateAccout from "../pages/create-account/create-accout";
import Sign from "../pages/sign-up/sign-up";
import NotFound from "../pages/not-found/not-found";
import Account from "../pages/account/account";
import Cart from "../pages/cart/cart";
import { Provider } from "react-redux";
import { Store } from "./store/store";
import Products from "../pages/products/products";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/log-in" element={<Sign />} />
          <Route path="/sign-up" element={<CreateAccout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products" element={<Products/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
