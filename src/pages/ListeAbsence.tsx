// import React, { useEffect, useState } from "react";
// import { FaTrash, FaEdit, FaFilePdf } from "react-icons/fa";
// import styles from "./ListeStagiaires.module.css";
// import api from "./ApiServices";

// interface Stagiaire {
//   id: number;
//   cin: string;
//   nom: string;
//   prenom: string;
//   email: string;
//   tele: string;
//   domaineService: string;
//   etablissement: string;
//   specialite: string;
// //   statutStagiaire:string;
// //   typeStage: string;

// }

// export default function ListeStagiaires() {
//   const [stagiaires, setStagiaires] = useState<Stagiaire[]>([]);

//   useEffect(() => {
//     api.get("/stagiaires?statut=EN_ATTENTE")
//   .then((res) => setStagiaires(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleDelete = (id: number) => {
//     api.delete(`/stagiaires/${id}`)
//       .then(() => setStagiaires((prev) => prev.filter((s) => s.id !== id)))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Liste des Nouveaux stagiaires</h2>
//       <div className="overflow-x-auto">
//         <table className={styles.table}>
//           <thead className={styles.thead}>
//             <tr>
//               <th className={styles.th}>ID</th>
//               <th className={styles.th}>Nom</th>
//               <th className={styles.th}>Prénom</th>
//               <th className={styles.th}>E-mail</th>
//               <th className={styles.th}>Télé</th>
//               <th className={styles.th}>Specialite</th>
//               <th className={styles.th}>Établissement</th>
//               <th className={styles.th}>Service</th>
//               <th className={styles.th}>Option</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stagiaires.map((stagiaire) => (
//               <tr key={stagiaire.id}>
//                 <td className={styles.td}>{stagiaire.cin}</td>
//                 <td className={styles.td}>{stagiaire.nom}</td>
//                 <td className={styles.td}>{stagiaire.prenom}</td>
//                 <td className={styles.td}>{stagiaire.email}</td>
//                 <td className={styles.td}>{stagiaire.tele}</td>
//                 <td className={styles.td}>{stagiaire.specialite}</td>
//                 <td className={styles.td}>{stagiaire.domaineService}</td>
//                 <td className={styles.td}>{stagiaire.etablissement}</td>
//                 <td className={styles.td}>
//                   <div className={styles.actions}>
//                     <span className={`${styles.iconButton} text-blue-500`}>
//                       <FaFilePdf />
//                     </span>
//                     <span className={`${styles.iconButton} text-green-600`}>
//                       <FaEdit />
//                     </span>
//                     <span
//                       className={`${styles.iconButton} text-red-500`}
//                       onClick={() => handleDelete(stagiaire.id)}
//                     >
//                       <FaTrash />
//                     </span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// // }

import React from 'react';
import '../Styles/ListeStagiaires.module.css';
import {  FaTrash, FaSearch } from 'react-icons/fa';

interface Stagiaire {
  id: string;
  nom: string;
  prenom: string;
  absence: string;
}

const stagiaires: Stagiaire[] = [
  {
    id: '2i',
    nom: 'Nawe',
    prenom: 'Richelle',
    absence:'1',
  },
    
  
  {
    id: '2b',
    nom: 'Magni',
    prenom: 'Oraly',
    absence:'5',
  },
];

const NouveauxStagiaires: React.FC = () => {
  return (
    <div className="stagiaires-container">
      <h2 className="titre">LIST OF ABSENCES</h2>
      <table className="stagiaires-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Number of Absences</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire, index) => (
            <tr key={index}>
              <td>{stagiaire.id}</td>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.prenom}</td>
              <td>{stagiaire.absence}</td>
              <td className="options">
                <button className="cv"><FaSearch /></button>
                <button className="delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NouveauxStagiaires;
