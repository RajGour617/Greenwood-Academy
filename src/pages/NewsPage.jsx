import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const articles = [
  {
    slug: 'science-exhibition',
    title: 'Annual Science Exhibition 2026',
    date: 'April 15, 2026',
    category: 'EVENT',
    excerpt: 'Students showcase innovative projects and scientific discoveries at our annual exhibition.',
    image: '/images/exhibition.png'
  },
  {
    slug: 'sports-championship',
    title: 'Inter-School Sports Championship',
    date: 'April 22, 2026',
    category: 'SPORTS',
    excerpt: 'Greenwood Academy hosts the regional sports championship with 20+ participating schools.',
    image: '/images/competition.png'
  },
  {
    slug: 'cultural-festival',
    title: 'Spring Cultural Festival',
    date: 'May 1, 2026',
    category: 'CULTURAL',
    excerpt: 'Celebrating diversity through music, dance, drama, and art performances by our talented students.',
    image: '/images/festival.png'
  }
];

const NewsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
            Latest News & Events
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Reveal key={article.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={article.image} alt={article.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {article.date} &nbsp;•&nbsp; {article.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link to={`/news/${article.slug}`} className="text-primary-green font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsPage;
