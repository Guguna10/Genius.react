import Topbar from "./components/topBar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/protfolio/Portfolio"
import Works from "./components/works/Works"
import Testemonials from "./components/testemonials/Testemonials"
import Menu from "./components/menu/menu"
import Contact from "./components/contact/Contact"
import "./app.scss" 
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">

          <Intro/>
          <Portfolio/>
          <Works/>
          <Testemonials/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
