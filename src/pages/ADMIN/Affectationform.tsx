// import React, { useEffect, useState } from 'react';
// import api from './ApiServices';

// interface Stagiaire {
//   id: number;
//   nom: string;
//   prenom: string;
// }

// interface Encadrant {
//   id: number;
//   nom: string;
// }

// interface ServiceEntity {
//   id: number;
//   nom: string;
// }

// const AffectationForm: React.FC = () => {
//   const [stagiaires, setStagiaires] = useState<Stagiaire[]>([]);
//   const [encadrants, setEncadrants] = useState<Encadrant[]>([]);
//   const [services, setServices] = useState<ServiceEntity[]>([]);

//   const [formData, setFormData] = useState({
//     stagiaireId: '',
//     encadrantId: '',
//     serviceId: ''
//   });

//   // Chargement des données
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [stagiaireRes, encadrantRes, serviceRes] = await Promise.all([
//           api.get<Stagiaire[]>('/api/stagiaires'),
//           api.get<Encadrant[]>('/api/encadrants'),
//           api.get<ServiceEntity[]>('/api/services')
//         ]);
//         setStagiaires(stagiaireRes.data);
//         setEncadrants(encadrantRes.data);
//         setServices(serviceRes.data);
//       } catch (err) {
//         console.error('Erreur de chargement des données:', err);
//         alert('Impossible de charger les données.');
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.stagiaireId || !formData.encadrantId || !formData.serviceId) {
//       alert("Tous les champs sont requis.");
//       return;
//     }

//     try {
//       await api.post('/api/stagiaires/affecter', {
//         stagiaireId: parseInt(formData.stagiaireId),
//         encadrantId: parseInt(formData.encadrantId),
//         serviceId: parseInt(formData.serviceId)
//       });
//       alert('Affectation réussie');
//       setFormData({ stagiaireId: '', encadrantId: '', serviceId: '' });
//     } catch (error) {
//       console.error('Erreur d’affectation:', error);
//       alert("Erreur lors de l’affectation");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded w-full max-w-md mx-auto mt-10">
//       <h2 className="text-xl font-bold mb-6 text-center">Affecter un Stagiaire</h2>

//       <label className="block mb-4">
//         Stagiaire :
//         <select
//           name="stagiaireId"
//           value={formData.stagiaireId}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">-- Sélectionner --</option>
//           {stagiaires.map(stagiaire => (
//             <option key={stagiaire.id} value={stagiaire.id}>
//               {stagiaire.nom} {stagiaire.prenom}
//             </option>
//           ))}
//         </select>
//       </label>

//       <label className="block mb-4">
//         Encadrant :
//         <select
//           name="encadrantId"
//           value={formData.encadrantId}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">-- Sélectionner --</option>
//           {encadrants.map(enc => (
//             <option key={enc.id} value={enc.id}>
//               {enc.nom}
//             </option>
//           ))}
//         </select>
//       </label>

//       <label className="block mb-6">
//         Service :
//         <select
//           name="serviceId"
//           value={formData.serviceId}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">-- Sélectionner --</option>
//           {services.map(serv => (
//             <option key={serv.id} value={serv.id}>
//               {serv.nom}
//             </option>
//           ))}
//         </select>
//       </label>

//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
//       >
//         Affecter
//       </button>
//     </form>
//   );
// };

// export default AffectationForm;


import React, { useState } from 'react';
import '../../Styles/AjouterAffectation.css';

const AjouterAffectation: React.FC = () => {
  const [form, setForm] = useState({
    sujet: '',
    dateDebut: '',
    dateFin: '',
    service: '',
    encadrant: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Remplacer par l’appel API
  };

  return (
    <div className="affectation-container">
      <div className="accordion">
        <div className="accordion-header">Personal Information</div>
        <div className="accordion-header">Affectation Information</div>
      </div>
      <form className="affectation-form" onSubmit={handleSubmit}>
        <label htmlFor="sujet">Internship Title:</label>
        <input type="text" id="sujet" name="sujet" value={form.sujet} onChange={handleChange} />

        <label htmlFor="dateDebut"> Start Date :</label>
        <input type="date" id="dateDebut" name="dateDebut" value={form.dateDebut} onChange={handleChange} />

        <label htmlFor="dateFin">End Date:</label>
        <input type="date" id="dateFin" name="dateFin" value={form.dateFin} onChange={handleChange} />

        <label htmlFor="division">Service:</label>
        <select id="service" name="service" value={form.service} onChange={handleChange}>
          <option value="None">None</option>
          <option value="Informatique">Informatique</option>
          <option value="Resource Humaine">Resource Humaine</option>
        </select>

        <label htmlFor="encadrant">Supervisor:</label>
        <select id="encadrant" name="encadrant" value={form.encadrant} onChange={handleChange}>
          <option value="">Chose a service</option>
          <option value="Encadrant A">M. Emmanuel Tonji</option>
          <option value="Encadrant B">M. Andrew Nji</option>
        </select>

        <button type="submit" className="btn-enregistrer">
          <i className="fas fa-save" /> Save
        </button>
      </form>
    </div>
  );
};

export default AjouterAffectation;
