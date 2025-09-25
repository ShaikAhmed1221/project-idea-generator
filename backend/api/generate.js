const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/", async (req, res) => {
  try {
    const { techSelections, complexity } = req.body;

    if (!techSelections || !techSelections.length)
      return res.status(400).json({ error: "No technologies provided." });

    let difficulty = "Beginner";
    if (complexity >= 35 && complexity < 70) difficulty = "Intermediate";
    else if (complexity >= 70) difficulty = "Advanced";

    const prompt = `
Generate an innovative ${difficulty}-level project idea
using the following technologies: ${techSelections
      .map((t) => t.technology)
      .join(", ")}.

Return the output strictly as a JSON object with keys: title, description, problem_statement, solution_overview, key_features, technical_architecture, implementation_steps, tech_stack, impact, target_users, monetization_strategy, future_enhancements, project_scope, risks_challenges, success_criteria, getting_started.
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);

    let textResponse = await result.response.text();

    let projectIdea;
    try {
      projectIdea = JSON.parse(textResponse);
    } catch (e) {
      console.warn(
        "Gemini returned invalid JSON, wrapping in fallback object."
      );
      projectIdea = { raw: textResponse };
    }

    res.json({ projectIdea });
  } catch (error) {
    console.error("Error generating project idea:", error);
    res.status(500).json({ error: "Failed to generate project idea" });
  }
});

module.exports = app;
