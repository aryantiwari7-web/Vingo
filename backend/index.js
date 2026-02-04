const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const { connection } = require('./config/db.js');
const app1 = require('./routes/auth.routes.js');
const app2 = require('./routes/user.rought.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: ["http://localhost:3000",
    "https://vingo-zq2w.vercel.app/"
  ],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


console.log("backend");
app.use("/api/user",app2);
app.use("/api/auth",app1);




connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ DB connection failed", err.message);
    });
