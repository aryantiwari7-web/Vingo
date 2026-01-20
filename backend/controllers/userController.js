const User = require("../models/user.model.js");

const GetCurrentUser = async (req, res) => {
  try {
    const userId = req.userId; 

    console.log("UserId from auth:", userId);

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const user = await User.findById(userId) 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



module.exports = GetCurrentUser;