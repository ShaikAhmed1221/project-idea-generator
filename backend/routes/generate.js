// const express = require("express");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();

// const router = express.Router();
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// router.post("/", async (req, res) => {
//   try {
//     const { techSelections, complexity } = req.body;

//     let difficulty = "Beginner";
//     if (complexity >= 35 && complexity < 70) difficulty = "Intermediate";
//     else if (complexity >= 70) difficulty = "Advanced";

//     const prompt = `
// Generate an innovative ${difficulty}-level project idea
// using the following technologies: ${techSelections
//       .map((t) => t.technology)
//       .join(", ")}.

// Return the output strictly as a JSON object:
// {
//   "title": "Project Title",
//   "description": "Short Description",
//   "problem_statement": "What problem does this project solve?",
//   "solution_overview": "How does this project address the problem?",
//   "key_features": [
//     {
//       "feature": "Feature 1",
//       "description": "Detailed explanation of how this feature works and its benefits"
//     },
//     {
//       "feature": "Feature 2",
//       "description": "Detailed explanation of how this feature works and its benefits"
//     }
//   ],
//   "technical_architecture": {
//   },
//   "implementation_steps": [
//     {
//       "phase": "Phase 1",
//       "tasks": ["Task 1", "Task 2", "Task 3"],
//       "duration_estimate": "1-2 weeks"
//     },
//     {
//       "phase": "Phase 2",
//       "tasks": ["Task 1", "Task 2", "Task 3"],
//       "duration_estimate": "2-3 weeks"
//     }
//   ],
//   "tech_stack": [
//     {
//       "category": "",
//       "technologies": ,
//       "rationale":
//     },
//   ],
//   "impact": {
//     "primary_impact": "Main impact description",
//     "secondary_benefits": ["Benefit 1", "Benefit 2", "Benefit 3"],
//     "metrics_for_success": ["Metric 1", "Metric 2", "Metric 3"]
//   },
//   "target_users": {
//     "primary_users": "Main user group",
//     "secondary_users": "Additional user groups",
//     "user_needs": ["Need 1", "Need 2", "Need 3"]
//   },
//   "monetization_strategy": "How this project could generate revenue (if applicable)",
//   "future_enhancements": [
//     {
//       "enhancement": "Enhancement 1",
//       "priority": "High/Medium/Low",
//       "description": "Detailed explanation of this enhancement"
//     },
//     {
//       "enhancement": "Enhancement 2",
//       "priority": "High/Medium/Low",
//       "description": "Detailed explanation of this enhancement"
//     }
//   ],
//   "project_scope": {
//     "in_scope": ["What's included in the project"],
//     "out_of_scope": ["What's not included but could be added later"]
//   },
//   "risks_challenges": {
//     "technical_risks": ["Risk 1", "Risk 2"],
//     "business_risks": ["Risk 1", "Risk 2"],
//     "mitigation_strategies": ["Strategy 1", "Strategy 2"]
//   },
//   "success_criteria": [
//     "Measurable goal 1",
//     "Measurable goal 2",
//     "Measurable goal 3"
//   ],
//   "getting_started": {
//     "prerequisites": ["Prerequisite 1", "Prerequisite 2"],
//     "setup_steps": ["Step 1", "Step 2", "Step 3"],
//     "development_workflow": "How to contribute and develop"
//   }
// }`;

//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//     const result = await model.generateContent(prompt);

//     let textResponse = await result.response.text();

//     let projectIdea;
//     try {
//       // Try parsing directly
//       projectIdea = JSON.parse(textResponse);
//     } catch (e) {
//       // If parsing fails, wrap raw text in a JSON object
//       console.warn(
//         "Gemini returned invalid JSON, wrapping in fallback object."
//       );
//       projectIdea = { raw: textResponse };
//     }

//     res.json({ projectIdea });
//   } catch (error) {
//     console.error("Error generating project idea:", error);
//     res.status(500).json({ error: "Failed to generate project idea" });
//   }
// });

// module.exports = router;
