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
    <div className="ItemMainBox">
      <h1 className="categoryHeading">{name}</h1>

      <div className="allItem">
        {allItem.map((z) => (
          <div
            key={z._id}
            className="itemCard"
            onClick={() => openItm(z._id)}
          >
            <img src={z.image} alt={z.name} />

            <div className="itemInfo">
              <h2>{z.name}</h2>
              <p className="price">
                <FaRupeeSign /> {z.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemBox;
