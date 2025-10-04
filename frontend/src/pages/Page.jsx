import React, { useState } from "react";

// ---------------------- Tech Options Data ----------------------
const techOptions = {
  // AI/ML
  ai_ml: [
    "OpenAI API",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face",
    "LangChain",
    "Gemini API",
    "Anthropic Claude",
    "Computer Vision",
    "NLP",
    "Stable Diffusion",
    "LLaMA",
    "Azure AI",
    "AWS SageMaker",
    "Google AI",
  ],

  // Frontend
  frontend_frameworks: [
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "Svelte",
    "SolidJS",
    "Qwik",
    "Nuxt.js",
    "Gatsby",
    "Remix",
  ],

  frontend_styling: [
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Chakra UI",
    "Styled Components",
    "Sass/SCSS",
    "CSS Modules",
    "Emotion",
    "Ant Design",
    "Bulma",
  ],

  // Backend
  backend_frameworks: [
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "Spring Boot",
    "Laravel",
    "Ruby on Rails",
    "ASP.NET Core",
    "FastAPI",
    "Koa",
    "Meteor",
  ],

  // Database
  database: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "SQLite",
    "Firebase",
    "Supabase",
    "Cassandra",
    "Elasticsearch",
    "DynamoDB",
    "Neo4j",
    "CockroachDB",
  ],

  // Mobile
  mobile: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Ionic",
    "Xamarin",
    "NativeScript",
    "Expo",
    "SwiftUI",
    "Jetpack Compose",
  ],

  // DevOps & Cloud
  devops: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "Ansible",
    "Prometheus",
    "Grafana",
  ],

  // Blockchain
  blockchain: [
    "Solidity",
    "Web3.js",
    "Ethers.js",
    "Hardhat",
    "Truffle",
    "IPFS",
    "Alchemy",
    "Morallis",
    "Foundry",
    "Avalanche",
    "Polygon",
  ],

  // Desktop
  desktop: [
    "Electron",
    "Tauri",
    "Flutter Desktop",
    "WPF",
    "Qt",
    "JavaFX",
    "Avalonia",
  ],

  // Real-time & APIs
  realtime: [
    "Socket.io",
    "WebSockets",
    "GraphQL",
    "gRPC",
    "Firebase Realtime",
    "Pusher",
    "Ably",
    "SignalR",
    "Server-Sent Events",
  ],

  // Testing
  testing: [
    "Jest",
    "Cypress",
    "Playwright",
    "Selenium",
    "Testing Library",
    "Mocha",
    "Chai",
    "Vitest",
    "JUnit",
  ],
};

const categories = Object.keys(techOptions);

// ---------------------- TechSelector Component ----------------------
const TechSelector = ({ techSelections, setTechSelections }) => {
  const formatCategoryName = (category) => {
    const formatMap = {
      ai_ml: "🤖 AI/ML",
      frontend_frameworks: "⚛️ Frontend",
      frontend_styling: "🎨 Styling",
      backend_frameworks: "🔧 Backend",
      database: "💾 Database",
      mobile: "📱 Mobile",
      devops: "☁️ DevOps",
      blockchain: "⛓️ Blockchain",
      desktop: "💻 Desktop",
      realtime: "⚡ Real-time",
      testing: "🧪 Testing",
    };

    return (
      formatMap[category] ||
      "🛠️ " +
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Technologies
          </h2>
          <p className="text-gray-600 text-sm">
            Select your tech stack for the project
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Selected</div>
          <div className="text-xl font-bold text-indigo-600">
            {techSelections.filter((s) => s.category && s.technology).length}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {techSelections.map((sel, idx) => {
          const usedCats = techSelections
            .map((s, i) => (i !== idx ? s.category : null))
            .filter(Boolean);
          const availableCats = categories.filter(
            (cat) => !usedCats.includes(cat)
          );

          return (
            <div key={idx} className="flex gap-3 items-start group">
              {/* Category Select */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={sel.category}
                  onChange={(e) => handleCategoryChange(idx, e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 appearance-none cursor-pointer shadow-sm hover:border-gray-400"
                >
                  <option value="" className="text-gray-500 bg-white">
                    Select Category
                  </option>
                  {availableCats.map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="bg-white text-gray-900 py-2"
                    >
                      {formatCategoryName(cat)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technology Select */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Technology
                </label>
                <select
                  value={sel.technology}
                  onChange={(e) => handleTechnologyChange(idx, e.target.value)}
                  disabled={!sel.category}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 appearance-none cursor-pointer shadow-sm hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="text-gray-500 bg-white">
                    Select Technology
                  </option>
                  {sel.category &&
                    techOptions[sel.category]?.map((tech) => (
                      <option
                        key={tech}
                        value={tech}
                        className="bg-white text-gray-900 py-2"
                      >
                        {tech}
                      </option>
                    ))}
                </select>
              </div>

              {/* Remove button */}
              {techSelections.length > 1 && (
                <div className="pt-6">
                  <button
                    onClick={() => handleRemove(idx)}
                    className="px-4 py-3 text-red-500 hover:text-red-700 transition-all duration-200 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 hover:border-red-300 flex items-center justify-center"
                    title="Remove this selection"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {techSelections.length < categories.length && (
        <button
          onClick={handleAdd}
          className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 text-gray-600 hover:text-indigo-700 flex items-center justify-center gap-3 group"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="font-medium">Add Technology Stack</span>
        </button>
      )}
    </div>
  );
};

// ---------------------- Complexity Component ----------------------
const ComplexitySelector = ({ complexity, setComplexity }) => {
  const complexityLevels = [
    {
      level: 25,
      label: "BEGINNER",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      description: "Simple projects, basic features",
    },
    {
      level: 50,
      label: "INTERMEDIATE",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      description: "Moderate complexity, multiple features",
    },
    {
      level: 75,
      label: "ADVANCED",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      description: "Complex systems, advanced features",
    },
    {
      level: 100,
      label: "EXPERT",
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      textColor: "text-rose-700",
      description: "Enterprise-level, cutting-edge tech",
    },
  ];

  const currentLevel =
    complexityLevels.find((level) => complexity <= level.level) ||
    complexityLevels[1];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complexity Level
        </h2>
        <p className="text-gray-600 text-sm">
          Set the project difficulty and scope
        </p>
      </div>

      {/* Current Level Display */}
      <div
        className={`${currentLevel.bgColor} border ${currentLevel.borderColor} rounded-2xl p-6 text-center transition-all duration-300 shadow-sm`}
      >
        <div
          className={`text-3xl font-bold bg-gradient-to-r ${currentLevel.color} bg-clip-text text-transparent mb-2`}
        >
          {currentLevel.label}
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {complexity}/100
        </div>
        <div className="text-gray-600 text-sm">{currentLevel.description}</div>
      </div>

      {/* Slider */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Simple</span>
          <span>Balanced</span>
          <span>Advanced</span>
          <span>Expert</span>
        </div>

        <input
          type="range"
          min="1"
          max="100"
          value={complexity}
          onChange={(e) => setComplexity(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />

        {/* Level Indicators */}
        <div className="grid grid-cols-4 gap-3">
          {complexityLevels.map((level) => (
            <button
              key={level.level}
              onClick={() => setComplexity(level.level)}
              className={`p-3 rounded-xl text-center transition-all duration-200 border ${
                complexity <= level.level
                  ? `${level.bgColor} ${level.borderColor} transform scale-105 shadow-sm`
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className={`text-xs font-semibold ${level.textColor}`}>
                {level.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------------------- Output Display Component ----------------------
const OutputDisplay = ({ projectIdea, onCopy, copied }) => {
  if (!projectIdea) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        <div className="text-center">
          <div className="text-8xl mb-6">💡</div>
          <p className="text-xl mb-2 text-gray-700">Your Project Idea Awaits</p>
          <p className="text-gray-600">
            Configure your preferences above and generate your next amazing
            project!
          </p>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <div className="space-y-2">
          {content.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      );
    }
    return <p className="text-gray-700 leading-relaxed">{content}</p>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          💡 Generated Project Idea
        </h2>
        <button
          onClick={onCopy}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy to Clipboard
            </>
          )}
        </button>
      </div>

      <div className="grid gap-6">
        {/* Title Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Project Title
            </h3>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {projectIdea.title}
          </h2>
        </div>

        {/* Description Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {projectIdea.description}
          </p>
        </div>

        {/* Features Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Key Features
            </h3>
          </div>
          {renderContent(projectIdea.features)}
        </div>

        {/* Tech Stack Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Technology Stack
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectIdea.tech_stack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm border border-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Potential Impact
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{projectIdea.impact}</p>
        </div>

        {/* Target Users Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Target Users
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {projectIdea.target_users}
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------- Main Component ----------------------
export default function ProjectIdeaGenerator() {
  const [techSelections, setTechSelections] = useState([
    { category: "ai_ml", technology: "OpenAI API" },
  ]);
  const [complexity, setComplexity] = useState(50);
  const [projectIdea, setProjectIdea] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generateProjectIdea = async () => {
    const selectedTechnologies = techSelections.filter(
      (s) => s.category && s.technology
    );
    if (selectedTechnologies.length === 0) {
      setError("Please select at least one technology");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Enhanced mock response
      const selectedTechs = techSelections.map((s) => s.technology);

      const mockIdea = {
        title: "AI-Powered Code Review Assistant",
        description:
          "An intelligent code review system that uses AI to analyze code quality, suggest improvements, and detect potential bugs before deployment. This platform revolutionizes the code review process by providing instant, intelligent feedback to developers.",
        features: [
          "Automated code quality analysis with AI-powered insights",
          "Real-time suggestions and improvements during development",
          "Integration with popular Git platforms (GitHub, GitLab, Bitbucket)",
          "Custom rule configuration for team-specific standards",
          "Team collaboration features with comment threading",
          "Performance metrics and code quality scoring",
          "Automated security vulnerability detection",
          "Code duplication and complexity analysis",
          "Personalized learning recommendations for developers",
          "Integration with CI/CD pipelines",
        ],
        tech_stack: selectedTechs,
        impact:
          "Reduces code review time by 60% and improves overall code quality through AI-powered insights and automated quality checks. Teams report 40% faster development cycles and 75% reduction in production bugs.",
        target_users:
          "Development teams, solo developers, tech leads, engineering managers, DevOps teams, and quality assurance professionals",
      };

      setProjectIdea(mockIdea);
    } catch (err) {
      setError("Failed to generate project idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!projectIdea) return;

    try {
      const text = JSON.stringify(projectIdea, null, 2);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 project-generator">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Subtle Orbs */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200 shadow-sm">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-gray-700">
              AI Project Generator
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Create Your
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Next Project
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
            Choose from{" "}
            <span className="text-indigo-600 font-semibold">
              150+ technologies
            </span>{" "}
            across{" "}
            <span className="text-blue-600 font-semibold">11 categories</span>,
            set your complexity level, and generate detailed project ideas
            powered by AI.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Technologies */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <TechSelector
                techSelections={techSelections}
                setTechSelections={setTechSelections}
              />
            </div>
          </div>

          {/* Right Column - Complexity & Generate */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <ComplexitySelector
                complexity={complexity}
                setComplexity={setComplexity}
              />
            </div>

            {/* Generate Button Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    ⚠️ {error}
                  </div>
                )}

                <button
                  onClick={generateProjectIdea}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Generating Your Idea...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Generate Project Idea
                    </>
                  )}
                </button>

                <div className="text-center text-sm text-gray-600">
                  <div className="flex justify-center gap-6 mb-2">
                    <span className="text-emerald-600 font-medium">
                      ✓ 150+ Technologies
                    </span>
                    <span className="text-blue-600 font-medium">
                      ✓ 11 Categories
                    </span>
                    <span className="text-indigo-600 font-medium">
                      ✓ Detailed Output
                    </span>
                  </div>
                  Powered by AI • Instant Results • Custom Ideas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[600px]">
          <OutputDisplay
            projectIdea={projectIdea}
            onCopy={copyToClipboard}
            copied={copied}
          />
        </div>
      </div>

      <style jsx>{`
        .project-generator {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .slider {
          background: linear-gradient(
            to right,
            #10b981,
            #3b82f6,
            #f59e0b,
            #ef4444
          );
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 3px solid #4f46e5;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 3px solid #4f46e5;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
        }

        .slider::-webkit-slider-track {
          height: 12px;
          border-radius: 8px;
          background: linear-gradient(
            to right,
            #10b981,
            #3b82f6,
            #f59e0b,
            #ef4444
          );
        }

        .slider::-moz-range-track {
          height: 12px;
          border-radius: 8px;
          background: linear-gradient(
            to right,
            #10b981,
            #3b82f6,
            #f59e0b,
            #ef4444
          );
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Selection styles */
        ::selection {
          background: rgba(79, 70, 229, 0.2);
        }

        /* Focus styles */
        select:focus,
        button:focus {
          outline: none;
          ring: 2px solid rgba(79, 70, 229, 0.5);
        }
      `}</style>
    </div>
  );
}
