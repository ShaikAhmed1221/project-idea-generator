const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const generateRoute = require("../backend/routes/generate"); // adjust path if needed

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Routes
app.use("/api/generate", generateRoute);

// Export as a Vercel serverless function (no app.listen here!)
module.exports = app;
