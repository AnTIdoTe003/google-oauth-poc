require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
mongoose
  .connect(
    "mongodb+srv://viperbaledb:MMR56NKZFqrnHMOJ@oauth-poc.fmwwz.mongodb.net/?retryWrites=true&w=majority&appName=oauth-poc"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
