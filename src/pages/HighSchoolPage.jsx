import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HighSchoolPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            High School (Grades 9–12)
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Our high school programme prepares students for board examinations and higher education. With a focus on academic rigor, career guidance and extracurricular excellence, students are well-equipped to pursue their aspirations.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Stream options: Science, Commerce, Arts</li>
            <li>Competitive exam coaching and career counseling</li>
            <li>Clubs for robotics, debate, environmental action and more</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HighSchoolPage;