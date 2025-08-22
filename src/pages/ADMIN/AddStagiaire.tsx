import React, { useState } from 'react';
import api from '../../ApiServices';
import '../../Styles/AddStagiaire.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const sexes = ['M', 'F'];
const typesStage = ['Academique', 'Professionnel'];
const services = ['ressourceshumaines', 'informatique', 'marketing', 'comptabilite'];
const specialites = ['reseauxtelecom', 'developpementweb', 'comptabilitefinance', 'marketing'];
const steps = ['Personal Information', 'Academique Info', 'Internship & Supervisor'];

interface StagiaireFormValues {
  nom: string;
  prenom: string;
  niveau: string;
  sexe: string;
  telephone: string;
  etablissement: string;
  specialite: string;
  domaineService: string;
  dateDebut: string;
  dateFin: string;
  typeStage: string;
  statutStagiaire: string;
  encadrantId: string;
  serviceId: string;
  cv: File | null;
}

const validationSchemas = [
  Yup.object({
    nom: Yup.string().required('Name required'),
    prenom: Yup.string().required('Surname required'),
    niveau: Yup.string().required('LeveL required'),
    sexe: Yup.string().required('Sex required'),
    telephone: Yup.string().required('Telephone required'),
  }),
  Yup.object({
    etablissement: Yup.string().required('School required'),
    specialite: Yup.string().required('Speciality required'),
    domaineService: Yup.string().required('Service required'),
    dateDebut: Yup.date().required('Date begin required'),
    dateFin: Yup.date().required('Date end required'),
  }),
  Yup.object({
    typeStage: Yup.string().required('Type of Intern required'),
    statutStagiaire: Yup.string(),
    encadrantId: Yup.string(),
    serviceId: Yup.string(),
    cv: Yup.mixed()
  .required('CV required')
  .test('fileSize', 'File too loaded', (value) =>
    !value || (value as File).size <= 5 * 1024 * 1024
  )
  .test('fileType', 'Invalid Format ', (value) =>
    !value ||
    ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes((value as File).type)
  ),
  }),
];

const AddStagiaire: React.FC = () => {
  const [step, setStep] = useState(0);

 const initialValues: StagiaireFormValues = {
  nom: '', prenom: '', niveau: '', sexe: '', telephone: '',
  etablissement: '', specialite: '', domaineService: '', dateDebut: '', dateFin: '',
  typeStage: '', statutStagiaire: '', encadrantId: '', serviceId: '', cv: null
};


  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (values: StagiaireFormValues) => {
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) => {
    if (key === 'cv' && value instanceof File) {
      formData.append('cv', value);
    } else {
      formData.append(key, value as string);
    }
  });

  try {
    await api.post('/api/stagiaires', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    alert('Intern added successfully ✅');
  } catch (error) {
    console.error(error);
    alert("❌ Error while adding Intern");
  }
};


  return (
    <div className="form-container">
      <h2> Add an Intern </h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <div className="steps-labels">
        {steps.map((label, index) => (
          <div key={index} className={`step-label ${index <= step ? 'active' : ''}`}>{label}</div>
        ))}
      </div>

      <Formik<StagiaireFormValues>
  initialValues={initialValues}
  validationSchema={validationSchemas[step]}
  onSubmit={(values) => {
    if (step === steps.length - 1) {
      handleSubmit(values);
    } else {
      handleNext();
    }
  }}
>

        {({ isValid,  setFieldValue }) => (
          <Form className="step-form">
            {step === 0 && (
              <div className="form-step fade-in">
                <Field name="nom" placeholder="Name" />
                <ErrorMessage name="nom" component="div" className="error" />

                <Field name="prenom" placeholder="Surname" />
                <ErrorMessage name="prenom" component="div" className="error" />

                <Field name="niveau" placeholder="Level" />
                <ErrorMessage name="niveau" component="div" className="error" />

                <Field as="select" name="sexe">
                  <option value="">-- Sex --</option>
                  {sexes.map(s => <option key={s} value={s}>{s}</option>)}
                </Field>
                <ErrorMessage name="sexe" component="div" className="error" />

                <Field name="telephone" placeholder="Telephone" />
                <ErrorMessage name="telephone" component="div" className="error" />
              </div>
            )}

            {step === 1 && (
              <div className="form-step fade-in">
                <Field name="etablissement" placeholder="School" />
                <ErrorMessage name="etablissement" component="div" className="error" />

                <Field as="select" name="specialite">
                  <option value="">-- Speciality --</option>
                  {specialites.map(s => <option key={s} value={s}>{s}</option>)}
                </Field>
                <ErrorMessage name="specialite" component="div" className="error" />

                <Field as="select" name="domaineService">
                  <option value="">-- Domaine / Service --</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </Field>
                <ErrorMessage name="domaineService" component="div" className="error" />

                <Field type="date" name="dateDebut" />
                <ErrorMessage name="dateDebut" component="div" className="error" />

                <Field type="date" name="dateFin" />
                <ErrorMessage name="dateFin" component="div" className="error" />
              </div>
            )}

            {step === 2 && (
              <div className="form-step fade-in">
                <Field as="select" name="typeStage">
                  <option value="">-- Type of Internship --</option>
                  {typesStage.map(t => <option key={t} value={t}>{t}</option>)}
                </Field>
                <ErrorMessage name="typeStage" component="div" className="error" />

                <Field name="statutStagiaire" placeholder="Intern Status" />
                <ErrorMessage name="statutStagiaire" component="div" className="error" />

                <Field name="encadrantId" placeholder="Supervisor ID" />
                <ErrorMessage name="encadrantId" component="div" className="error" />

                <Field name="serviceId" placeholder="Service ID" />
                <ErrorMessage name="serviceId" component="div" className="error" />

                <label>CV :</label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.currentTarget.files?.[0];
                    if (file) {
                      setFieldValue('cv', file);
                    }
                  }}
                />
                <ErrorMessage name="cv" component="div" className="error" />
              </div>
            )}

            <div className="buttons">
              {step > 0 && <button type="button" onClick={handleBack}>⬅ Previous</button>}
              <button type="submit" disabled={!isValid}>
                {step === steps.length - 1 ? '✅ Add Intern' : '➡ Next'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddStagiaire;
