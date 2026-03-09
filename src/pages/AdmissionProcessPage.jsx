import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const AdmissionProcessPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
              Admission Process
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
            <p>
              Applying to Greenwood Academy is simple and student-friendly. Below is an outline of the steps involved:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-text-charcoal">
              <li>Fill out the online application form with accurate personal details.</li>
              <li>Upload required documents (birth certificate, previous report cards, etc.).</li>
              <li>Attend a short entrance assessment if applicable.</li>
              <li>Receive confirmation and complete fee payment to secure the seat.</li>
            </ol>
            <p>
              Our admissions team is always available to assist you if you have any questions during the process.
            </p>
          </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdmissionProcessPage;
