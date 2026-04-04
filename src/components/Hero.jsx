export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black px-6 py-20"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">
            Keshav Dev Sharma
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            <span className="block">📧 keshavdevsharma0902@gmail.com</span>
            <span className="block">📱 +91 7982867584</span>
          </p>
          <p className="text-xl text-gray-300 mb-6 font-light">
            Full Stack Developer & AI Enthusiast
          </p>
          <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-md">
            Computer Science undergraduate with hands-on experience in Python,
            React, and backend development. Experienced in building
            network-focused and AI-based applications.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/hwkds"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black hover:bg-gray-200 transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/keshavdevsharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:keshavdevsharma0902@gmail.com"
              className="px-6 py-2 bg-white text-black hover:bg-gray-200 transition text-sm"
            >
              Email
            </a>
            <a
              href="docs/resume.pdf"
              download
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition text-sm"
            >
              Resume PDF
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-64 md:h-64 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/79627715?v=4"
              alt="Keshav Dev Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
