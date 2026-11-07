import React, { useState } from 'react';
import { ArrowDown, FileText, Send, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { Github, Linkedin, Instagram } from './icons/BrandIcons';
import { profileData } from '../data/profile';

export default function Hero() {
  const [avatarSrc, setAvatarSrc] = useState('/profile-avatar.png');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction and Hero">
      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-status-pill animate-fade-in">
          <span className="status-indicator-dot" />
          <span className="status-text">{profileData.availability}</span>
        </div>

        {/* Small Label Kicker */}
        <div className="hero-kicker-wrapper">
          <span className="section-kicker brass">
            <Sparkles size={14} />
            {profileData.hero.kicker}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-heading">
          {profileData.hero.headline}
        </h1>

        {/* Supporting Paragraph */}
        <p className="hero-subheading">
          {profileData.hero.subheading}
        </p>

        {/* Primary Action Buttons */}
        <div className="hero-actions">
          <button 
            onClick={() => scrollTo('projects')} 
            className="btn btn-primary"
            type="button"
          >
            <span>Explore Projects</span>
            <Code2 size={18} />
          </button>
          
          <button 
            onClick={() => scrollTo('contact')} 
            className="btn btn-secondary"
            type="button"
          >
            <span>Contact Me</span>
            <Send size={16} />
          </button>
        </div>

        {/* Secondary Social / Resume Links */}
        <div className="hero-social-links" aria-label="Social and Resume Links">
          <a 
            href={profileData.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a 
            href={profileData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          {profileData.instagram && (
            <a 
              href={profileData.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          )}

          <a 
            href={profileData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link resume-link"
            aria-label="Download Resume PDF"
          >
            <FileText size={18} />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Interactive Hero Visual / Terminal & Stats Bento */}
        <div className="hero-visual-grid">
          
          {/* Profile Card with Official Portrait */}
          <div className="hero-profile-card tech-card">
            <div className="hero-avatar-wrapper">
              <img 
                src={avatarSrc} 
                alt={`${profileData.name} - Student Developer Portrait`} 
                className="hero-avatar-img"
                width="140"
                height="140"
                loading="eager"
                onError={() => setAvatarSrc('/profile-avatar.svg')}
              />
              <div className="hero-avatar-badge" title="AI & Data Science Student">
                <Cpu size={16} />
              </div>
            </div>
            
            <div className="hero-avatar-meta">
              <h3 className="hero-avatar-name">{profileData.name}</h3>
              <p className="hero-avatar-role">{profileData.title}</p>
              <span className="badge badge-accent mt-2">{profileData.location}</span>
            </div>
          </div>

          {/* Interactive Code / Academic Terminal Card */}
          <div className="hero-terminal-card tech-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">vishwa@developer: ~/academic-journey</span>
              <Terminal size={14} className="terminal-icon" />
            </div>
            
            <div className="terminal-body font-mono">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-cmd">cat student_profile.json</span>
              </div>
              <pre className="terminal-output">
{`{
  "developer": "Vishwa (S. Vishwa)",
  "education": "B.Tech Artificial Intelligence & Data Science",
  "college": "Prince Dr. K. Vasudevan College, Chennai",
  "standing": "Second Year • CGPA: 7.9 / 10",
  "verified_apps": ["LOKHA", "Aether Weather", "INAVIST", "BiteX 3.0", "Connect", "Unit Converter"],
  "martial_arts": "Silambam • 4 Gold, 1 Silver, 1 Bronze Medals",
  "status": "Available for Summer 2025 Internships"
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Quick Academic & Project Stats */}
        <div className="hero-stats-bar">
          {profileData.hero.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="hero-scroll-indicator">
          <button 
            onClick={() => scrollTo('about')} 
            className="scroll-indicator-btn"
            aria-label="Scroll to About section"
            type="button"
          >
            <span className="scroll-text">Scroll to explore</span>
            <ArrowDown size={16} className="bounce-arrow" />
          </button>
        </div>

      </div>
    </section>
  );
}
