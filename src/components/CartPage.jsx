import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cartItems, setCartItems }) {
  // Calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle increase quantity
  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Handle decrease quantity
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    setCartItems(updatedCart);
  };

  // Calculate discounted price (10% discount)
  const calculateDiscountedTotal = () => {
    const total = calculateTotal();
    return (total - total * 0.1).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#6D67E4] text-center">Your Cart</h1>
        <Link
          to="/"
          className="text-sm font-medium bg-[#6D67E4] text-white py-2 px-4 rounded hover:bg-violet-600"
        >
          Return to Products
        </Link>
      </div>

      {cartItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* <div className="grid grid-cols-5 gap-4 items-center font-bold text-gray-700">
            <p>Image</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Action</p>
          </div> */}
          <div className="divide-y mt-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 gap-4 items-center py-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <p className="text-gray-800 font-bold">{item.title}</p>
                <p className="font-bold">${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-lg font-bold text-gray-800">
              Subtotal: ${calculateTotal()}
            </p>
            <p className="text-lg font-bold text-gray-800">
              Discounted Total (10% Off): ${calculateDiscountedTotal()}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty!</p>
      )}
    </div>
  );
}

export default CartPage;
