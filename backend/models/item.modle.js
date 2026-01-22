const mongoose = require("mongoose");
console.log("ItemDb called")
const itemSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    
},
{ timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
console.log("item return");
module.exports = Item;
