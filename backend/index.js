const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const { connection } = require("./config/db.js");
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.route.js"); // ✅ FIXED typo

const app = express();
const PORT = process.env.PORT || 3000;

/* ---------- CORS ---------- */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://vingo-zq2w.vercel.app" // ✅ removed trailing slash
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* ---------- Middlewares ---------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/* ---------- Routes ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* ---------- Server ---------- */
connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
  });
