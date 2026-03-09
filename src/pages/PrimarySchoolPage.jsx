import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrimarySchoolPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Primary School (Grades 1–5)
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Our primary school programme focuses on nurturing curiosity and building strong foundational skills in literacy, numeracy and social development. Classrooms are designed to be interactive and engaging, with experienced teachers guiding students through a diverse curriculum.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Small class sizes for personalised attention</li>
            <li>Integrated arts and sports activities</li>
            <li>Emphasis on character education and values</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrimarySchoolPage;
