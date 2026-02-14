import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Page Nav Imports */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ResumePage from "./pages/resumepage";
import ContactsPage from "./pages/contactspage";
import ProjectsPage from "./pages/projectspage";
import AboutPage from "./pages/aboutme/aboutpage";
import useDarkMode from './hooks/useDarkMode.js';
import ScrollToTop from './helper components/ScrollToTop.jsx';

export default function App() {
  const {isDark, setIsDark} = useDarkMode();
  return (
    <Router>
      <button className="darkmode-toggle" onClick={() => setIsDark(prev => !prev)}>dark mode</button>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
