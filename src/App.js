import './App.css';


import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { ReactTyped } from "react-typed";

/* Page Nav Imports */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import ContactsPage from "./pages/contactspage";
import ProjectsPage from "./pages/projectspage";
import ResumePage from "./pages/resumepage";
import AboutPage from "./pages/aboutpage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

