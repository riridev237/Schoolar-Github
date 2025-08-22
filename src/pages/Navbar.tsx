import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../Styles/Navbar.css';
import { Moon, Sun } from 'lucide-react';


interface User {
  role: 'STAGIAIRE' | 'ENCADRANT' | 'ADMIN';
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  // On tente de récupérer le user depuis localStorage
  const storedUser = localStorage.getItem("user");
  let user: User | null = null;

  try {
    user = storedUser ? JSON.parse(storedUser) as User : null;
  } catch (error) {
    console.error("Invalid user in localStorage:", error);
  } 

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/');
  };
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };
  

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand text-primary" to="/home">SCHOOLAR</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <button onClick={toggleLang} className="langButton">
                 {i18n.language === "fr" ? "English" : "Français"}
              </button>
               <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
    </button>
            </>
          ) : (
            <>
              {user.role === "STAGIAIRE" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Intern</Link>
                </li>
              )}
              {user.role === "ENCADRANT" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Supervisor</Link>
                </li>
              )}
             
              {user.role === "ADMIN" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Admin</Link>
                </li>
              )}
              <li className="nav-item">
                <button onClick={handleLogout} className="btn-logout">Logout</button>
                 <Link  to="/logout"></Link>

              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
