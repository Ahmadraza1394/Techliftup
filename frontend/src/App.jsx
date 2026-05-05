// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home";
import About from "./About";
import Cases from "./Cases";
import Team from "./Team";
import CaseDetail from "./CaseDetail";
import Services from "./Services";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Chatbot from "./components/Chatbot";
import LeadsDashboard from "./pages/LeadsDashboard";
import AIAutomation from "./pages/services/AIAutomation";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import WordpressDevelopment from "./pages/services/WordpressDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import ColdEmailCampaign from "./pages/services/ColdEmailCampaign";
import SEOMarketing from "./pages/services/SEOMarketing";
import EmailMarketing from "./pages/services/EmailMarketing";
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
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route
              path="/services/website-development"
              element={<WebsiteDevelopment />}
            />
            <Route
              path="/services/social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route
              path="/services/wordpress-development"
              element={<WordpressDevelopment />}
            />
            <Route
              path="/services/app-development"
              element={<AppDevelopment />}
            />
            <Route
              path="/services/cold-email-campaign"
              element={<ColdEmailCampaign />}
            />
            <Route path="/services/seo-marketing" element={<SEOMarketing />} />
            <Route
              path="/services/email-marketing"
              element={<EmailMarketing />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:caseId" element={<CaseDetail />} />
            <Route path="/admin/leads" element={<LeadsDashboard />} />
          </Routes>
          <Chatbot /> {/* Chatbot appears on all pages */}
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
