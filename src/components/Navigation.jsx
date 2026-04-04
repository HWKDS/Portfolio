export default function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">KDS</h1>
        <div className="flex gap-8 text-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-white transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="text-gray-400 hover:text-white transition"
          >
            Resume
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-400 hover:text-white transition"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
