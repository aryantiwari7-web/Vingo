import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import { FaRupeeSign } from "react-icons/fa";

const ItemBox = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [allItem, setAllItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const openItm = (itemId) => {
    navigate(`/showItem/${itemId}`);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.post(
          `${serverUrl}/api/auth/item/${name}`
        );
        setAllItem(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [name]);

  if (loading) return <h1>Loading...</h1>;
  if (!allItem.length) return <h1>No items found</h1>;

  return (
  <div className="w-full min-h-screen bg-gray-50 px-4 py-6">
    {/* Category Heading */}
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      {name}
    </h1>

    {/* Items Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {allItem.map((z) => (
        <div
          key={z._id}
          onClick={() => openItm(z._id)}
          className="bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition overflow-hidden"
        >
          {/* Image */}
          <img
            src={z.image}
            alt={z.name}
            className="w-full h-32 object-cover"
          />

          {/* Info */}
          <div className="p-3">
            <h2 className="text-sm font-semibold text-gray-800 truncate">
              {z.name}
            </h2>

            <p className="text-orange-500 font-bold text-sm flex items-center gap-1 mt-1">
              <FaRupeeSign className="text-xs" />
              {z.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default ItemBox;
