import axios from "axios";
import React ,{useContext, useState} from "react";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/Auth";

function AddItem() {
    const [name, setName] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [price, setPrice] = useState(0); 
    const [image, setImage] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [shopName, setShopName] = useState(""); 
    const [shopCity, setShopCity] = useState(""); 
    const {auth} = useContext(AuthContext);

    const navigate = useNavigate();

    const validate = async () =>{
        try {
          console.log("Pass 3 point");
          await axios.post(`${serverUrl}/api/auth/addItem`,{
            name,
            price,
            category,
            price,
            image,
            description,
            shopName,
            shopCity
          },{withCredentials:true})
        
          console.log("Pass 4 point");
          alert("Item added succesfully");
          navigate('/');
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div className="Main-box">
    <h1>Add Item</h1>
    <p className="pageDescription">
        Add new food items to your menu by entering details like name, price, description, and image. Once added, the item will be visible to customers instantly.
    </p>
    <div className="inputItem">
      <h3>Name</h3>
      <input placeholder="Enter name" type="text" onChange={(e)=> setName(e.target.value)} value={name}/>

      <h3>Category</h3>
      <input placeholder="Enter Category" type="text" onChange={(e)=> setCategory(e.target.value)} value={category}/>

      <h3>Price</h3>
      <input placeholder="Set price" type="number" onChange={(e)=> setPrice(Number(e.target.value))} value={price}/>

      <h3>Image</h3>
      <input placeholder="Set image" type="text" onChange={(e)=> setImage(e.target.value)} value={image}/>

      <h3>Description</h3>
      <input placeholder="Add description" type="text" onChange={(e)=> setDescription(e.target.value)} value={description}/>

      <h3>Your Shop Name</h3>
      <input value={auth.shopName} type="text" onChange={(e)=> setShopName(e.target.value)} readOnly disabled/>

      <h3>Shop City</h3>
      <input value={auth.shopCity} type="text" onChange={(e)=> setShopCity(e.target.value)} readOnly disabled/>

      
      <button className="smt_btn" onClick={validate}>Submit</button>
       </div>
    
    </div>
  );
}

export default AddItem;
