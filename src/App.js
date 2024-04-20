import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import LoginRegister from "./Pages/LoginRegister";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

export default function App() {
  const { token } = useSelector((state) => state.authSlice);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/login-register"
            element={!token ? <LoginRegister /> : <Navigate to={"/"} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:id/:name" element={<ProductDetails />} />
          <Route
            path="'/cart"
            element={token ? <Cart /> : <Navigate to={"/login-register"} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
    </>
  );
}
