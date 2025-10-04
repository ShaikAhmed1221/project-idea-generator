import React, { useState } from "react";

// ---------------------- Tech Options Data ----------------------
const techOptions = {
  // Languages
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "Go",
    "Rust",
    "Kotlin",
    "Swift",
    "PHP",
    "Ruby",
    "Scala",
    "Dart",
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
    "Alpine.js",
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
  ],

  frontend_tools: [
    "Webpack",
    "Vite",
    "Parcel",
    "Babel",
    "ESLint",
    "Prettier",
    "Jest",
    "Cypress",
  ],

  // Backend
  backend_frameworks: [
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "Spring Boot",
    "Laravel",
    "Ruby on Rails",
    "ASP.NET Core",
    "FastAPI",
  ],

  backend_runtime: [
    "Node.js",
    "Bun",
    "Deno",
    ".NET Runtime",
    "JVM",
    "Python Runtime",
  ],

  // Database
  relational_db: [
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Oracle",
    "SQLite",
    "MariaDB",
    "CockroachDB",
  ],

  nosql_db: [
    "MongoDB",
    "Redis",
    "Cassandra",
    "DynamoDB",
    "Firestore",
    "Cosmos DB",
    "FaunaDB",
  ],

  search_db: ["Elasticsearch", "Algolia", "Meilisearch", "Solr", "OpenSearch"],

  // Mobile
  native_mobile: [
    "Swift (iOS)",
    "Kotlin (Android)",
    "Objective-C",
    "Java (Android)",
  ],

  cross_platform: [
    "React Native",
    "Flutter",
    "Ionic",
    "Xamarin",
    "NativeScript",
    "Expo",
  ],

  // DevOps & Infrastructure
  containers: ["Docker", "Kubernetes", "Podman", "Containerd", "Rancher"],

  iac: ["Terraform", "Pulumi", "AWS CDK", "CloudFormation", "Ansible", "Chef"],

  monitoring: [
    "Prometheus",
    "Grafana",
    "Datadog",
    "New Relic",
    "Sentry",
    "Loki",
  ],

  // AI/ML
  ai_ml: [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face",
    "OpenCV",
    "LangChain",
    "OpenAI API",
    "Gemini API",
    "Anthropic Claude",
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
  ],

  // Gaming
  gaming: [
    "Unity",
    "Unreal Engine",
    "Godot",
    "Phaser",
    "Three.js",
    "WebGL",
    "OpenGL",
  ],

  // IoT
  iot: [
    "Arduino",
    "Raspberry Pi",
    "ESP32",
    "MicroPython",
    "PlatformIO",
    "AWS IoT",
    "Azure IoT",
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

  // Testing
  testing: [
    "Jest",
    "Vitest",
    "Cypress",
    "Playwright",
    "Selenium",
    "Testing Library",
    "Mocha",
    "Chai",
  ],

  // Security
  security: [
    "OAuth 2.0",
    "JWT",
    "OpenID Connect",
    "Helmet.js",
    "CSP",
    "Rate Limiting",
    "bcrypt",
    "Argon2",
  ],

  // CMS
  cms: [
    "WordPress",
    "Strapi",
    "Contentful",
    "Sanity",
    "Ghost",
    "Directus",
    "Payload CMS",
  ],

  // Real-time
  realtime: [
    "Socket.io",
    "WebSockets",
    "Server-Sent Events",
    "Firebase Realtime",
    "Pusher",
    "Ably",
    "SignalR",
  ],
};

const categories = Object.keys(techOptions);

// ---------------------- TechSelector Component ----------------------
const TechSelector = ({ techSelections, setTechSelections }) => {
  // Format category names for display with consistent emojis
  const formatCategoryName = (category) => {
    const formatMap = {
      // Languages
      languages: "💻 Languages",

      // Frontend
      frontend_frameworks: "⚛️ Frontend Frameworks",
      frontend_styling: "🎨 Frontend Styling",
      frontend_tools: "🛠️ Frontend Tools",

      // Backend
      backend_frameworks: "🔧 Backend Frameworks",
      backend_runtime: "🚀 Backend Runtime",

      // Database
      relational_db: "🗃️ Relational DB",
      nosql_db: "📊 NoSQL DB",
      search_db: "🔍 Search DB",

      // Mobile
      native_mobile: "📱 Native Mobile",
      cross_platform: "📲 Cross-Platform",

      // DevOps & Infrastructure
      containers: "📦 Containers",
      iac: "🏗️ Infrastructure as Code",
      monitoring: "📈 Monitoring",

      // AI/ML
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
    <div className="tech-selector">
      <div className="tech-selector-header">
        <label className="tech-selector-label">🛠️ Technologies</label>
        <span className="tech-selection-count">
          {techSelections.filter((s) => s.category && s.technology).length}{" "}
          selected
        </span>
      </div>

      <div className="tech-selections-container">
        {techSelections.map((sel, idx) => {
          const usedCats = techSelections
            .map((s, i) => (i !== idx ? s.category : null))
            .filter(Boolean);
          const availableCats = categories.filter(
            (cat) => !usedCats.includes(cat)
          );

          return (
            <div key={idx} className="tech-selection-row">
              {/* Category Select */}
              <div className="select-wrapper">
                <select
                  value={sel.category}
                  onChange={(e) => handleCategoryChange(idx, e.target.value)}
                  className="category-select"
                >
                  <option value="">📁 Select Category</option>
                  {availableCats.map((cat) => (
                    <option key={cat} value={cat}>
                      {formatCategoryName(cat)}
                    </option>
                  ))}
                </select>
                <div className="select-arrow">▼</div>
              </div>

              {/* Technology Select */}
              <div className="select-wrapper">
                <select
                  value={sel.technology}
                  onChange={(e) => handleTechnologyChange(idx, e.target.value)}
                  disabled={!sel.category}
                  className="technology-select"
                >
                  <option value="">⚙️ Select Technology</option>
                  {sel.category &&
                    techOptions[sel.category]?.map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                </select>
                <div className="select-arrow">▼</div>
              </div>

              {/* Remove button */}
              {techSelections.length > 1 && (
                <button
                  onClick={() => handleRemove(idx)}
                  className="remove-button"
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
        <button onClick={handleAdd} className="add-tech-button">
          <span className="add-icon">+</span>
          Add Technology Stack
        </button>
      )}
    </div>
  );
};

// ---------------------- Complexity Levels ----------------------
const complexityLevels = {
  25: {
    label: "BEGINNER",
    color: "complexity-beginner",
    description: "Simple projects, basic features, ideal for learning",
  },
  50: {
    label: "INTERMEDIATE",
    color: "complexity-intermediate",
    description: "Moderate complexity, multiple features, good for portfolio",
  },
  75: {
    label: "ADVANCED",
    color: "complexity-advanced",
    description: "Complex systems, advanced features, production-ready",
  },
  100: {
    label: "EXPERT",
    color: "complexity-expert",
    description: "Enterprise-level, cutting-edge tech, scalable architecture",
  },
};

// ---------------------- Main Component ----------------------
export default function ProjectIdeaGenerator() {
  const [techSelections, setTechSelections] = useState([
    { category: "", technology: "" },
  ]);
  const [complexity, setComplexity] = useState(50);
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const toArray = (val) => {
    if (!val && val !== 0) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === "string") {
      if (val.includes("\n"))
        return val
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean);
      if (val.includes(","))
        return val
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
      return [val];
    }
    return [String(val)];
  };

  const formatIdeaObject = (obj) => {
    const sections = [];

    const title = obj.title || obj.name || obj.project_title || "";
    const description =
      obj.description || obj.desc || obj.short_description || "";
    const features = toArray(
      obj.features || obj.key_features || obj.feature_list || []
    );
    const impact = obj.impact || obj.potential_impact || "";
    const targetUsers = obj.target_users || obj.targetUsers || obj.users || "";
    const techStack = toArray(
      obj.tech_stack ||
        obj.techStack ||
        obj.tech ||
        obj.suggested_tech_stack ||
        []
    );
    const futureEnhancements = toArray(
      obj.future_enhancements ||
        obj.futureEnhancements ||
        obj.enhancements ||
        obj.possible_future_enhancements ||
        []
    );

    if (title) sections.push(`Project Title|${title}`);
    if (description) sections.push(`Description|${description}`);
    if (features.length)
      sections.push(`Key Features|${features.map((f) => `• ${f}`).join("\n")}`);
    if (impact) sections.push(`Potential Impact|${impact}`);
    if (targetUsers) sections.push(`Target Users|${targetUsers}`);
    if (techStack.length)
      sections.push(
        `Suggested Tech Stack|${techStack.map((t) => `• ${t}`).join("\n")}`
      );
    if (futureEnhancements.length)
      sections.push(
        `Possible Future Enhancements|${futureEnhancements
          .map((f) => `• ${f}`)
          .join("\n")}`
      );

    Object.keys(obj).forEach((key) => {
      if (
        ![
          "title",
          "description",
          "features",
          "impact",
          "target_users",
          "tech_stack",
          "future_enhancements",
        ].includes(key)
      ) {
        sections.push(`${key}|${JSON.stringify(obj[key], null, 2)}`);
      }
    });

    if (sections.length === 0)
      return `Project Idea|${JSON.stringify(obj, null, 2)}`;

    return sections.join("\n\n");
  };

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
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          techSelections: selectedTechnologies,
          complexity,
        }),
      });

      const data = await res.json();

      let ideaPayload =
        data && data.projectIdea !== undefined ? data.projectIdea : data;

      let formatted = "";

      if (!ideaPayload && ideaPayload !== 0) {
        formatted = "";
      } else if (typeof ideaPayload === "string") {
        const trimmed = ideaPayload.trim();
        if (
          (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
          (trimmed.startsWith("[") && trimmed.endsWith("]"))
        ) {
          try {
            const parsed = JSON.parse(trimmed);
            formatted = formatIdeaObject(parsed);
          } catch (e) {
            formatted = ideaPayload;
          }
        } else {
          formatted = ideaPayload;
        }
      } else if (typeof ideaPayload === "object") {
        if (ideaPayload.raw && typeof ideaPayload.raw === "string") {
          formatted = ideaPayload.raw;
        } else {
          formatted = formatIdeaObject(ideaPayload);
        }
      } else {
        formatted = String(ideaPayload);
      }

      setProjectIdea(formatted);
    } catch (err) {
      console.error(err);
      setError("Failed to generate project idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(projectIdea.replace(/\|/g, "\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getComplexityLevel = (value) => {
    const level = Object.keys(complexityLevels)
      .reverse()
      .find((level) => value >= parseInt(level));
    return complexityLevels[level] || complexityLevels[50];
  };

  const renderProjectIdea = () => {
    if (!projectIdea) return null;

    const sections = projectIdea.split("\n\n");

    return (
      <div className="project-idea-output">
        <div className="output-header-section">
          <h2 className="output-main-title">Generated Project Idea</h2>
        </div>

        <div className="idea-content">
          {sections.map((section, index) => {
            const [title, ...content] = section.split("|");
            const contentText = content.join("|");

            if (title === "Project Title") {
              return (
                <div key={index} className="project-title-section">
                  <div className="section-label">Project Title</div>
                  <h3 className="project-title">{contentText}</h3>
                </div>
              );
            }

            if (title === "Description") {
              return (
                <div key={index} className="description-section">
                  <div className="section-label">Description</div>
                  <p className="description-text">{contentText}</p>
                </div>
              );
            }

            if (title === "Key Features") {
              return (
                <div key={index} className="features-section">
                  <div className="section-label">Key Features</div>
                  <ul className="features-list">
                    {contentText.split("\n").map((line, lineIndex) => (
                      <li key={lineIndex} className="feature-item">
                        {line.replace("• ", "")}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            if (title === "Potential Impact") {
              return (
                <div key={index} className="impact-section">
                  <div className="section-label">Potential Impact</div>
                  <p className="impact-text">{contentText}</p>
                </div>
              );
            }

            if (title === "Target Users") {
              return (
                <div key={index} className="users-section">
                  <div className="section-label">Target Users</div>
                  <p className="users-text">{contentText}</p>
                </div>
              );
            }

            if (title === "Suggested Tech Stack") {
              return (
                <div key={index} className="tech-stack-section">
                  <div className="section-label">Suggested Tech Stack</div>
                  <ul className="tech-stack-list">
                    {contentText.split("\n").map((line, lineIndex) => (
                      <li key={lineIndex} className="tech-item">
                        {line.replace("• ", "")}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Default case for any other sections
            return (
              <div key={index} className="generic-section">
                <div className="section-label">{title}</div>
                <div className="section-content">
                  {contentText.includes("{") || contentText.includes("[") ? (
                    <pre className="code-block">{contentText}</pre>
                  ) : (
                    contentText.split("\n").map((line, lineIndex) => (
                      <div key={lineIndex} className="content-line">
                        {line.startsWith("• ") ? (
                          <div className="bullet-item">
                            <span className="bullet">•</span>
                            <span>{line.substring(2)}</span>
                          </div>
                        ) : (
                          line
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Grid Background */}
      <div className="background-grid"></div>

      {/* Animated Orbs */}
      <div className="orb orb-purple"></div>
      <div className="orb orb-blue"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header-section">
          <div className="status-badge">
            <div className="status-dot"></div>
            <span>AI Project Generator</span>
          </div>
          <h1 className="main-title">
            Create Your Next
            <span className="gradient-text">Masterpiece</span>
          </h1>
          <p className="subtitle">
            Choose from 150+ technologies across 20+ categories, set complexity
            level, and generate innovative project ideas powered by AI.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="main-content-grid">
          {/* Left Column - Technologies */}
          <div className="tech-column">
            <div className="card tech-card">
              <TechSelector
                techSelections={techSelections}
                setTechSelections={setTechSelections}
              />
            </div>
          </div>

          {/* Right Column - Complexity & Generate */}
          <div className="controls-column">
            {/* Complexity Card */}
            <div className="card complexity-card">
              <label className="complexity-label">📊 Complexity Level</label>

              <div className="complexity-slider-container">
                <div className="complexity-display">
                  <span
                    className={`complexity-level ${
                      getComplexityLevel(complexity).color
                    }`}
                  >
                    {getComplexityLevel(complexity).label}
                  </span>
                  <div className="complexity-value">{complexity}/100</div>
                  <div className="complexity-description">
                    {getComplexityLevel(complexity).description}
                  </div>
                </div>

                <input
                  type="range"
                  min="1"
                  max="100"
                  value={complexity}
                  onChange={(e) => setComplexity(Number(e.target.value))}
                  className="complexity-slider"
                />

                <div className="complexity-labels">
                  <span>Simple</span>
                  <span>Balanced</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Complexity Indicators */}
              <div className="complexity-indicators">
                {[25, 50, 75, 100].map((level) => (
                  <div
                    key={level}
                    className={`complexity-indicator ${
                      complexity >= level ? "active" : ""
                    }`}
                  >
                    <div className={complexityLevels[level].color}>
                      {complexityLevels[level].label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generate Card */}
            <div className="card generate-card">
              <div className="generate-content">
                {error && <div className="error-message">⚠️ {error}</div>}

                <button
                  onClick={generateProjectIdea}
                  disabled={isLoading}
                  className="generate-button"
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Generating Your Idea...
                    </>
                  ) : (
                    <>🚀 Generate Project Idea</>
                  )}
                </button>

                <div className="generate-footer">
                  Powered by AI • 150+ Technologies • 20+ Categories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="card output-card">
          <div className="output-header">
            <h2 className="output-title">💡 Generated Project Idea</h2>
            {projectIdea && (
              <button onClick={copyToClipboard} className="copy-button">
                {copied ? "✓ Copied!" : "📋 Copy to Clipboard"}
              </button>
            )}
          </div>

          <div className="output-content">
            {projectIdea ? (
              <div className="generated-idea">{renderProjectIdea()}</div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">💡</div>
                <p className="empty-title">Your Project Idea Awaits</p>
                <p className="empty-description">
                  Select your preferred technologies, adjust the complexity
                  level, and let AI generate your next amazing project idea!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          color: white;
          position: relative;
          overflow-x: hidden;
        }

        .background-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 4rem 4rem;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%);
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(3rem);
          animation: pulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        .orb-purple {
          top: 25%;
          left: 25%;
          width: 16rem;
          height: 16rem;
          background: rgba(139, 92, 246, 0.1);
        }

        .orb-blue {
          bottom: 25%;
          right: 25%;
          width: 24rem;
          height: 24rem;
          background: rgba(59, 130, 246, 0.1);
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 80rem;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        @media (min-width: 768px) {
          .content-wrapper {
            padding: 2rem;
          }
        }

        /* Header Styles */
        .header-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          padding: 1rem 2rem;
          margin-bottom: 1.5rem;
        }

        .status-dot {
          width: 0.75rem;
          height: 0.75rem;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .main-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: white;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .main-title {
            font-size: 4.5rem;
          }
        }

        .gradient-text {
          display: block;
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #8b5cf6;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 42rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Card Styles */
        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2rem;
        }

        .tech-card, .complexity-card, .generate-card, .output-card {
          margin-bottom: 2rem;
        }

        /* Main Content Grid */
        .main-content-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 1024px) {
          .main-content-grid {
            grid-template-columns: 2fr 1fr;
          }
        }

        /* Tech Selector Styles */
        .tech-selector-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .tech-selector-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #d1d5db;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-selection-count {
          font-size: 0.75rem;
          color: #9ca3af;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
        }

        .tech-selections-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tech-selection-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .select-wrapper {
          flex: 1;
          position: relative;
        }

        .category-select, .technology-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          outline: none;
          transition: all 0.2s;
          appearance: none;
          cursor: pointer;
          padding-right: 2.5rem;
        }

        .category-select:focus, .technology-select:focus {
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
        }

        .technology-select:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .select-arrow {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
        }

        .remove-button {
          padding: 0.75rem 1rem;
          color: #f87171;
          transition: color 0.2s;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .remove-button:hover {
          color: #fca5a5;
          border-color: #f87171;
        }

        .add-tech-button {
          margin-top: 1rem;
          width: 100%;
          padding: 0.75rem;
          border: 2px dashed rgba(255, 255, 255, 0.2);
          border-radius: 0.75rem;
          color: #9ca3af;
          transition: all 0.2s;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .add-tech-button:hover {
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .add-icon {
          font-size: 1.125rem;
        }

        /* Fix for dropdown options */
        .category-select option, .technology-select option {
          background: #1f2937 !important;
          color: white !important;
          padding: 12px !important;
        }

        .category-select option:first-child, .technology-select option:first-child {
          color: #9ca3af !important;
        }

        /* Global select styles */
        select {
          background: rgba(255, 255, 255, 0.05) !important;
          color: white !important;
        }

        select option {
          background: #1f2937 !important;
          color: white !important;
        }

        /* Complexity Styles */
        .complexity-label {
          display: block;
          font-size: 1.125rem;
          font-weight: 600;
          color: #d1d5db;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .complexity-slider-container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .complexity-display {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .complexity-level {
          font-size: 1.5rem;
          font-weight: bold;
          display: block;
        }

        .complexity-beginner { color: #10b981; }
        .complexity-intermediate { color: #f59e0b; }
        .complexity-advanced { color: #f97316; }
        .complexity-expert { color: #ef4444; }

        .complexity-value {
          font-size: 1.125rem;
          color: #d1d5db;
          margin-top: 0.5rem;
        }

        .complexity-description {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-top: 0.25rem;
        }

        .complexity-slider {
          width: 100%;
          height: 0.75rem;
          background: #374151;
          border-radius: 0.5rem;
          outline: none;
          margin-bottom: 1rem;
          -webkit-appearance: none;
        }

        .complexity-slider::-webkit-slider-thumb {
          appearance: none;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
          transition: all 0.2s ease;
        }

        .complexity-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.7);
        }

        .complexity-slider::-moz-range-thumb {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        .complexity-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #9ca3af;
          padding: 0 0.5rem;
        }

        .complexity-indicators {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          font-size: 0.75rem;
        }

        .complexity-indicator {
          text-align: center;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .complexity-indicator.active {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        /* Generate Button Styles */
        .generate-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .error-message {
          padding: 1rem;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.5);
          border-radius: 0.75rem;
          color: #fecaca;
          font-size: 0.875rem;
        }

        .generate-button {
          width: 100%;
          background: linear-gradient(to right, #7c3aed, #2563eb);
          color: white;
          font-weight: bold;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.2s;
          transform: scale(1);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 1.125rem;
        }

        .generate-button:hover:not(:disabled) {
          transform: scale(1.02);
          background: linear-gradient(to right, #6d28d9, #1d4ed8);
        }

        .generate-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .generate-button:disabled {
          opacity: 0.5;
        }

        .loading-spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .generate-footer {
          font-size: 0.75rem;
          color: #9ca3af;
          text-align: center;
        }

        /* Output Styles */
        .output-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .output-title {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, white, #d1d5db);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .copy-button {
          font-size: 0.875rem;
          color: #9ca3af;
          transition: color 0.2s;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .copy-button:hover {
          color: white;
        }

        .output-content {
          min-height: 400px;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 24rem;
          text-align: center;
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .empty-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .empty-description {
          color: #9ca3af;
          max-width: 28rem;
          margin: 0 auto;
        }

        /* New Project Idea Output Styles */
        .project-idea-output {
          background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1));
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 2rem;
        }

        .output-header-section {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .output-main-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: white;
          margin: 0;
        }

        .idea-content {
          space-y-6;
        }

        .section-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .project-title-section {
          margin-bottom: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin: 0;
          background: linear-gradient(to right, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description-section {
          margin-bottom: 2rem;
        }

        .description-text {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 1rem;
          margin: 0;
        }

        .features-section {
          margin-bottom: 2rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          color: #d1d5db;
          line-height: 1.6;
          padding: 0.5rem 0;
          border-left: 2px solid #8b5cf6;
          padding-left: 1rem;
          margin-bottom: 0.5rem;
        }

        .feature-item:last-child {
          margin-bottom: 0;
        }

        .impact-section,
        .users-section,
        .tech-stack-section {
          margin-bottom: 2rem;
        }

        .impact-text,
        .users-text {
          color: #d1d5db;
          line-height: 1.6;
          margin: 0;
        }

        .tech-stack-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-item {
          background: rgba(139, 92, 246, 0.2);
          color: #c4b5fd;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(139, 92, 246, 0.3);
          font-size: 0.875rem;
        }

        .generic-section {
          margin-bottom: 1.5rem;
        }

        .section-content {
          color: #d1d5db;
          line-height: 1.6;
        }

        .content-line {
          margin-bottom: 0.5rem;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .bullet {
          color: #8b5cf6;
          margin-top: 0.125rem;
        }

        .code-block {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          padding: 1rem;
          overflow-x: auto;
          font-size: 0.875rem;
          color: #e2e8f0;
        }

        .generated-idea {
          min-height: 400px;
          overflow-y: auto;
        }

        .generated-idea::-webkit-scrollbar {
          width: 8px;
        }

        .generated-idea::-webkit-scrollbar-track {
          background: transparent;
        }

        .generated-idea::-webkit-scrollbar-thumb {
          background-color: rgba(139,92,246,0.3);
          border-radius: 4px;
        }

        .generated-idea::-webkit-scrollbar-thumb:hover {
          background-color: rgba(139,92,246,0.5);
        }
      `}</style>
    </div>
  );
}
