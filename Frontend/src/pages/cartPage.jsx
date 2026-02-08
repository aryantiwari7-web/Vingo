import React, { useContext } from "react";
import { CartContext } from "../hooks/Cart";
import axios from "axios";
import { serverUrl } from "../App";
import { AuthContext } from "../hooks/Auth";

function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);

  const del = async (item) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem._id !== item._id
    );

    setCart(updatedCart);

    await axios.post(`${serverUrl}/api/auth/updateCart`, {
      userId: auth._id,
      cartBox: updatedCart,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🛒 My Cart
      </h2>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-lg">No items in cart</p>
        </div>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">
                {item.shopName}
              </p>
              <p className="text-orange-600 font-bold mt-1">
                ₹{item.price}
              </p>
            </div>

            <button
              onClick={() => del(item)}
              className="w-20 h-10 text-sm text-gray-100 bg-red-600 rounded-lg hover:scale-105 hover:shadow-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
