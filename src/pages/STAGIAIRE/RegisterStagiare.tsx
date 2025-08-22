// register/stagiaire.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Register.css";
import api from "../../ApiServices";

const RegisterStagiaire: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    nom: "",
    prenom: "",
    sexe: "M",
    telephone: "",
    etablissement: "",
    specialite: "",
    dateDebut: "",
    dateFin: "",
    typeStage: "Academique",
    role: "STAGIAIRE",
    statut: "En_attente",
    niveau: "",
    service: "",
  });

  const navigate = useNavigate();
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("====================================");
    console.log(formData);
    console.log("====================================");
    try {
      const response = await api.post(
        "/api/auth/register/stagiaire",
        JSON.stringify(formData), // Explicitly convert to JSON string
        {
          headers: {
            "Content-Type": "application/json", // Explicitly declare JSON content type
          },
        }
      );

      if (response.status === 200) {
        alert("Stagiaire registered successfully");
        navigate("/stagiaire");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1 className="logo">Schoolar</h1>
        <h2>Register your account</h2>
        <h3>I am 👨‍🎓 Intern</h3>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="User name *"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="🔒 Enter Password *"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="📧 Voter Email *"
            required
          />
          <input
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            required
          />
          <input
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prenom"
            required
          />
          <select name="sexe" value={formData.sexe} onChange={handleChange}>
            <option value="M">Masculin</option>
            <option value="F">Feminin</option>
          </select>

          <input
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            required
          />
          <input
            name="etablissement"
            value={formData.etablissement}
            onChange={handleChange}
            placeholder="Etablissement"
            required
          />

          {/* <select
            name="specialite"
            value={formData.specialite}
            onChange={handleChange}
            required
          >
            <option value="reseauxtelecom">Reseaux & Telecom</option>
            <option value="developpementweb">Developpement web</option>
            <option value="comtabilitefinance">Comptabilite & Finance</option>
            <option value="marketing">Marketing digital</option>
          </select> */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              -- Sélectionnez un service --
            </option>
            <option value="ressourceshumaines">Ressources Humaines</option>
            <option value="informatique">Informatique</option>
            <option value="marketing">Marketing</option>
            <option value="comptabilite">Comptabilite</option>
          </select>
          <select
            name="specialite"
            value={formData.specialite}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              -- Sélectionnez une spécialité --
            </option>
            <option value="reseauxtelecom">Réseaux & Télécom</option>
            <option value="developpementweb">Développement web</option>
            <option value="comptabilitefinance">Comptabilité & Finance</option>
            <option value="marketing">Marketing digital</option>
          </select>

          <select
            name="typeStage"
            value={formData.typeStage}
            onChange={handleChange}
            required
          >
            <option value="Academique">Academique</option>
            <option value="Professionnel">Professionnel</option>
          </select>
          <input
            type="date"
            name="dateDebut"
            value={formData.dateDebut}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateFin"
            value={formData.dateFin}
            onChange={handleChange}
            required
          />
          <input
            name="niveau"
            value={formData.niveau}
            onChange={handleChange}
            placeholder="Niveau"
            required
          />
          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
        <div className="terms-toggle">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <span className="slider" />
            <span className="terms-text">
              {acceptTerms ? "YES" : "NO"} Accept our{" "}
              <a href="#">Terms & Conditions</a>
            </span>
          </label>
        </div>
        <p className="login-link">
          have an account ? <a href="login">Login</a>
        </p>
      </div>
      <div className="register-right">
        <h2>
          Start managing <span className="highlight">free</span> now !
        </h2>
        <p>
          Schoolar is a 100% free online management software for a lifetime with
          no limitations.
        </p>
        <div className="illustration"></div>
      </div>
    </div>
  );
};

export default RegisterStagiaire;
