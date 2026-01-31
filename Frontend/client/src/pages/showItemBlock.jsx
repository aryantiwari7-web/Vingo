import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { serverUrl } from '../App';
import axios from 'axios';

function ShowItemBlock() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.post(
                    `${serverUrl}/api/auth/item/showItem/${itemId}`
                );

                if(response){
                setItem(response.data);
                console.log(item.name); 
                }
            } catch (error) {
                console.error("Error fetching item:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [itemId]);

    if (loading) return <h1 className="item-loading">Loading...</h1>;
    if (!item) return <h1 className="item-not-found">No item found</h1>;

    return (
  <div className="w-full min-h-screen bg-gray-50 px-4 py-6">
    {/* Page Title */}
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Our Menu
    </h1>

    {/* Item Card */}
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Image */}
        <div className="w-full h-64 md:h-full">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              {item.name}
            </h2>

            <p className="text-sm text-orange-500 font-medium mb-3">
              {item.category}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Price + Button */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800">
              ₹{item.price}
            </span>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition">
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
