import React, { useContext } from "react";
import { CartContext } from "../hooks/Cart";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🛒 My Cart
      </h2>

      {/* Empty cart */}
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-lg">No items in cart</p>
        </div>
      )}

      {/* Cart items */}
      <div className="space-y-4">
        {cart.length > 0 &&
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition"
            >
              {/* Item image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              {/* Item details */}
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

              {/* Quantity */}
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Qty</span>
                <span className="font-semibold">{item.quantity}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CartPage;
