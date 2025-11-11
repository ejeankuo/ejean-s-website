import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Page Nav Imports */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ResumePage from "./pages/resumepage";
import ContactsPage from "./pages/contactspage";
import ProjectsPage from "./pages/projectspage";
import AboutPage from "./pages/aboutme/aboutpage";

export default function App() {
  return (
    <Router>
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
