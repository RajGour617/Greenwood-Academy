import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaGraduationCap, FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.getItem('user'));

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

  const loginOptions = [
    { id: 'student', label: 'Student Login', path: '/login/student', icon: FaGraduationCap, color: 'blue' },
    { id: 'admin', label: 'Admin Login', path: '/login/admin', icon: FaShieldAlt, color: 'red' },
    { id: 'faculty', label: 'Faculty Login', path: '/login/faculty', icon: FaChalkboardTeacher, color: 'green' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* brand/logo */}
        <div className="nav-brand">
          <div className="logo-placeholder">
            <Link to="/">
              <img src="/images/logo.png" alt="Greenwood Academy Logo" />
            </Link>
          </div>
          <div className="brand-text">
            <Link to="/" className="brand-name">
              Greenwood Academy
            </Link>
            <span className="brand-subtitle">Est. 1999</span>
          </div>
        </div>

        {/* menu links */}
        <div className="nav-menu">
          {pageLinks.map(link => {
            if (isHome && link.path === "/") {
              return (
                <HashLink smooth key={link.name} to="/#home" className="nav-link active">
                  {link.name}
                </HashLink>
              );
            }
            if (isHome && link.path.startsWith("/")) {
              const sectionId = link.name.toLowerCase().replace(/\s+/g, "");
              if (["home","about","academics","admissions","campus","results","contact"].includes(sectionId)) {
                return (
                  <HashLink smooth key={link.name} to={`/#${sectionId}`} className="nav-link">
                    {link.name}
                  </HashLink>
                );
              }
            }
            return (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* actions (login/enquiry) */}
        <div className="nav-actions">
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
      </div>
    </nav>
  );
};

export default Navbar;
