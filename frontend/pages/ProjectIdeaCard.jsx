export default function ProjectIdeaCard({ idea }) {
  if (!idea) return null;

  // If raw string exists
  if (idea.raw) {
    return <div className="whitespace-pre-wrap text-gray-300">{idea.raw}</div>;
  }

  const {
    title,
    description,
    features = [],
    impact,
    target_users,
    tech_stack = [],
    future_enhancements = [],
  } = idea;

  const renderSection = (sectionTitle, content, isList = false) => {
    if (!content || (Array.isArray(content) && content.length === 0))
      return null;

    return (
      <div className="mb-6 last:mb-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {sectionTitle}
          </h3>
        </div>
        <div className="text-gray-300 leading-relaxed">
          {isList
            ? content.map((line, idx) => (
                <div key={idx} className="mb-2 flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{line}</span>
                </div>
              ))
            : content}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderSection("Project Title", title)}
      {renderSection("Short Description", description)}
      {renderSection("Key Features", features, true)}
      {renderSection("Potential Impact", impact)}
      {renderSection("Target Users", target_users)}
      {renderSection("Suggested Tech Stack", tech_stack, true)}
      {renderSection("Possible Future Enhancements", future_enhancements, true)}
    </div>
  );
}
