import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Background />
      <About />
      <div className="separator"></div>
      <Projects />
    </>
  );
}
