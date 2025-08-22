import React, { useState } from 'react';
import '../../Styles/Absence.css';

const Absence: React.FC = () => {
  const [form, setForm] = useState({
    id: '',
    motif: '',
    dateAbsence: '',
    
  });

  const stagiaires = [
    { id: '2i', nom: 'Nawe Richelle' },
    { cin: '2b', nom: 'Magni Oraly' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Absence marquée :', form);
    // Appel API ici
  };

  return (
    <div className="absence-container">
      <div className="absence-header">✔ Mark Absence</div>
      <form className="absence-form" onSubmit={handleSubmit}>
        <label htmlFor="id">Intern's ID:</label>
        <select name="id" id="id" value={form.id} onChange={handleChange}>
          <option value="">Chose Intern...</option>
          {stagiaires.map((stagiaire) => (
            <option key={stagiaire.id} value={stagiaire.id}>
              {stagiaire.nom}
            </option>
          ))}
        </select>

        <label htmlFor="motif">Reasons:</label>
        <input
          type="text"
          name="motif"
          id="motif"
          placeholder="Reason.."
          value={form.motif}
          onChange={handleChange}
        />

        <label htmlFor="dateAbsence">Date Absent:</label>
        <input
          type="date"
          name="dateDebut"
          id="dateDebut"
          value={form.dateAbsence}
          onChange={handleChange}
        />

        

        <button type="submit" className="btn-marquer">
          ✔ Mark
        </button>
      </form>
    </div>
  );
};

export default Absence;
