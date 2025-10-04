const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { techSelections, complexity } = req.body;

    if (!techSelections || !techSelections.length) {
      return res.status(400).json({ error: "No technologies provided." });
    }

    let difficulty = "Beginner";
    if (complexity >= 35 && complexity < 70) difficulty = "Intermediate";
    else if (complexity >= 70) difficulty = "Advanced";

    const prompt = `
Generate an innovative ${difficulty}-level project idea
using the following technologies: ${techSelections
      .map((t) => t.technology)
      .join(", ")}.

Return the output strictly as a JSON object with keys: 
title, description, problem_statement, solution_overview, 
key_features, technical_architecture, implementation_steps, 
tech_stack, impact, target_users, monetization_strategy, 
future_enhancements, project_scope, risks_challenges, 
success_criteria, getting_started.
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);

    let textResponse = await result.response.text();

    // 🔹 Clean up AI output (remove ```json ... ```)
    textResponse = textResponse.replace(/```json|```/g, "").trim();

    let projectIdea;
    try {
      projectIdea = JSON.parse(textResponse);
    } catch (e) {
      console.warn("Gemini returned invalid JSON, wrapping raw text.");
      projectIdea = { raw: textResponse };
    }

    // 🔹 Ensure structure (fallbacks for frontend safety)
    projectIdea = {
      title: projectIdea.title || "",
      description: projectIdea.description || "",
      problem_statement: projectIdea.problem_statement || "",
      solution_overview: projectIdea.solution_overview || "",
      key_features: projectIdea.key_features || [],
      technical_architecture: projectIdea.technical_architecture || "",
      implementation_steps: projectIdea.implementation_steps || [],
      tech_stack: projectIdea.tech_stack || [],
      impact: projectIdea.impact || "",
      target_users: projectIdea.target_users || [],
      monetization_strategy: projectIdea.monetization_strategy || "",
      future_enhancements: projectIdea.future_enhancements || [],
      project_scope: projectIdea.project_scope || "",
      risks_challenges: projectIdea.risks_challenges || [],
      success_criteria: projectIdea.success_criteria || [],
      getting_started: projectIdea.getting_started || [],
    };

    res.status(200).json({ projectIdea });
  } catch (error) {
    console.error("Error generating project idea:", error);
    res.status(500).json({ error: "Failed to generate project idea" });
  }
};
