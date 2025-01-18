import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home"; // Corrected path
// import NotFound from "./NotFound"; // Corrected path

import About from "./About"; // Corrected path
import Cases from "./Cases"; // Corrected path

import Team from "./Team"; // Corrected path
// import Blog from "./Blog"; // Import Blog Page Component
import "./assets/styles/index.css"; // Corrected path

import CaseDetail from "./CaseDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/team" element={<Team />} /> {/* Add Team route */}
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/:caseId" element={<CaseDetail />} />
        {/* Case Detail route */}
        {/* <Route path="*" element={<NotFound />} /> Not Found route */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
