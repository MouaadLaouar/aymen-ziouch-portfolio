import "./scss/App.scss"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Animation from "./components/Animation";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Animation />
      <Home />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
