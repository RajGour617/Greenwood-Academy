import React, { useEffect, useState } from 'react';
import content from '../data/content.json';
import Reveal from './Reveal';

const Stats = () => {
  const [counts, setCounts] = useState(content.stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const interval = duration / steps;

    const timers = content.stats.map((stat, index) => {
      let currentStep = 0;
      const target = parseInt(stat.number);
      const increment = target / steps;

      return setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(increment * currentStep);
            return newCounts;
          });
        }
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const getIcon = (iconName) => {
    const iconMap = {
      'user-graduate': '👨‍🎓',
      'chalkboard-teacher': '👩‍🏫',
      'chart-line': '📈',
      'trophy': '🏆'
    };
    return iconMap[iconName] || '📊';
  };

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => (
            <Reveal key={index} className="text-center">
              <div className="text-4xl mb-4">{getIcon(stat.icon)}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">
                {counts[index].toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
