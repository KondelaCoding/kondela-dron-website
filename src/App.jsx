import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Background />
      <About />
      <div className="separator"></div>
    </>
  );
}
