import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { serverUrl } from "../App";
import { AuthContext } from "./Auth";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const { auth } = useContext(AuthContext);
  const [cart, setCart] = useState([]); 


  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
