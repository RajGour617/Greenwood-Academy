import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import content from '../data/content.json';

const HeroBanner = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-primary-green/90 to-primary-dark/90" />
        <img
          src={content.hero.backgroundImage}
          alt="Greenwood Academy Campus"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-secondary-gold text-primary-green px-4 py-2 rounded-full mb-6 font-semibold">
          <FaTrophy />
          <span>{content.hero.badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {content.hero.title.split(',').map((line, index) => (
            <span key={index}>
              {line}
              {index < content.hero.title.split(',').length - 1 && <br />}
            </span>
          ))}
          <span className="block text-secondary-gold">Leaders</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {content.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {content.hero.ctaButtons.map((button) => (
            <Link
              key={button.path}
              to={button.path}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                button.primary
                  ? 'bg-secondary-gold text-primary-green hover:bg-yellow-400'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green'
              }`}
            >
              {button.text === 'Virtual Tour' && <FaPlay className="inline mr-2" />}
              {button.text}
              {button.primary && ' →'}
            </Link>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {content.hero.trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheck className="text-secondary-gold" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-green/95 backdrop-blur-sm text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <FaMapMarkerAlt className="text-secondary-gold" />
              <span>{content.hero.contact.address}</span>
            </div>
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <FaPhone className="text-secondary-gold" />
              <span>{content.hero.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-secondary-gold" />
              <span>{content.hero.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
