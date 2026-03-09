import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import content from '../data/content.json';
import Reveal from './Reveal';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + content.testimonials.length) % content.testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">
            What Parents & Students Say
          </h2>
          <div className="w-24 h-1 bg-secondary-gold mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <Reveal className="bg-white rounded-2xl shadow-large p-8 md:p-12">
              {/* Quote Icon */}
              <div className="text-4xl text-secondary-gold mb-6">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(content.testimonials[currentIndex].rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-700 mb-8 italic leading-relaxed">
                "{content.testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={content.testimonials[currentIndex].avatar}
                  alt={content.testimonials[currentIndex].author}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-text-charcoal">
                    {content.testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-600">
                    {content.testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <FaChevronLeft className="text-primary-green" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <FaChevronRight className="text-primary-green" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-green'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
