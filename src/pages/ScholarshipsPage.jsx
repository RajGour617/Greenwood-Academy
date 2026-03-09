import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ScholarshipsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
            Scholarships & Financial Aid
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <p>
              Greenwood Academy offers a range of scholarships to support talented and deserving students. Eligibility is based on academic performance, extracurricular achievements, and financial need.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Merit-based scholarships for top performers in board exams.</li>
              <li>Sports scholarships for students representing the school at state or national level.</li>
              <li>Need-based financial aid for families with constrained resources.</li>
            </ul>
            <p>
              Interested students should submit a scholarship application along with supporting documents when filling out the admission form.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScholarshipsPage;
