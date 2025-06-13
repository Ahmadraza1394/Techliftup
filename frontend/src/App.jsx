// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cases from "./Cases";
import Team from "./Team";
import CaseDetail from "./CaseDetail";
import Services from "./Services";
import Chatbot from "./components/Chatbot";
import LeadsDashboard from "./pages/LeadsDashboard";
import { LanguageProvider } from "./context/LanguageContext";
import "./assets/styles/index.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:caseId" element={<CaseDetail />} />
          <Route path="/admin/leads" element={<LeadsDashboard />} />
        </Routes>
        <Chatbot /> {/* Chatbot appears on all pages */}
      </Router>
    </LanguageProvider>
  );
}

export default App;
