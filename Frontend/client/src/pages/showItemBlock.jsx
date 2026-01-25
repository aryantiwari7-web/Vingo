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

                // 🔥 IMPORTANT FIX
                if(response){
                setItem(response.data);
                console.log(item.name); // Now this will work
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
         <div className="items-page">
      <h1 className="page-title">Our Menu</h1>

      <div className="items-grid">
          <div className="item-card" key={item._id}>
            <div className="image-box">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="item-content">
              <h2 className="item-name">{item.name}</h2>

              <p className="item-category">{item.category}</p>

              <p className="item-description">
                {item.description}
              </p>

              <div className="item-footer">
                <span className="item-price">₹{item.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
}

export default ShowItemBlock;
