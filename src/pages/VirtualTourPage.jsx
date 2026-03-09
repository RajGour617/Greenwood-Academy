import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VirtualTourPage = () => {

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-8 text-center">
            Virtual Campus Tour
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">360° Campus Experience</h2>
              <p className="text-gray-600 mb-8">
                Take an immersive virtual tour of our state-of-the-art campus facilities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Academic Buildings</h3>
                  <p className="text-gray-600">Explore our modern classrooms and labs</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Sports Facilities</h3>
                  <p className="text-gray-600">Tour our Olympic-standard sports complex</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Library & Resources</h3>
                  <p className="text-gray-600">Visit our extensive digital library</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Arts & Culture</h3>
                  <p className="text-gray-600">Discover our creative spaces</p>
                </div>
              </div>

              <button className="bg-primary-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Start Virtual Tour
              </button>

              {/* always-visible video embeds */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="relative" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/w1pMyN5_qv0?si=5CKa3Wt27yvtdP5O"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  />
                </div>
                <div className="relative" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/PbOvKjN0MvQ?si=WhBD39HJTFIFUD_Q"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualTourPage;
