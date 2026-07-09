import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      color: "blue",
      skills: ["React", "JavaScript", "TypeScript", "Java (Spring Boot)", "C", "C++"],
    },
    {
      title: "Backend & APIs",
      color: "pink",
      skills: [
        "REST API Design",
        "Microservices",
        "JWT/OAuth",
        "SFTP",
        "Third-Party API Integration",
      ],
    },
    {
      title: "AI & ML",
      color: "purple",
      skills: [
        "Neural Network",
        "LLM API Integration",
        "TensorFlow",
        "RAG",
        "LlamaIndex",
        "Prompt Engineering",
        "LangChain",
      ],
    },
    {
      title: "Database, Cloud & DevOps",
      color: "teal",
      skills: [
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Azure ",
      ],
    },
    {
      title: "Software Engineering",
      color: "red",
      skills: [
        "System Design",
        "Debugging",
        "Unit Testing",
        "Agile/Scrum",
        "Jira",
        "REST APIs",
        "Object-Oriented Programming",
      ],
    },
  ];

  const colorClasses = {
    blue: { heading: "text-blue-600", badge: "bg-blue-100" },
    pink: { heading: "text-pink-600", badge: "bg-pink-100" },
    purple: { heading: "text-purple-600", badge: "bg-purple-100" },
    teal: { heading: "text-teal-600", badge: "bg-teal-100" },
    red: { heading: "text-red-600", badge: "bg-red-100" },
  };

  return (
    <section id="skills" className="bg-theme-skills py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="section-heading">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white/70 backdrop-blur-sm border border-blue-100 shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h4
              className={`text-xl font-semibold mb-4 font-mono ${colorClasses[category.color].heading}`}
            >
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full ${colorClasses[category.color].badge}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
