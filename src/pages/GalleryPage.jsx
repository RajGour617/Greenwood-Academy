import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import content from '../data/content.json';

const GalleryPage = () => {
  const images = content.campusGallery.images;

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Campus Gallery
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg">
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                  <h3 className="font-semibold">{img.title}</h3>
                  <p className="text-sm">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GalleryPage;
