import React, { useEffect, useState } from "react";

const projects = [
  {
    title: "CareerOS — ATS for Candidates",
    description:
      "Manage job applications, resumes, and professional profiles — all in one place. CareerOS is a full-featured Application Tracking System (ATS) built for job seekers to organize their search, tailor materials with AI, prepare for interviews, and grow their professional network.",
    links: [
      {
        label: "View on GitHub →",
        href: "https://github.com/Sujal-Raj-ux/CareerOS",
      },
    ],
  },
  {
    title: "MenuIQ",
    description:
      "AI-powered restaurant menu optimization platform. MenuIQ analyzes transaction and ordering data to surface menu-engineering insights, cross-selling opportunities, and actionable recommendations — with an agentic chat assistant that answers questions grounded in pre-computed analytics.",
    stack: "React · FastAPI · PostgreSQL · Pandas · LangChain · Groq (Llama 3.3 70B)",
    links: [
      {
        label: "View on GitHub →",
        href: "https://github.com/Sujal-Raj-ux/MenuIQ",
      },
    ],
  },
  {
    title: "Cricket Stats Analysis: IPL Player Outlook",
    description:
      "Web dashboard for IPL batting form, innings history, and a simple next-inning runs outlook, backed by a FastAPI service and your dataset (CSV or Postgres via Supabase).",
    links: [
      {
        label: "View Live →",
        href: "https://cricket-player-stats-prediction-1.onrender.com/",
      },
      {
        label: "View on GitHub →",
        href: "https://github.com/Sujal-Raj-ux/Cricket-player-stats-prediction",
      },
    ],
  },
  {
    title: "Supervised Machine Learning Model",
    description:
      "Explored and cleaned a 10+ feature dataset, built logistic regression and decision tree models in Python, and compared their performance using accuracy, precision, and MSE.",
    links: [
      {
        label: "View on GitHub →",
        href: "https://github.com/Sujal-Raj-ux/Supervised-Machine-Learning-Model",
      },
    ],
  },
  {
    title: "Compiler Design (SFort95)",
    description:
      "Built a compiler with lexical analyzer, parser, and interpreter for a custom programming language using C++.",
    links: [
      {
        label: "View on GitHub →",
        href: "https://github.com/Sujal-Raj-ux/Lexical-Analyzer-Parser-and-Interpreter",
      },
    ],
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index) => {
    const total = projects.length;
    setActiveIndex(((index % total) + total) % total);
  };

  const goNext = () => goToSlide(activeIndex + 1);
  const goPrev = () => goToSlide(activeIndex - 1);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-theme-projects"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />

      <div className="relative container mx-auto max-w-3xl">
        <h2 className="section-heading">Projects</h2>

        <div
          className="relative px-10 sm:px-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="w-full flex-shrink-0 flex justify-center px-2"
                >
                  <div className="glass-card glass-card-square break-words p-5 sm:p-6 flex flex-col overflow-hidden">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                      {project.title}
                    </h4>
                    <div className="flex-1 overflow-y-auto pr-1 mb-3">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                      {project.stack && (
                        <p className="text-gray-600 text-xs sm:text-sm mt-3">{project.stack}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-white/40">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-700 hover:text-blue-600 font-medium transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project"
            className="glass-button absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-lg text-xl text-gray-800 hover:scale-110 transition-transform"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next project"
            className="glass-button absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-lg text-xl text-gray-800 hover:scale-110 transition-transform"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
