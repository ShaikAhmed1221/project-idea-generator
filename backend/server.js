const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const generateRoute = require("./api/generate");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Route
app.use("/api/generate", generateRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
