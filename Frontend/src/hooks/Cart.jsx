import { createContext, useContext, useState } from "react";
import { AuthContext } from "./Auth";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]); 


  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
