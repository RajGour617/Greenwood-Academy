import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import content from '../data/content.json';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={content.about.image}
              alt="Greenwood Academy Campus"
              className="rounded-2xl shadow-large w-full"
            />
            <div className="absolute top-4 right-4 bg-secondary-gold text-primary-green px-4 py-2 rounded-lg font-semibold">
              {content.about.badge}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-secondary-gold font-semibold mb-4">
              {content.about.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
              {content.about.title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {content.about.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {content.about.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center bg-primary-green text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
