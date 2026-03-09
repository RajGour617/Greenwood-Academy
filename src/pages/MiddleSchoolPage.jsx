import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MiddleSchoolPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
            Middle School (Grades 6–8)
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            The middle school years are a time of exploration and growth. We offer a broad curriculum that encourages students to think critically, explore new subjects, and participate in collaborative projects.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Introduction to advanced sciences and languages</li>
            <li>Project-based learning and technology integration</li>
            <li>Supportive mentoring and counseling services</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MiddleSchoolPage;
