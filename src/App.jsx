import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About"; // Import About Page Component
import Team from "./Team"; // Import About Page Component
// import Blog from "./Blog"; // Import About Page Component
import "./assets/styles/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/team" element={<Team />} /> {/* Add About route */}
        {/* <Route path="/blog" element={<Blog />} /> Add About route */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
