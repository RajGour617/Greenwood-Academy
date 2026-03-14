import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-8 text-center">
            Admissions
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              Join our community of learners and embark on a journey of academic excellence and personal growth.
            </p>

            {/* Admission Process */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <Reveal>
                <div className="w-16 h-16 bg-secondary-gold text-primary-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold bg-red-400">
                  1
                </div>
              </Reveal>
                <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                <p className="text-gray-600">Fill out the application form with required details</p>
              </div>

              <div className="text-center">
                <Reveal>
                <div className="w-16 h-16 bg-secondary-gold text-primary-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold bg-green-400">
                  2
                </div>
              </Reveal>
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                <p className="text-gray-600">Attend the entrance assessment and interview</p>
              </div>

              <div className="text-center">
                <Reveal>
                <div className="w-16 h-16 bg-secondary-gold text-primary-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold bg-blue-400">
                  3
                </div>
              </Reveal>
                <h3 className="text-xl font-bold mb-2">Enrollment</h3>
                <p className="text-gray-600">Complete admission formalities and join us</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-secondary-gold text-primary-green px-8 py-4 rounded-lg font-semibold text-lg bg-yellow-400 transition-colors hover:transform hover:scale-105 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                Start Application →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;
