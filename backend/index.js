const express =  require('express');
const dotenv = require('dotenv');
const { connection } = require('./config/db.js');

dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is home page");
});

app.listen(port, () => {
    connection();
    console.log(`app is listening on port ${port}`);
});
