import React, { useState } from "react";

const techOptions = {
  // Programming Languages
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "Dart",
    "C++",
    "C",
    "R",
    "Julia",
  ],

  // Frontend Specific
  frontend_frameworks: [
    "React",
    "Vue.js",
    "Angular",
    "Svelte",
    "Solid.js",
    "Next.js",
    "Nuxt.js",
  ],
  frontend_styling: [
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Chakra UI",
    "Styled Components",
    "SASS",
  ],
  frontend_tools: ["Webpack", "Vite", "Babel", "ESLint", "Prettier"],

  // Backend Specific
  backend_frameworks: [
    "Node.js",
    "Express",
    "NestJS",
    "Django",
    "Flask",
    "Spring Boot",
    "ASP.NET Core",
  ],
  backend_runtime: ["Deno", "Bun", "Cloudflare Workers", "Vercel Functions"],

  // Database Types
  relational_db: ["PostgreSQL", "MySQL", "SQLite", "Oracle", "SQL Server"],
  nosql_db: ["MongoDB", "Redis", "Cassandra", "DynamoDB", "Firestore"],
  search_db: ["Elasticsearch", "Algolia", "Meilisearch", "Typesense"],

  // Deployment & Infrastructure
  containers: ["Docker", "Kubernetes", "Podman", "Containerd"],
  iac: ["Terraform", "Pulumi", "CloudFormation", "CDK"],
  monitoring: ["Prometheus", "Grafana", "Datadog", "New Relic"],

  // Mobile & Cross-platform
  native_mobile: ["Swift", "Kotlin", "Java"],
  cross_platform: ["React Native", "Flutter", "Ionic", "Capacitor"],

  // Specialized Domains
  ai_ml: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face"],
  blockchain: ["Solidity", "Web3.js", "Ethers.js"],
  gaming: ["Unity", "Unreal Engine", "Three.js"],
  iot: ["Arduino", "Raspberry Pi", "ESP32"],
};

const categories = Object.keys(techOptions);

// ---------------------- TechSelector Component ----------------------
const TechSelector = ({ techSelections, setTechSelections }) => {
  // Format category names for display
  // Format category names for display with consistent emojis
  const formatCategoryName = (category) => {
    const formatMap = {
      // Languages
      languages: "💻 Languages",

      // Frontend
      frontend: "🌐 Frontend",
      frontend_frameworks: "⚛️ Frontend Frameworks",
      frontend_styling: "🎨 Frontend Styling",
      frontend_tools: "🛠️ Frontend Tools",

      // Backend
      backend: "⚙️ Backend",
      backend_frameworks: "🔧 Backend Frameworks",
      backend_runtime: "🚀 Backend Runtime",

      // Database
      database: "💾 Database",
      relational_db: "🗃️ Relational DB",
      nosql_db: "📊 NoSQL DB",
      search_db: "🔍 Search DB",

      // Mobile
      mobile: "📱 Mobile",
      native_mobile: "📱 Native Mobile",
      cross_platform: "📲 Cross-Platform",

      // DevOps & Infrastructure
      devops: "☁️ DevOps",
      containers: "📦 Containers",
      iac: "🏗️ Infrastructure as Code",
      monitoring: "📈 Monitoring",

      // AI/ML
      ml: "🤖 AI/ML",
      ai_ml: "🧠 AI/ML",

      // Specialized
      blockchain: "⛓️ Blockchain",
      gaming: "🎮 Gaming",
      iot: "🔌 IoT",
      desktop: "💻 Desktop",

      // Quality & Security
      testing: "🧪 Testing",
      security: "🔒 Security",

      // Content & Real-time
      cms: "📝 CMS",
      realtime: "⚡ Real-time",
    };

    return (
      formatMap[category] ||
      "📋 " +
        category.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    );
  };

  const handleCategoryChange = (index, category) => {
    const updated = [...techSelections];
    updated[index] = { category, technology: "" };
    setTechSelections(updated);
  };

  const handleTechnologyChange = (index, technology) => {
    const updated = [...techSelections];
    updated[index].technology = technology;
    setTechSelections(updated);
  };

  const handleAdd = () => {
    if (techSelections.length < categories.length)
      setTechSelections([...techSelections, { category: "", technology: "" }]);
  };

  const handleRemove = (index) => {
    setTechSelections(techSelections.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
          🛠️ Technologies
        </label>
        <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
          {techSelections.filter((s) => s.category && s.technology).length}{" "}
          selected
        </span>
      </div>

      <div className="space-y-3">
        {techSelections.map((sel, idx) => {
          const usedCats = techSelections
            .map((s, i) => (i !== idx ? s.category : null))
            .filter(Boolean);
          const availableCats = categories.filter(
            (cat) => !usedCats.includes(cat)
          );

          return (
            <div key={idx} className="flex gap-2">
              {/* Category Select */}
              <div className="flex-1 relative">
                <select
                  value={sel.category}
                  onChange={(e) => handleCategoryChange(idx, e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none cursor-pointer pr-10"
                >
                  <option value="" className="text-gray-400 bg-gray-800">
                    📁 Select Category
                  </option>
                  {availableCats.map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="bg-gray-800 text-white py-2"
                    >
                      {formatCategoryName(cat)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technology Select */}
              <div className="flex-1 relative">
                <select
                  value={sel.technology}
                  onChange={(e) => handleTechnologyChange(idx, e.target.value)}
                  disabled={!sel.category}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none cursor-pointer pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="text-gray-400 bg-gray-800">
                    ⚙️ Select Technology
                  </option>
                  {sel.category &&
                    techOptions[sel.category]?.map((tech) => (
                      <option
                        key={tech}
                        value={tech}
                        className="bg-gray-800 text-white py-2"
                      >
                        {tech}
                      </option>
                    ))}
                </select>
              </div>

              {/* Remove button */}
              {techSelections.length > 1 && (
                <button
                  onClick={() => handleRemove(idx)}
                  className="px-4 text-red-400 hover:text-red-300 transition-colors bg-gray-800 rounded-lg border border-gray-600 hover:border-red-400 flex items-center justify-center"
                  title="Remove this selection"
                >
                  ✕
                </button>
              )}
            </div>
          );
        })}
      </div>

      {techSelections.length < categories.length && (
        <button
          onClick={handleAdd}
          className="mt-4 w-full py-3 border-2 border-dashed border-gray-600 rounded-lg hover:border-purple-400 transition-all duration-200 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-800 flex items-center justify-center gap-2"
        >
          <span className="text-lg">+</span>
          Add Technology Stack
        </button>
      )}
    </div>
  );
};

// ---------------------- ComplexitySlider Component ----------------------
const ComplexitySlider = ({ complexity, setComplexity }) => {
  const getLabel = (val) =>
    val >= 75 ? "EXPERT" : val >= 50 ? "INTERMEDIATE" : "BEGINNER";
  const getColor = (val) =>
    val >= 75
      ? "text-red-400"
      : val >= 50
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
        📊 Complexity Level
      </label>
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
        <div className="text-center mb-4">
          <span className={`text-2xl font-bold ${getColor(complexity)}`}>
            {getLabel(complexity)}
          </span>
          <div className="text-lg text-gray-300 mt-1">{complexity}/100</div>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={complexity}
          onChange={(e) => setComplexity(Number(e.target.value))}
          className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider mb-2"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Simple</span>
          <span>Balanced</span>
          <span>Advanced</span>
        </div>
      </div>
    </div>
  );
};

// ---------------------- GenerateButton Component ----------------------
const GenerateButton = ({ onClick, isLoading, error }) => (
  <div className="flex flex-col gap-4">
    {error && (
      <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">
        ⚠️ {error}
      </div>
    )}

    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/25 border border-purple-500/30"
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-3">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          Generating Your Idea...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-3 text-lg">
          🚀 Generate Project Idea
        </span>
      )}
    </button>
  </div>
);

// ---------------------- Enhanced ProjectIdeaDisplay Component ----------------------
const ProjectIdeaDisplay = ({ projectIdea, onRegenerate, isLoading }) => {
  if (!projectIdea)
    return (
      <div className="flex items-center justify-center h-96 text-gray-400">
        <div className="text-center">
          <div className="text-8xl mb-6 opacity-50">💡</div>
          <p className="text-xl mb-2 text-gray-300">Your Project Idea Awaits</p>
          <p className="text-sm text-gray-500">
            Configure your preferences above and generate your next amazing
            project!
          </p>
        </div>
      </div>
    );

  // Parse JSON project idea
  const parseProjectIdea = (idea) => {
    try {
      if (typeof idea === "object" && idea.raw) {
        const rawContent = idea.raw;
        const jsonMatch = rawContent.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) return JSON.parse(jsonMatch[1]);
        return JSON.parse(rawContent);
      }
      if (typeof idea === "string") {
        const jsonMatch = idea.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) return JSON.parse(jsonMatch[1]);
        const bareJsonMatch = idea.match(/\{[\s\S]*\}/);
        if (bareJsonMatch) return JSON.parse(bareJsonMatch[0]);
        return JSON.parse(idea);
      }
      return idea;
    } catch (error) {
      console.error("Error parsing project idea:", error);
      return null;
    }
  };

  const projectData = parseProjectIdea(projectIdea);

  if (!projectData || typeof projectData !== "object") {
    return (
      <div className="space-y-4">
        <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-4">
          <h4 className="text-red-400 font-semibold mb-2">Debug Info:</h4>
          <pre className="text-xs text-red-300 overflow-x-auto">
            {JSON.stringify(projectIdea, null, 2)}
          </pre>
        </div>
        <button
          onClick={onRegenerate}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
        >
          🔄 Regenerate
        </button>
      </div>
    );
  }

  // Render functions for the new JSON structure
  const renderFeatureList = (features) => {
    if (!features || !Array.isArray(features)) return null;

    return (
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
          >
            <h5 className="font-semibold text-green-400 mb-2">
              {feature.feature}
            </h5>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderTechStack = (techStack) => {
    if (!techStack || !Array.isArray(techStack)) return null;

    return (
      <div className="space-y-4">
        {techStack.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
          >
            <h5 className="font-semibold text-orange-400 mb-2">
              {category.category}
            </h5>
            <div className="flex flex-wrap gap-2 mb-3">
              {category.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-200 border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm">{category.rationale}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderImplementationSteps = (steps) => {
    if (!steps || !Array.isArray(steps)) return null;

    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
          >
            <div className="flex justify-between items-start mb-3">
              <h5 className="font-semibold text-blue-400">{step.phase}</h5>
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {step.duration_estimate}
              </span>
            </div>
            <div className="space-y-2">
              {step.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 text-sm">•</span>
                  <span className="text-gray-300 text-sm">{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderFutureEnhancements = (enhancements) => {
    if (!enhancements || !Array.isArray(enhancements)) return null;

    return (
      <div className="space-y-4">
        {enhancements.map((enhancement, index) => (
          <div
            key={index}
            className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
          >
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-semibold text-pink-400">
                {enhancement.enhancement}
              </h5>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  enhancement.priority === "High"
                    ? "bg-red-600 text-white"
                    : enhancement.priority === "Medium"
                    ? "bg-yellow-600 text-white"
                    : "bg-green-600 text-white"
                }`}
              >
                {enhancement.priority}
              </span>
            </div>
            <p className="text-gray-300 text-sm">{enhancement.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderList = (items, title) => {
    if (!items || !Array.isArray(items)) return null;

    return (
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-green-400 mt-1 text-sm">•</span>
            <span className="text-gray-300 text-sm">{item}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderObjectList = (obj, title) => {
    if (!obj || typeof obj !== "object") return null;

    return (
      <div className="space-y-3">
        {Object.entries(obj).map(([key, value]) => (
          <div key={key}>
            <h6 className="font-medium text-gray-400 mb-1 capitalize">
              {key.replace(/_/g, " ")}:
            </h6>
            {Array.isArray(value) ? (
              renderList(value)
            ) : (
              <p className="text-gray-300 text-sm">{value}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">
            {projectData.title}
          </h3>
          <p className="text-gray-300 text-lg">{projectData.description}</p>
        </div>
        <button
          onClick={onRegenerate}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          {isLoading ? "⏳ Generating..." : "🔄 Regenerate"}
        </button>
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-red-400 mb-3">
            Problem Statement
          </h4>
          <p className="text-gray-200 leading-relaxed">
            {projectData.problem_statement}
          </p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-green-400 mb-3">
            Solution Overview
          </h4>
          <p className="text-gray-200 leading-relaxed">
            {projectData.solution_overview}
          </p>
        </div>
      </div>

      {/* Key Features */}
      {projectData.key_features && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Key Features
          </h4>
          {renderFeatureList(projectData.key_features)}
        </div>
      )}

      {/* Technical Architecture */}
      {projectData.technical_architecture && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-blue-400 mb-4">
            Technical Architecture
          </h4>
          {renderObjectList(projectData.technical_architecture)}
        </div>
      )}

      {/* Implementation Steps */}
      {projectData.implementation_steps && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-purple-400 mb-4">
            Implementation Plan
          </h4>
          {renderImplementationSteps(projectData.implementation_steps)}
        </div>
      )}

      {/* Tech Stack */}
      {projectData.tech_stack && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-orange-400 mb-4">
            Technology Stack
          </h4>
          {renderTechStack(projectData.tech_stack)}
        </div>
      )}

      {/* Impact */}
      {projectData.impact && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            Impact Analysis
          </h4>
          {renderObjectList(projectData.impact)}
        </div>
      )}

      {/* Target Users */}
      {projectData.target_users && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-cyan-400 mb-4">
            Target Users
          </h4>
          {renderObjectList(projectData.target_users)}
        </div>
      )}

      {/* Future Enhancements */}
      {projectData.future_enhancements && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-pink-400 mb-4">
            Future Roadmap
          </h4>
          {renderFutureEnhancements(projectData.future_enhancements)}
        </div>
      )}

      {/* Additional Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Project Scope */}
        {projectData.project_scope && (
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
            <h4 className="text-lg font-semibold text-indigo-400 mb-4">
              Project Scope
            </h4>
            {renderObjectList(projectData.project_scope)}
          </div>
        )}

        {/* Risks & Challenges */}
        {projectData.risks_challenges && (
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
            <h4 className="text-lg font-semibold text-red-400 mb-4">
              Risks & Challenges
            </h4>
            {renderObjectList(projectData.risks_challenges)}
          </div>
        )}
      </div>

      {/* Success Criteria */}
      {projectData.success_criteria && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Success Criteria
          </h4>
          {renderList(projectData.success_criteria)}
        </div>
      )}

      {/* Getting Started */}
      {projectData.getting_started && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-blue-400 mb-4">
            Getting Started
          </h4>
          {renderObjectList(projectData.getting_started)}
        </div>
      )}

      {/* Monetization Strategy */}
      {projectData.monetization_strategy && (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">
            Monetization Strategy
          </h4>
          <p className="text-gray-200">{projectData.monetization_strategy}</p>
        </div>
      )}
    </div>
  );
};

// ---------------------- Main Page Component ----------------------
export default function Page() {
  const [techSelections, setTechSelections] = useState([
    { category: "", technology: "" },
  ]);
  const [complexity, setComplexity] = useState(50);
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const generateProjectIdea = async (isRegenerate = false) => {
    const selectedTechnologies = techSelections.filter(
      (s) => s.category && s.technology
    );
    if (!selectedTechnologies.length) {
      setError("Please select at least one technology");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            techSelections: selectedTechnologies,
            complexity,
            isRegenerate,
          }),
        }
      );

      const data = await res.json();
      let ideaPayload = data?.projectIdea ?? data;

      if (!ideaPayload && ideaPayload !== 0) {
        setProjectIdea("");
      } else {
        setProjectIdea(ideaPayload);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate project idea. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    generateProjectIdea(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">AI Project Generator</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Create Your Next
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Masterpiece
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Choose technologies, set complexity level, and generate innovative
            project ideas instantly.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800/30 backdrop-blur-md rounded-3xl border border-gray-600/50 p-8 mb-8 grid lg:grid-cols-2 gap-8">
          <TechSelector
            techSelections={techSelections}
            setTechSelections={setTechSelections}
          />
          <div className="space-y-6">
            <ComplexitySlider
              complexity={complexity}
              setComplexity={setComplexity}
            />
            <GenerateButton
              onClick={() => generateProjectIdea(false)}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-gray-800/30 backdrop-blur-md rounded-3xl border border-gray-600/50 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              💡 Generated Project Idea
            </h2>
            {projectIdea && (
              <button
                onClick={() => navigator.clipboard.writeText(projectIdea)}
                className="text-sm text-gray-400 hover:text-white transition-colors bg-gray-700 px-4 py-2 rounded-lg border border-gray-600 hover:border-purple-400"
              >
                📋 Copy to Clipboard
              </button>
            )}
          </div>
          <div className="min-h-[500px]">
            <ProjectIdeaDisplay
              projectIdea={projectIdea}
              onRegenerate={handleRegenerate}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>

      <style>{`
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }

        select:focus {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238b5cf6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.7);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        option {
          background: #1f2937;
          color: white;
          padding: 8px;
          margin: 2px 0;
        }

        option:hover {
          background: #4b5563;
        }

        option:checked {
          background: #7c3aed;
        }
        select option {
          background: #1f2937 !important;
          color: white !important;
          padding: 12px !important;
          margin: 4px 0 !important;
          border-radius: 4px !important;
        }

        select option:hover {
          background: #374151 !important;
        }

select option:checked {
  background: #7c3aed !important;
  color: white !important;
}

/* Better scrollbar for dropdowns */
select::-webkit-scrollbar {
  width: 8px;
}

select::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
      `}</style>
    </div>
  );
}
