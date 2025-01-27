import React, { useEffect, useState } from "react";
import NavHeader from "./components/NavHeader";
import Card from "./components/Card";
import CartPage from "./components/CartPage";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Fetch data from API
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error.message || error));
  };

  useEffect(() => {
    getData();
  }, []);

  // Calculate the total price (including quantity) and apply a 10% discount
  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discountedTotal = (total * 0.10).toFixed(2); // 10% discount
    return discountedTotal;
  };

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <NavHeader cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#E5E0FF]">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {data.map((item) => (
                    <Card
                      key={item.id}
                      cartCount={cartCount}
                      setCartCount={setCartCount}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      product={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              calculateTotal={calculateTotal}
              setCartCount={setCartCount}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
