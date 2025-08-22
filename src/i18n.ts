// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: {
          stage: "Stage",
          stagiaire: "Stagiaire",
          encadrant: "Encadrant",
          enregistrer: "Enregistrer",
          imprimer: "Imprimer",
          choisir_stagiaire: "Choisir un stagiaire...",
        },
      },
      en: {
        translation: {
          stage: "Internship",
          stagiaire: "Intern",
          encadrant: "Supervisor",
          enregistrer: "Save",
          imprimer: "Print",
          choisir_stagiaire: "Choose a trainee...",
        },
      },
    },
  });

export default i18n;
