import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { CartContext } from "../hooks/Cart";
import { AuthContext } from "../hooks/Auth";

function ShowItemBlock() {
  const navigate = useNavigate();
  const { itemId } = useParams();

  const { auth } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Add to cart function
  const addCartI = (item) => {
    if (!auth) {
      navigate("/signin");
      return;
    }
    console.log(item);
    setCart([...cart,item]); // add item to cart
  };

  // ✅ Fetch item
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.post(
          `${serverUrl}/api/auth/item/showItem/${itemId}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) return <h1>Loading...</h1>;
  if (!item) return <h1>No item found</h1>;

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Our Menu</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 md:h-full object-cover"
          />

          {/* Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-orange-500">{item.category}</p>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold">₹{item.price}</span>

         
              <button
                onClick={() => addCartI(item)}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg"
              >
                Add to Cart
              </button>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowItemBlock;
