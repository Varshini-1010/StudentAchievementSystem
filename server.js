const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});