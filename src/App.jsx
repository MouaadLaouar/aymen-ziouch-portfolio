import "./scss/App.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Test from "./components/test";
import Animation from "./components/Animation";


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Animation />
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <Project /> } />
          <Route exact path="/about/:id" element={ <Test />} />
        </Routes> 
      </BrowserRouter> */}



    </div>
  )
}

export default App
