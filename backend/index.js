const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const { connection } = require('./config/db.js');
const authRoutes = require('./routes/auth.routes.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
console.log("backend");
app.use("/api/auth",authRoutes);

app.get('/', (req, res) => {
    res.send("This is home page");
});


// DB + Server
connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ DB connection failed", err.message);
    });
