import { useState } from "react";
import "./App.css";
import CustomNavbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import { CounterStore } from "./context/counterContext";

function App() {
  const [totalCounter, setTotalCounter] = useState(0);

  const values = {
    totalCounter,
    setTotalCounter,
  };

  return (
    <>
      <CounterStore.Provider value={values}>
        <CustomNavbar />
        <Products />
      </CounterStore.Provider>
    </>
  );
}

export default App;
