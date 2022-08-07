import "./scss/App.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Animation from "./components/Animation";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Animation />
      <Home />
      <Projects />
      <AboutMe />
      <Contact />


    </div>
  )
}

export default App
