import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profileData } from '../data/profile';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'learning', label: 'Learning' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle active section on scroll
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  // Close mobile menu on Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-wide navbar-inner">
        {/* Monogram Brand */}
        <Link 
          to="/" 
          className="brand-logo"
          onClick={(e) => scrollToSection(e, 'hero')}
          aria-label={`${profileData.name} - Home`}
        >
          <span className="brand-monogram">{profileData.monogram}</span>
          <span className="brand-text">
            <span className="brand-name">{profileData.name}</span>
            <span className="brand-sub">AI &amp; Data Science Undergrad</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Actions: Theme Toggle & Resume Button */}
        <div className="navbar-actions">
          <ThemeToggle />
          
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm resume-nav-btn"
            aria-label={`View or download ${profileData.name}'s Resume PDF`}
          >
            <FileText size={15} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="resume-arrow-icon" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="mobile-drawer" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <span className="brand-monogram">{profileData.monogram}</span>
                <span className="brand-name">{profileData.name}</span>
              </div>
              <button 
                className="btn-icon" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive = location.pathname === '/' && activeSection === item.id;
                return (
                  <li key={item.id} className="mobile-nav-item">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="mobile-active-pill">Current</span>}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <FileText size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

