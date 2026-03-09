import React from 'react';
import Navbar from '../components/Navbar';
import Academics from '../components/Academics';
import Footer from '../components/Footer';

const AcademicsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <div className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-8 text-center">
            Academic Programs
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Discover our comprehensive academic programs designed to nurture young minds and prepare students for future success.
          </p>
        </div>
      </div>
      <Academics />
      <Footer />
    </div>
  );
};

export default AcademicsPage;
