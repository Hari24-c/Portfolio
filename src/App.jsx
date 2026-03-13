import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Background from "./components/Background";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>

      <Background />

      <Navbar />

      <Hero />

      <Projects />

      <Skills />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;