const express = require("express");
const cors = require("cors");
const generateRoute = require("./api/generate"); // Import the function logic

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/generate", generateRoute);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

module.exports = app;
