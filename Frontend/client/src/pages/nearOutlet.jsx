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
        setShops(res.data.slice(0, 4)); // max 4 shops
      } catch (error) {
        console.error(error);
      }
    };

    fetchShops();
  }, []);

 return (
  <div className="w-full bg-gray-50 py-6">
    {/* Section Title */}
    <h2 className="text-xl font-bold text-gray-800 px-4 mb-5">
      Top restaurant and outlet chains
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
      {shops.map((shop, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer"
        >
          {/* Image */}
          <img
            src={urls[index]}
            alt="restaurant"
            className="w-full h-32 object-cover"
          />

          {/* Content */}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              {shop.shopName || shop}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {shop.shopCity}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default NearOutlet;
