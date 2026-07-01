export default function Projects() {
  const projects = [
    {
      title: "ClearStack - AI Notification Manager",
      description: [
        "Developed an Android application that groups notifications into conversation threads using NotificationListenerService",
        "Built a privacy-first local LLM summarization pipeline with Ollama for on-device notification summaries",
        "Implemented conversation memory and context management to optimize token usage while preserving relevant history",
        "Created a reactive Jetpack Compose UI with real-time updates using StateFlow and a scalable local inference architecture",
      ],
      technologies: ["Android", "Kotlin", "Jetpack Compose", "Ollama", "LLMs"],
    },
    {
      title: "AI-Powered Expense Tracker",
      description: [
        "Developed a full-stack expense tracker with secure authentication and email OTP verification, supporting 300+ transactions",
        "Integrated Gemini API to generate AI-powered spending insights and personalized cost-saving recommendations",
        "Built REST APIs with <100 ms response time for efficient CRUD operations and data management",
        "Implemented interactive dashboards for expense visualization and financial analysis",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
      link: "https://expense.hwkds.dev",
      github: "https://github.com/HWKDS/expense-Tracker",
    },
    {
      title: "DNS Server",
      description: [
        "Built a custom DNS server using UDP sockets to process domain name resolution requests",
        "Implemented DNS query parsing, request-response handling, and domain-to-IP mapping",
        "Simulated real-world DNS behavior, including packet parsing and response generation",
        "Designed a modular networking architecture for reliable request processing and future extensibility",
      ],
      technologies: ["Node.js", "Networking", "UDP Sockets"],
      github: "https://github.com/HWKDS/Simple-DNS-Server",
    },
  ];

  const openSource = [
    {
      title: "Black Formatter",
      description: [
        "Improved code formatting logic for better consistency across Python projects via PR#4845",
        "Enhanced formatting reliability and maintainability of widely-used developer tooling",
      ],
      org: "Python Software Foundation",
      link: "https://github.com/psf/black",
    },
    {
      title: "PrivatePing",
      description: [
        "Fixed backend issues via PR#29, improving system stability and request handling",
        "Enhanced reliability by resolving bugs affecting API responses and server-side logic",
      ],
      link: "https://github.com/PrivatePing/PrivatePing",
    },
    {
      title: "Metaverse Front-End Playground",
      description: [
        "Improved UI behavior and resolved front-end inconsistencies via PR#822",
        "Identified and fixed issues impacting user experience and cross-page functionality",
      ],
      link: "https://github.com/METAVERSE/Front-End-Playground",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-white">Selected Work</h2>
        <div className="space-y-12 mb-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group block border-b border-gray-800 pb-12 last:border-b-0"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <ul className="text-gray-400 mb-4 max-w-2xl space-y-1">
                {project.description.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-900 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white border-b border-white hover:text-gray-300 transition"
                  >
                    View Project →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white border-b border-white hover:text-gray-300 transition"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Open Source Contributions
          </h3>
          <div className="space-y-8">
            {openSource.map((contribution, idx) => (
              <a
                key={idx}
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:opacity-70 transition"
              >
                <h4 className="font-semibold text-white mb-2">
                  {contribution.title}
                </h4>
                {contribution.org && (
                  <p className="text-xs text-gray-500 mb-2">
                    {contribution.org}
                  </p>
                )}
                <ul className="text-sm text-gray-400 space-y-1 mb-2">
                  {contribution.description.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
                <span className="text-sm text-white border-b border-white">
                  View on GitHub →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
