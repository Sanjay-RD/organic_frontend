import React from "react";
import "./App.css"; //importing universal css
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ContactPage from "./pages/ContactPage.js";
import AccountPage from "./pages/AccountPage.js";
import ProductListPage from "./pages/ProductListPage";
import ProductAddPage from "./pages/ProductAddPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage.js";
// import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/product/:tag" element={<ProductPage />} />
        <Route exact path="/admin/product" element={<ProductListPage />} />
        <Route exact path="/admin/product/add" element={<ProductAddPage />} />
      </Routes>
    </Router>
  );
}
export default App;
