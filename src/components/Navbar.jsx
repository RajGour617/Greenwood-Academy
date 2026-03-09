import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaGraduationCap, FaShieldAlt, FaChalkboardTeacher, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.getItem('user'));
  const [mobileOpen, setMobileOpen] = useState(false); // controls small-screen menu
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // list of homepage sections that use hash links
  const sectionIds = ["home","about","academics","admissions","campus","results","contact"];

  const logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('username');
    setLoggedIn(false);
    navigate('/');
  };

  // items that link to other pages
  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" }
  ];

  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loginOptions = [
    { id: 'student', label: 'Student Login', path: '/login/student', icon: FaGraduationCap, color: 'blue' },
    { id: 'admin', label: 'Admin Login', path: '/login/admin', icon: FaShieldAlt, color: 'red' },
    { id: 'faculty', label: 'Faculty Login', path: '/login/faculty', icon: FaChalkboardTeacher, color: 'green' }
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
        {/* brand/logo */}
        <div className="nav-brand">
          <div className="logo-placeholder">
            <Link to="/">
              <img src="/images/logo.png" alt="Greenwood Academy Logo" loading="lazy" />
            </Link>
          </div>
          <div className="brand-text">
            <Link to="/" className="brand-name">
              <span className="brand-greenwood">Greenwood</span>
              <span className="brand-academy">Academy</span>
            </Link>
            <span className="brand-subtitle">Est. 1999</span>
          </div>
        </div>

        {/* menu links */}
        <div
          className="nav-menu"
          style={(() => {
            if (!isMobile) {
              return { visibility: 'visible', transform: 'none' };
            }
            return {
              transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
              visibility: mobileOpen ? 'visible' : 'hidden'
            };
          })()}
        >
          {pageLinks.map(link => {
            const sectionId = link.name.toLowerCase().replace(/\s+/g, "");
            const isSection = sectionIds.includes(sectionId) && location.pathname === "/";
            const to = isSection ? `/#${sectionId}` : link.path;
            const LinkComp = isSection ? HashLink : Link;

            // determine active state: either exact path match or matching hash for sections
            let isActive = false;
            if (isSection) {
              isActive = (location.hash === `#${sectionId}`) || (sectionId === 'home' && location.pathname === "/");
            } else {
              isActive = location.pathname === link.path;
            }

            return (
              <LinkComp
                smooth={isSection}
                key={link.name}
                to={to}
                className={`nav-link${isActive ? ' active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </LinkComp>
            );
          })}
        </div>

        {/* actions (login/enquiry) */}
        <div className="nav-actions">
          <div className="desktop-actions">
            {loggedIn ? (
              <button onClick={logout} className="login-btn">
                Logout
              </button>
            ) : (
              <div className="login-dropdown">
                <button
                  type="button"
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  className="login-btn"
                >
                  Login <i className="fas fa-chevron-down"></i>
                </button>
                <div className={`dropdown-menu ${showLoginDropdown ? 'show' : ''}`}>
                  {loginOptions.map(opt => {
                    const Icon = opt.icon;
                    return (
                      <Link
                        key={opt.id}
                        to={opt.path}
                        className={`dropdown-item ${opt.id}`}
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{opt.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            <Link to="/enquiry" className="apply-btn">
              Enquiry→
            </Link>
          </div>
          <div className="mobile-actions">
            {loggedIn ? (
              <button onClick={logout} className="mobile-login-btn">
                Logout
              </button>
            ) : (
              <Link to="/login" className="mobile-login-btn">
                Login
              </Link>
            )}
          </div>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;