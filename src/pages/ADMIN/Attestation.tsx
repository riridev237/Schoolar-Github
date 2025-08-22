// import React from 'react';
// import api from './ApiServices';

// interface Props {
//   nom: string;
//   prenom: string;
//   service: string;
//   langue?: 'fr' | 'en';
// }

// const Attestation: React.FC<Props> = ({ nom, prenom, service, langue = 'fr' }) => {
//   const handleDownload = async () => {
//     try {
//       const response = await api.get(
//         'attestation/generate/{stageId}',
//         {
//           params: { nom, prenom, service, langue },
//           responseType: 'blob', // important pour les fichiers binaires
//         }
//       );

//       const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `attestation_${nom}_${prenom}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (error) {
//       console.error('Erreur lors du téléchargement :', error);
//       alert('Échec du téléchargement du PDF.');
//     }
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
//     >
//       Télécharger l’attestation
//     </button>
//   );
// };

// export default Attestation;
import React, { useState } from "react";
import styles from "../../Styles/Attestation.module.css";
import { FaPrint } from "react-icons/fa";

export default function AttestationPage() {
  const [stagiaire, setStagiaire] = useState("");

  const handlePrint = () => {
    // logique pour générer et imprimer l’attestation
    console.log("Impression pour:", stagiaire);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Print Attestation </div>

      <label className={styles.label}>Intern:</label>
      <select
        className={styles.select}
        value={stagiaire}
        onChange={(e) => setStagiaire(e.target.value)}
      >
        <option value="">Choose Intern...</option>
        <option value="1">Nawe Richelle</option>
      </select>

      <button className={styles.button} onClick={handlePrint}>
        <FaPrint /> Print
      </button>
    </div>
  );
}
