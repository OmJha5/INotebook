import './App.css';
import Navbar from "./component/Navbar.js"
import About from "./component/About.js"
import Home from "./component/Home.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

          <Navbar/>

          <Routes>
              <Route path="/home" element={ <Home/> }> </Route>
              <Route path="/about" element={ <About/> }> </Route>
          </Routes>

    </Router>
  );
}

export default App;
