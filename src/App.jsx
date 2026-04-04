import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
