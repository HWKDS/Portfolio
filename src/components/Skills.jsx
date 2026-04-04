export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Databases", "APIs"],
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Docker", "npm/yarn"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-4xl font-bold mb-16 text-center text-blue-400">
          Skills
        </h3>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="text-center">
              <h4 className="text-2xl font-bold mb-6 text-cyan-400">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg hover:border-blue-400 transition"
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
