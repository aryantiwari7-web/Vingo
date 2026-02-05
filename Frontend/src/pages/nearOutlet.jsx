import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";

function NearOutlet() {
  const [shops, setShops] = useState([]);

  const urls = [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=250&fit=crop",
  ];

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await axios.post(`${serverUrl}/api/auth/allShop`);
        setShops(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800 px-4">
        Top <span className="text-orange-500">Restaurant</span> and outlet chains
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 mt-10">
        {shops.map((shop, index) => (
          <div
            key={shop._id || index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer hover:scale-105"
          >
            <img
              src={urls[index % urls.length]}
              alt={shop.shopName || "restaurant"}
              className="w-full h-32 object-cover"
            />

            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {shop.shopName ?? "Unnamed Shop"}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {shop.shopCity ?? "Unknown City"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearOutlet;
