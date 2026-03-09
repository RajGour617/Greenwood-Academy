import React from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

const Academics = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'palette': '🎨',
      'book': '📚',
      'microscope': '🔬',
      'running': '🏃'
    };
    return iconMap[iconName] || '📖';
  };

  const getCardColor = (index) => {
    const colors = [
      'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'bg-green-50 border-green-200 hover:bg-green-100',
      'bg-purple-50 border-purple-200 hover:bg-purple-100',
      'bg-orange-50 border-orange-200 hover:bg-orange-100'
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">
            {content.academics.title}
          </h2>
          <div className="w-24 h-1 bg-secondary-gold mx-auto"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.academics.programs.map((program, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl p-6 transition-all hover:shadow-lg hover-lift ${getCardColor(index)}`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">
                {getIcon(program.icon)}
              </div>

              {/* Grade Badge */}
              <div className="text-sm font-semibold text-primary-green mb-3 text-center">
                {program.grades}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-charcoal mb-3 text-center">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-center text-sm">
                {program.description}
              </p>

              {/* Learn More Link */}
              <Link
                to={program.path}
                className="block text-center text-primary-green font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
