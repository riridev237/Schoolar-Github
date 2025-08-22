import React, { useState } from "react";
import styles from "../../Styles/AffectationStage.module.css";
import { FaPlus } from "react-icons/fa";

export default function AffectationStage() {
  const [titre, setTitre] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [stagiaire, setStagiaire] = useState("");
  const [service, setService] = useState("");
  const [encadrant, setEncadrant] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // traitement à faire ici
    console.log({ titre, debut, fin, stagiaire, service, encadrant });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.sectionTitle}>AFFECTATION</div>
      <label className={styles.label}>Internship Title:</label>
      <input className={styles.input} value={titre} onChange={(e) => setTitre(e.target.value)} />

      <label className={styles.label}>Start of Internship:</label>
      <input className={styles.input} type="date" value={debut} onChange={(e) => setDebut(e.target.value)} />

      <label className={styles.label}>End of Internship:</label>
      <input className={styles.input} type="date" value={fin} onChange={(e) => setFin(e.target.value)} />

      <div className={styles.sectionTitle}>Intern:</div>
      <label className={styles.label}>Intern:</label>
      <div className={styles.row}>
        <select className={styles.select} value={stagiaire} onChange={(e) => setStagiaire(e.target.value)}>
          <option value="">Choose an Intern...</option>
          <option value="1">Nawe Richelle</option>
        </select>
        <span className={styles.linkButton}><FaPlus /> Add pair</span>
      </div>

      <div className={styles.sectionTitle}>Supervisor:</div>
      <label className={styles.label}>Service:</label>
      <select className={styles.select} value={service} onChange={(e) => setService(e.target.value)}>
        <option value="None">None</option>
        <option value="dev">Développement web</option>
      </select>

      <label className={styles.label}>Supervisor:</label>
      <select className={styles.select} value={encadrant} onChange={(e) => setEncadrant(e.target.value)}>
        <option value="">Choose a supervisor</option>
        <option value="enc1">M. Emmanuel Tonji</option>
      </select>

      <button className={styles.button} type="submit">Save</button>
    </form>
  );
}
