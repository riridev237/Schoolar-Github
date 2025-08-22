import React from 'react';
import '../../Styles/ListeStagiaires.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Stagiaire {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  service : string;
  
}

const stagiaires: Stagiaire[] = [
  {
    id: 'sup1',
    nom: 'Tonji',
    prenom: 'Emmanuel',
    email: 'emmatonji@gmail.com',
    tel: '0666666666',
    service: 'Informatique',
    
  },
  {
    id: 'sub2',
    nom: 'Nji',
    prenom: 'Andrew',
    email: 'njinji@gmail.com',
    tel: '06502015659',
    service: 'Informatique',
    
  },
  {
    id: 'sub3',
    nom: 'Fru',
    prenom: 'Ransom',
    email: 'devransom@gmail.com',
    tel: '03567912309',
    service: 'Informatique',
  },
  {
    id: 'sub4',
    nom: 'Tella',
    prenom: 'Joyce',
    email: 'tellajoycyy@gmail.com',
    tel: '06789093555',
    service: 'Ressource Humaine',
    
  },
  {
    id: 'sub5',
    nom: 'Chioma',
    prenom: 'Mary',
    email: 'chijokechioma@gmail.com',
    tel: '03402467659',
    service: 'Marketing',
  },
  
];

const NouveauxStagiaires: React.FC = () => {
  return (
    <div className="stagiaires-container">
      <h2 className="titre">LIST OF NEW SUPERVISORS</h2>
      <table className="stagiaires-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>E-mail</th>
            <th>Telephone</th>
            <th>Service</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire, index) => (
            <tr key={index}>
              <td>{stagiaire.id}</td>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.prenom}</td>
              <td>{stagiaire.email}</td>
              <td>{stagiaire.tel}</td>
              <td>{stagiaire.service}</td>
              <td className="options">
                <button className="edit"><FaEdit /></button>
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
