import './App.css';


/* Page Nav Imports */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ResumePage from "./pages/resumepage";
import ContactsPage from "./pages/contactspage";
import ProjectsPage from "./pages/projectspage";
import AboutPage from "./pages/aboutpage";

// Spotify API Client ID
var client_id = 'c20dcd145118461f81999f6cee9eea75';
var client_secret = 'cd0994ff43504b70bf47f4d9d02f2d76';
var redirect_uri = 'https://example.com/callback';

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
