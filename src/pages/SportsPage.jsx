import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SportsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
            Sports & Arts Programme
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            At Greenwood Academy we believe in the all-round development of students. Our sports and arts programmes provide avenues to explore talents outside the classroom.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Olympic-size swimming pool and athletics track</li>
            <li>Indoor courts for basketball, badminton and table tennis</li>
            <li>Music, dance, drama and visual arts studios</li>
            <li>Inter-house competitions and cultural events</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SportsPage;