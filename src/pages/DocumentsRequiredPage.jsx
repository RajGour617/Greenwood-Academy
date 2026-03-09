import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DocumentsRequiredPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Documents Required for Admission
          </h1>
          <div className="max-w-3xl mx-auto">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Birth Certificate (original and two photocopies)</li>
              <li>Previous school report cards</li>
              <li>Transfer Certificate (for students coming from another school)</li>
              <li>Passport-sized photographs (4 copies)</li>
              <li>Proof of residence (utility bill, rental agreement, etc.)</li>
              <li>Any other relevant certificates (sports, music, etc.)</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Please ensure all documents are attested by a gazetted officer where required.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DocumentsRequiredPage;
