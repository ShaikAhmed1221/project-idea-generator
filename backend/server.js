const express = require("express");
const cors = require("cors");
require("dotenv").config();

const generateRoute = require("./api/generate");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/generate", generateRoute);

app.get("/", (req, res) => {
  res.send(" Backend is running on Vercel!");
});

module.exports = app;
