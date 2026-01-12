const mongoose=require('mongoose');

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Db connected");
    }
    catch{
        console.log("Db error");
    }
}

module.exports = { connection };