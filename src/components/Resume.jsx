import resumePdf from "../docs/resume.pdf";

export default function Resume() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      school: "Dr. A.P.J. Abdul Kalam Technical University (ABESIT)",
      location: "Ghaziabad",
      status: "Undergraduate",
    },
    {
      degree: "Senior Secondary (Class XII)",
      school: "Bhartiya Vidya Bhawan",
      year: "2023",
    },
    {
      degree: "Secondary (Class X)",
      school: "Bhartiya Vidya Bhavan",
      year: "2021",
    },
  ];

  const skills = {
    languages: ["Python", "JavaScript", "C"],
    frontend: ["React.js", "HTML", "CSS"],
    backend: ["Node.js", "Flask", "REST APIs"],
    databases: ["MongoDB"],
    tools: ["Git", "Linux", "Docker (basic)", "API Integration"],
  };

  const certifications = [
    "Linux",
    "Database Management Systems (DBMS)",
    "Data Structures and Algorithms",
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-white">Resume</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6">
                Resume Preview
              </h3>
              <div className="w-full h-[650px] border border-gray-700 rounded overflow-hidden bg-gray-950">
                <iframe
                  src={resumePdf}
                  title="Keshav Dev Sharma Resume"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-white pl-4">
                    <h4 className="font-semibold text-white">{item.degree}</h4>
                    <p className="text-sm text-gray-400">{item.school}</p>
                    <p className="text-xs text-gray-500">
                      {item.location || item.year || item.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="text-sm text-gray-400">
                    • {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-white mb-2">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 text-xs text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white mb-2">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 text-xs text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white mb-2">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 text-xs text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white mb-2">
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 text-xs text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 text-xs text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <a
                  href={resumePdf}
                  download
                  className="inline-block w-full text-center px-4 py-2 bg-white text-black hover:bg-gray-200 transition text-sm font-semibold rounded"
                >
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
