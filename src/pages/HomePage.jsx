import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import '../styles/original.css';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ students: 0, teachers: 0, results: 0, years: 0 });

  useEffect(() => {
    // stats animation helper
    const animateValue = (start, end, duration, key) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(progress * end) }));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    let triggered = false;
    const node = document.getElementById('stats');
    const doAnimate = () => {
      animateValue(0, 5000, 2000, 'students');
      animateValue(0, 200, 2000, 'teachers');
      animateValue(0, 100, 2000, 'results');
      animateValue(0, 25, 2000, 'years');
    };

    if (node) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            doAnimate();
          }
        });
      }, { threshold: 0.5 });
      observer.observe(node);
      return () => observer.disconnect();
    } else {
      // fallback trigger immediately
      doAnimate();
    }
  }, []);

  const testimonials = [
    {
      text: "Greenwood Academy has transformed my child's learning experience. The dedicated teachers and modern facilities create the perfect environment for academic excellence.",
      author: "Sarah Johnson",
      role: "Parent of Grade 8",
      image: "https://picsum.photos/seed/parent1/60/60"
    },
    {
      text: "The holistic approach to education at Greenwood Academy is remarkable. My daughter has not only excelled academically but also developed confidence and leadership skills.",
      author: "Michael Chen",
      role: "Parent of Grade 10",
      image: "https://picsum.photos/seed/parent2/60/60"
    },
    {
      text: "Excellent school with great infrastructure and caring teachers. The focus on both academics and extracurricular activities makes Greenwood Academy stand out.",
      author: "Emily Rodriguez",
      role: "Parent of Grade 6",
      image: "https://picsum.photos/seed/parent3/60/60"
    }
  ];

  const changeTestimonial = (direction) => {
    const newIndex = direction === 1
      ? (activeTestimonial + 1) % testimonials.length
      : (activeTestimonial - 1 + testimonials.length) % testimonials.length;
    setActiveTestimonial(newIndex);
  };

  return (
    <div className="homepage pt-16">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Reveal>
      <section className="hero" id="home">
        <div className="hero-background">
          <img src="/images/home.png" alt="Modern School Campus" loading="lazy" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-trophy"></i> Ranked #1 School in Region 2025
          </div>
          <h1 className="hero-title">
            Inspiring Excellence,<br />
            Building Future<br />
            <span className="gold-text">Leaders</span>
          </h1>
          <p className="hero-subtitle">
            Where knowledge meets character. Shaping bright minds since 1999.
          </p>
          <div className="hero-actions">
            <Link to="/enquiry" className="cta-primary transform transition hover:scale-105">Enquiry →</Link>
            <Link to="/virtual-tour" className="cta-secondary transform transition hover:scale-105">
              <i className="fas fa-play"></i> Virtual Tour
            </Link>
          </div>
          <div className="trust-badges">
            <span><i className="fas fa-check"></i> CBSE Affiliated</span>
            <span><i className="fas fa-check"></i> ISO Certified</span>
            <span><i className="fas fa-check"></i> Smart Classes</span>
          </div>
        </div>
        <div className="hero-contact-strip">
          <span><i className="fas fa-map-marker-alt"></i> 576 Education Lane, Los Angeles</span>
          <span><i className="fas fa-phone"></i> +1 234 567 8900</span>
          <span><i className="fas fa-envelope"></i> info@greenwoodacademy.edu</span>
        </div>
      </section>
      </Reveal>

      {/* Quick Stats Section */}
      <Reveal>
      <section className="stats" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="stat-number">{animatedStats.students}+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <div className="stat-number">{animatedStats.teachers}+</div>
              <div className="stat-label">Expert Teachers</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stat-number">{animatedStats.results}%</div>
              <div className="stat-label">Board Results</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-number">{animatedStats.years}</div>
              <div className="stat-label">Years of Legacy</div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* About Section */}
      <Reveal>
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/img1.png" alt="Modern Classroom" loading="lazy" />
              <div className="image-badge">Since 1999 | 25 Years</div>
            </div>
            <div className="about-content">
              <div className="section-label">ABOUT OUR SCHOOL</div>
              <h2>Nurturing Young Minds for a Brighter Future</h2>
              <p>
                Greenwood Academy has been a beacon of educational excellence for over two decades.
                Our commitment to holistic development, innovative teaching methods, and state-of-the-art
                infrastructure ensures that every student reaches their full potential.
              </p>
              <div className="features">
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Experienced & Dedicated Faculty</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>State-of-the-Art Infrastructure</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Holistic Curriculum & Sports</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Safe & Nurturing Environment</span>
                </div>
              </div>
              <Link to="/about" className="read-more-btn">Read More →</Link>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Academics Section */}
      <Reveal>
      <section className="academics" id="academics">
        <div className="container">
          <div className="section-header">
            <h2>Our Academic Programs</h2>
            <div className="gold-line"></div>
          </div>
          <div className="academics-grid">
            <div className="academic-card primary hover:shadow-xl hover:scale-105 transform transition duration-300">
              <div className="card-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="grade-badge">Grades 1–5</div>
              <h3>Primary School</h3>
              <p>Foundation years focused on creative learning, basic skills, and character development.</p>
              <Link to="/academics/primary" className="learn-more">Learn More →</Link>
            </div>
            <div className="academic-card middle hover:shadow-xl hover:scale-105 transform transition duration-300">
              <div className="card-icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="grade-badge">Grades 6–8</div>
              <h3>Middle School</h3>
              <p>Transitional years building academic foundation and exploring diverse subjects.</p>
              <Link to="/academics/middle" className="learn-more">Learn More →</Link>
            </div>
            <div className="academic-card high hover:shadow-xl hover:scale-105 transform transition duration-300">
              <div className="card-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <div className="grade-badge">Grades 9–12</div>
              <h3>High School</h3>
              <p>Advanced preparation for higher education and career pathways.</p>
              <Link to="/academics/high" className="learn-more">Learn More →</Link>
            </div>
            <div className="academic-card sports hover:shadow-xl hover:scale-105 transform transition duration-300">
              <div className="card-icon">
                <i className="fas fa-running"></i>
              </div>
              <div className="grade-badge">All Grades</div>
              <h3>Sports & Arts</h3>
              <p>Comprehensive development through athletics, arts, and extracurricular activities.</p>
              <Link to="/academics/sports" className="learn-more">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Campus Life Gallery */}
      <Reveal>
      <section className="campus-gallery" id="campus">
        <div className="container">
          <h2 className="gallery-title">Campus Life</h2>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src="/images/library.png" alt="Modern Library" loading="lazy" />
              <div className="image-overlay">
                <h4>Modern Library</h4>
                <p>10,000+ books & digital resources</p>
              </div>
            </div>
            <div className="gallery-item small">
              <img src="/images/lab.png" alt="Science Lab" loading="lazy" />
              <div className="image-overlay">
                <h4>Science Lab</h4>
                <p>Advanced research facilities</p>
              </div>
            </div>
            <div className="gallery-item medium">
              <img src="/images/sports.png" alt="Sports Ground" loading="lazy" />
              <div className="image-overlay">
                <h4>Sports Ground</h4>
                <p>Olympic standard facilities</p>
              </div>
            </div>
            <div className="gallery-item small">
              <img src="/images/auditorium.png" alt="Auditorium" loading="lazy" />
              <div className="image-overlay">
                <h4>Auditorium</h4>
                <p>500-seat capacity</p>
              </div>
            </div>
            <div className="gallery-item small">
              <img src="/images/art.png" alt="Art Room" loading="lazy" />
              <div className="image-overlay">
                <h4>Art Room</h4>
                <p>Creative expression space</p>
              </div>
            </div>
            <div className="gallery-item small">
              <img src="/images/pool.png" alt="Swimming Pool" loading="lazy" />
              <div className="image-overlay">
                <h4>Swimming Pool</h4>
                <p>Olympic size pool</p>
              </div>
            </div>
          </div>
          <Link to="/gallery" className="gallery-btn">View Full Gallery →</Link>
        </div>
      </section>
      </Reveal>

      {/* Testimonials Section */}
      <Reveal>
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Parents & Students Say</h2>
            <div className="gold-line"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}>
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} loading="lazy" />
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-nav">
            <button className="nav-btn prev" onClick={() => changeTestimonial(-1)} title="Previous testimonial">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-btn next" onClick={() => changeTestimonial(1)} title="Next testimonial">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      </Reveal>

      {/* News & Events Section */}
      <Reveal>
      <section className="news-events" id="news">
        <div className="container">
          <div className="news-header">
            <h2>Latest News & Events</h2>
            <Link to="/news" className="view-all-btn btn">View All →</Link>
          </div>
          <div className="news-grid">
            <div className="news-item">
              <img src="/images/exhibition.png" alt="Science Exhibition" loading="lazy" />
              <div className="news-content">
                <div className="news-meta">
                  <span className="date">April 15, 2026</span>
                  <span className="category">EVENT</span>
                </div>
                <h3>Annual Science Exhibition 2026</h3>
                <p>Students showcase innovative projects and scientific discoveries at our annual exhibition.</p>
                <Link to="/news/science-exhibition" className="read-more">Read More →</Link>
              </div>
            </div>
            <div className="news-item">
              <img src="/images/competition.png" alt="Sports Meet" loading="lazy" />
              <div className="news-content">
                <div className="news-meta">
                  <span className="date">April 22, 2026</span>
                  <span className="category">SPORTS</span>
                </div>
                <h3>Inter-School Sports Championship</h3>
                <p>Greenwood Academy hosts the regional sports championship with 20+ participating schools.</p>
                <Link to="/news/sports-championship" className="read-more">Read More →</Link>
              </div>
            </div>
            <div className="news-item">
              <img src="/images/festival.png" alt="Cultural Fest" loading="lazy" />
              <div className="news-content">
                <div className="news-meta">
                  <span className="date">May 1, 2026</span>
                  <span className="category">CULTURAL</span>
                </div>
                <h3>Spring Cultural Festival</h3>
                <p>Celebrating diversity through music, dance, drama, and art performances by our talented students.</p>
                <Link to="/news/cultural-festival" className="read-more">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Admissions CTA Section */}
      <Reveal>
      <section className="admissions-cta" id="admissions">
        <div className="container">
          <div className="admissions-grid">
            <div className="admissions-content">
              <div className="cta-badge">ENROLLMENT OPEN</div>
              <h2>Admissions Open for Academic Year 2026-27</h2>
              <p>Limited seats available. Secure your child's future at Greenwood Academy.</p>
              <Link to="/apply-online" className="cta-large apply-btn">Enquiry — It's Free →</Link>
              <p className="call-info">or call +1 234 567 8900</p>
            </div>
            <div className="admissions-steps">
              <div className="steps-card">
                <h3>Admission Process</h3>
                <div className="steps">
                  <div className="step">
                    <span className="step-number">1</span>
                    <span className="step-text">Fill Online Form</span>
                  </div>
                  <div className="step">
                    <span className="step-number">2</span>
                    <span className="step-text">Document Verification</span>
                  </div>
                  <div className="step">
                    <span className="step-number">3</span>
                    <span className="step-text">Entrance Test</span>
                  </div>
                  <div className="step">
                    <span className="step-number">4</span>
                    <span className="step-text">Admission Confirmed ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-brand">
                <div className="logo-placeholder">
                  <img src="/images/logo.png" alt="Greenwood Academy Logo" loading="lazy" />
                </div>
                <div className="brand-text">
                  <span className="brand-name" style={{ color: 'antiquewhite' }}>Greenwood<br />Academy</span>
                  <span className="brand-subtitle">Est. 1999</span>
                </div>
              </div>
              <p className="footer-tagline">Excellence in Education Since 1999</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#campus">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Admissions</h4>
              <ul>
                <li><a href="/admission-process">Admission Process</a></li>
                <li><a href="/fee-structure">Fee Structure</a></li>
                <li><a href="/scholarships">Scholarships</a></li>
                <li><a href="/documents-required">Documents Required</a></li>
                <li><a href="/online-form">Online Form</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> 576 Education Lane, Los Angeles</p>
                <p><i className="fas fa-phone"></i> +1 234 567 8900</p>
                <p><i className="fas fa-envelope"></i> info@greenwoodacademy.edu</p>
              </div>
              <div className="map-preview">
                <img src="https://picsum.photos/seed/map/300/150" alt="Map Preview" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Greenwood Academy. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
