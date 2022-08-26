import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./sass/app.scss";

import Home from "./routes/Home";
import About from "./routes/About";
import Experience from "./routes/Experience";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";

import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
