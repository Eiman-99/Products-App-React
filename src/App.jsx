import { useState } from "react";
import "./App.css";
import CustomNavbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import { CounterStore } from "./context/counterContext";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/productDetails";
import { CartProvider } from "./context/cartProvider";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [totalCounter, setTotalCounter] = useState(0);

  const values = {
    totalCounter,
    setTotalCounter,
  };

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <CounterStore.Provider value={values}>
            <CustomNavbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </CounterStore.Provider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
