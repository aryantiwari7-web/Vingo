const mongoose = require('mongoose');

console.log("DB called");
const connection = async () => {
    try {
        console.log("DB Enter");
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error.message);
    }
};
console.log("DB end");

module.exports = { connection };
