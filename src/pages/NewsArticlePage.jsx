import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articleData = {
  'science-exhibition': {
    title: 'Annual Science Exhibition 2026',
    date: 'April 15, 2026',
    content: `Students from all grades presented their innovative projects covering robotics, renewable energy, environmental science, and more. Visitors were impressed by the creativity and depth of research.  Teachers and judges awarded prizes to the top three projects and commended the hard work put in by the students.`,
  },
  'sports-championship': {
    title: 'Inter-School Sports Championship',
    date: 'April 22, 2026',
    content: `More than 20 schools participated in football, basketball, athletics, and swimming competitions held on campus. Greenwood Academy students brought home several medals, showcasing the strength of our athletic programs. The event fostered sportsmanship and community spirit among all participants.`,
  },
  'cultural-festival': {
    title: 'Spring Cultural Festival',
    date: 'May 1, 2026',
    content: `Our annual cultural festival featured performances in music, dance, theater, and visual arts. Parents and guests were delighted by the costumes and talent of our students. The festival celebrated the cultural diversity of our student body and encouraged creativity.`,
  }
};

const NewsArticlePage = () => {
  const { slug } = useParams();
  const article = articleData[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500 mb-8">{article.date}</p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </p>
          <div className="mt-12">
            <Link to="/news" className="text-primary-green hover:underline">
              ← Back to News
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsArticlePage;
