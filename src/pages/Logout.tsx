import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Logout.css';

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Efface le localStorage, sessionStorage, cookies si nécessaire
    localStorage.clear();
    sessionStorage.clear();

    // Supprimer les cookies (si besoin)
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });

    // Redirection après un court délai
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>Logout Successful</h2>
     
    </div>
  );
};

export default LogoutPage;
