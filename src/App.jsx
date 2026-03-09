import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import VirtualTourPage from './pages/VirtualTourPage';
import DashboardPage from './pages/DashboardPage';

// new pages
import EnquiryPage from './pages/EnquiryPage';
import AdmissionProcessPage from './pages/AdmissionProcessPage';
import FeeStructurePage from './pages/FeeStructurePage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import DocumentsRequiredPage from './pages/DocumentsRequiredPage';
import OnlineFormPage from './pages/OnlineFormPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import PrimarySchoolPage from './pages/PrimarySchoolPage';
import MiddleSchoolPage from './pages/MiddleSchoolPage';
import HighSchoolPage from './pages/HighSchoolPage';
import SportsPage from './pages/SportsPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/:type" element={<LoginPage />} />
          <Route path="/virtual-tour" element={<VirtualTourPage />} />
          <Route path="/dashboard/:type" element={<DashboardPage />} />

          {/* auxiliary pages */}
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/apply-online" element={<OnlineFormPage />} />
          <Route path="/admission-process" element={<AdmissionProcessPage />} />
          <Route path="/fee-structure" element={<FeeStructurePage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/documents-required" element={<DocumentsRequiredPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />

          {/* academic subpages */}
          <Route path="/academics/primary" element={<PrimarySchoolPage />} />
          <Route path="/academics/middle" element={<MiddleSchoolPage />} />
          <Route path="/academics/high" element={<HighSchoolPage />} />
          <Route path="/academics/sports" element={<SportsPage />} />

          {/* auth helpers */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
