import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterStagiaiare from "./pages/STAGIAIRE/RegisterStagiare";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import TestConnection from "./pages/tests";
import AboutUs from "./pages/About";
import Layout from "./pages/Layout";
import Welcome from "./pages/ADMIN/Welcome";
import Logout from "./pages/Logout";
import Attestation from "./pages/ADMIN/Attestation";
import ValiderStagiaire from "./pages/ADMIN/ValiderStagiaire";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import AddStagiaire from "./pages/ADMIN/AddStagiaire";
import ListeStagiaires from "./pages/STAGIAIRE/Stagiairelistetable";
import ListeEncadrant from "./pages/Encadrant/Listencadrant";
import AjouterAffectation from "./pages/ADMIN/Affectationform";
import Absence from "./pages/ADMIN/Absence";
import AffectationStage from "./pages/ADMIN/Affectationstage";
import ListeAbsence from "./pages/ListeAbsence";
// import ProtectedRoute from "./authUtils/ProtectedRoute";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/layout" element={<Layout />}></Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/register" element={<RegisterStagiaiare />} />
          <Route path="/tests" element={<TestConnection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/attestation" element={<Attestation nom="" prenom="" service="" />} /> */}
          <Route path="/attestation" element={<Attestation />} />

          <Route path="/valider" element={<ValiderStagiaire />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/addstagiaire" element={<AddStagiaire />} />
          <Route path="/liste/stagiaire" element={<ListeStagiaires />} />
          <Route path="/affectation" element={<AjouterAffectation />} />
          <Route path="/affectation" element={<AjouterAffectation />} />
          <Route path="/absence" element={<Absence />} />
          <Route path="/affectation/stage" element={<AffectationStage />} />
          <Route path="/liste/encadrant" element={<ListeEncadrant />} />
          <Route path="/liste/absence" element={<ListeAbsence />} />

          {/* <Route path="/admin" element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/encadrant" element={
            <ProtectedRoute allowedRoles={["ENCADRANT"]}>
              <EncadrantDashboard />
            </ProtectedRoute>
          } />
          <Route path="/stagiaire" element={
            <ProtectedRoute allowedRoles={["STAGIAIRE"]}>
              <StagiaireDashboard />
            </ProtectedRoute>
          } /> */}
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
