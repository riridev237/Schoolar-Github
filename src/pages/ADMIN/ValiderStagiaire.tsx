// admin/ValidateStagiaire.tsx
import React, { useEffect, useState } from 'react';
import api from '../../ApiServices';
import '../../Styles/ValidateStagiaire.css';

interface Stagiaire {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  statut: string;
}

interface Encadrant {
  id: number;
  nom: string;
}

interface ServiceEntity {
  id: number;
  nom: string;
}

const ValidateStagiaire: React.FC = () => {
  const [stagiaires, setStagiaires] = useState<Stagiaire[]>([]);
  const [encadrants, setEncadrants] = useState<Encadrant[]>([]);
  const [services, setServices] = useState<ServiceEntity[]>([]);
  const [formState, setFormState] = useState<Record<number, { encadrantId?: number; serviceId?: number }>>({});

  useEffect(() => {
    fetchData();
    api.get('/api/encadrants').then(res => setEncadrants(res.data));
    api.get('/api/services').then(res => setServices(res.data));
  }, []);

  const fetchData = async () => {
    const res = await api.get('/api/stagiaires?statut=En_attente');
    setStagiaires(res.data);
  };

  const handleValidation = async (id: number) => {
    const values = formState[id];
    if (values?.encadrantId && values?.serviceId) {
      await api.put(`/api/stagiaires/${id}/valider`, {
        encadrantId: values.encadrantId,
        serviceId: values.serviceId,
      });
      fetchData();
    } else {
      alert("Veuillez sélectionner un encadrant et un service.");
    }
  };

  return (
    <div className="validate-container">
      <h2 className="validate-title">Validation des Stagiaires</h2>
      <table className="validate-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Encadrant</th>
            <th>Service</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stagiaire) => (
            <tr key={stagiaire.id}>
              <td data-label="Nom">{stagiaire.nom}</td>
              <td data-label="Prénom">{stagiaire.prenom}</td>
              <td data-label="Email">{stagiaire.email}</td>
              <td data-label="Encadrant">
                <select
                  className="validate-select"
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      [stagiaire.id]: {
                        ...prev[stagiaire.id],
                        encadrantId: Number(e.target.value),
                      },
                    }))
                  }
                >
                  <option value="">-- Choisir --</option>
                  {encadrants.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.nom}
                    </option>
                  ))}
                </select>
              </td>
              <td data-label="Service">
                <select
                  className="validate-select"
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      [stagiaire.id]: {
                        ...prev[stagiaire.id],
                        serviceId: Number(e.target.value),
                      },
                    }))
                  }
                >
                  <option value="">-- Choisir --</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.nom}
                    </option>
                  ))}
                </select>
              </td>
              <td className="validate-td" data-label="Action">
                <button
                  className="validate-button"
                  onClick={() => handleValidation(stagiaire.id)}
                >
                  Valider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ValidateStagiaire;
