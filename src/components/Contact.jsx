export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Open to new opportunities and interesting conversations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="https://github.com/hwkds"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black hover:bg-gray-200 transition font-medium text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/keshavdevsharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition font-medium text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:keshavdevsharma0902@gmail.com"
            className="px-6 py-2 bg-white text-black hover:bg-gray-200 transition font-medium text-sm"
          >
            Email
          </a>
        </div>
        <p className="text-gray-500 text-sm">© 2026 Keshav Dev Sharma</p>
      </div>
    </section>
  );
}
