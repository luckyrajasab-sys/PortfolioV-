import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from './icons/BrandIcons';
import { profileData } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" aria-label="Footer">
      <div className="container footer-container">
        
        {/* Top Footer Grid */}
        <div className="footer-top-row">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <span className="brand-monogram">{profileData.monogram}</span>
              <span className="brand-name">{profileData.name}</span>
            </div>
            <p className="footer-intro text-sm text-secondary mt-2">
              Student developer passionate about AI systems, data science, and resilient web architectures. Documenting growth, coursework, and software milestones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading font-mono text-xs uppercase tracking-wider text-muted">
              Quick Navigation
            </h4>
            <ul className="footer-nav-list font-mono text-sm">
              <li><button onClick={() => scrollTo('hero')} className="footer-link-btn" type="button">Home</button></li>
              <li><button onClick={() => scrollTo('about')} className="footer-link-btn" type="button">About</button></li>
              <li><button onClick={() => scrollTo('projects')} className="footer-link-btn" type="button">Projects</button></li>
              <li><button onClick={() => scrollTo('skills')} className="footer-link-btn" type="button">Skills</button></li>
              <li><button onClick={() => scrollTo('education')} className="footer-link-btn" type="button">Education</button></li>
              <li><button onClick={() => scrollTo('learning')} className="footer-link-btn" type="button">Learning Journey</button></li>
              <li><button onClick={() => scrollTo('contact')} className="footer-link-btn" type="button">Contact</button></li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="footer-social-col">
            <h4 className="footer-heading font-mono text-xs uppercase tracking-wider text-muted">
              Connect
            </h4>
            <div className="footer-social-links mt-2">
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              {profileData.instagram && (
                <a 
                  href={profileData.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              <a 
                href={`mailto:${profileData.email}`} 
                className="social-icon-btn"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm back-to-top-btn mt-4 font-mono text-xs"
              type="button"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p className="font-mono text-xs text-muted">
            &copy; {CURRENT_YEAR} {profileData.name}. Designed &amp; built with React, Vite, and Modern CSS.
          </p>
          <p className="font-mono text-xs text-muted flex items-center gap-1">
            <span>Authentic Academic Portfolio</span>
            <span>•</span>
            <span className="text-accent">Semester 3 Showcase</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
