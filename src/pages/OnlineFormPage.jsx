import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OnlineFormPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
            Online Application Form
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="mb-6 text-center text-gray-700">
              The online application form will be available soon. In the meantime, you can
              submit an enquiry or visit the admissions office in person.
            </p>
            <div className="text-center">
              <a
                href="/enquiry"
                className="inline-block bg-primary-green text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Make an Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OnlineFormPage;
