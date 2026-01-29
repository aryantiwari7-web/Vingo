import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

function SlidingMenuBar() {
    const menu = [
        {
            name: "Pizza",
            image: assets.Pizzas
        },
        {
            name: "Burgers",
            image: assets.Burgers
        },
        {
            name: "Cakes",
            image: assets.Cakes
        },
        {
            name: "Momos",
            image: assets.Momos
        },
        {
            name: "Rolls",
            image: assets.Rolls
        },
        {
            name: "IceCream",
            image: assets.IceCream
        },
        {
            name: "GulabJamun",
            image: assets.GulabJamun
        },
        {
            name: "Biryani",
            image: assets.Biryani
        },
        {
            name: "Waffle",
            image: assets.Waffle
        },
        {
            name: "Paratha",
            image: assets.Parathas
        },
        
    ];
    const navigate = useNavigate();
    const handle = (name)=>{
          navigate(`/item/${name}`);  
    }
   return (
    <div className="Main-div">
      <h1>What's on your mind?</h1>
    
      <div className="menu-row">
        {menu.map((z) => (
          <div className="Collection-div" key={z.name}>
            <button onClick={() => handle(z.name)}>
            <img src={z.image} alt={z.name} />
            <p>{z.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlidingMenuBar;
