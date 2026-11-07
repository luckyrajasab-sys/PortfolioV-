import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { Github } from './icons/BrandIcons';

export default function ProjectCard({ project }) {
  const {
    slug,
    name,
    tagline,
    category,
    badge,
    shortDescription,
    problemSolved,
    techStack,
    githubUrl,
    liveDemoUrl,
    visualType
  } = project;

  // Render stylized interactive mockup tailored to Vishwa's real projects
  const renderVisualMockup = () => {
    switch (visualType) {
      case 'dashboard-mock':
        // LOKHA — Real Estate Discovery
        return (
          <div className="card-mockup-screen dashboard-mockup">
            <div className="mockup-bar">
              <span className="mock-dot red" />
              <span className="mock-dot yellow" />
              <span className="mock-dot green" />
              <span className="mockup-label">LOKHA • Verified Indian Properties</span>
            </div>
            <div className="mockup-content font-mono text-xs">
              <div className="flex justify-between items-center text-primary mb-1">
                <span className="font-semibold text-accent">Chennai / Bengaluru Villa</span>
                <span className="badge badge-emerald text-xs">Verified</span>
              </div>
              <p className="text-secondary">3 BHK • 1,850 sq.ft • ₹95,00,000</p>
              <div className="flex gap-2 mt-2">
                <span className="badge">Gated Community</span>
                <span className="badge">Metro 0.8 km</span>
                <span className="badge badge-brass">0 Brokerage</span>
              </div>
            </div>
          </div>
        );
      case 'ai-terminal':
        // Aether Weather Pro — Meteorological Dashboard
        return (
          <div className="card-mockup-screen ai-mockup">
            <div className="mockup-bar">
              <span className="mock-dot red" />
              <span className="mock-dot yellow" />
              <span className="mock-dot green" />
              <span className="mockup-label">Aether Weather Pro • Geolocation Live</span>
            </div>
            <div className="mockup-content font-mono text-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="text-primary font-semibold">Chennai, Tamil Nadu</span>
                <span className="text-accent font-bold text-sm">31°C</span>
              </div>
              <p className="text-secondary">&gt; Condition: Part Cloudy • Feels Like 34°C</p>
              <p className="text-brass mt-1">&gt; Wind: 14 km/h ENE • Humidity: 72% • UV: 6</p>
            </div>
          </div>
        );
      case 'canvas-dsa':
        // INAVIST — India Tourism Hackathon Project
        return (
          <div className="card-mockup-screen dsa-mockup">
            <div className="mockup-bar">
              <span className="mock-dot red" />
              <span className="mock-dot yellow" />
              <span className="mock-dot green" />
              <span className="mockup-label">INAVIST • India Tourism Portal</span>
            </div>
            <div className="mockup-content font-mono text-xs">
              <div className="flex justify-between items-center text-primary mb-1">
                <span className="font-semibold text-brass">Destination: Taj Mahal &amp; Hampi</span>
                <span className="badge badge-accent">Hackathon Build</span>
              </div>
              <p className="text-secondary">&gt; Best Season: Oct – March • Crowd: Moderate</p>
              <div className="flex gap-2 mt-2">
                <span className="badge badge-emerald">Budget: ₹2,500/day</span>
                <span className="badge">100+ Heritage Sites</span>
              </div>
            </div>
          </div>
        );
      case 'chart-preview':
        // BiteX 3.0 — Modern Food Delivery
        return (
          <div className="card-mockup-screen chart-mockup">
            <div className="mockup-bar">
              <span className="mock-dot red" />
              <span className="mock-dot yellow" />
              <span className="mock-dot green" />
              <span className="mockup-label">BiteX 3.0 • Cart Synchronization</span>
            </div>
            <div className="mockup-content font-mono text-xs">
              <div className="flex justify-between text-secondary mb-1">
                <span>Paneer Tikka Roll x 2</span>
                <span className="text-primary font-semibold">₹240</span>
              </div>
              <div className="flex justify-between text-secondary mb-1">
                <span>Cold Brew Coffee x 1</span>
                <span className="text-primary font-semibold">₹120</span>
              </div>
              <div className="flex justify-between border-t border-subtle pt-1 mt-1 font-semibold text-primary">
                <span>Total (incl. tax)</span>
                <span className="text-emerald">₹378</span>
              </div>
            </div>
          </div>
        );
      case 'code-editor':
        // Connect — Smart Contact Hub
        return (
          <div className="card-mockup-screen code-mockup">
            <div className="mockup-bar">
              <span className="mock-dot red" />
              <span className="mock-dot yellow" />
              <span className="mock-dot green" />
              <span className="mockup-label">Connect • Smart Contact Hub &amp; vCard</span>
            </div>
            <div className="mockup-content font-mono text-xs text-secondary">
              <p><span className="text-accent">const</span> contact = <span className="text-brass">new</span> ContactDossier();</p>
              <p>contact.dialCode(<span className="text-emerald">&quot;+91&quot;</span>).generateQR();</p>
              <p className="text-muted mt-1">// Format: vCard 3.0 • Single-Tap Camera Scan</p>
            </div>
          </div>
        );
      default:
        // Unit Converter
        return (
          <div className="card-mockup-screen data-mockup">
            <div className="mockup-bar">
              <span className="mock-dot red" />
              <span className="mock-dot yellow" />
              <span className="mock-dot green" />
              <span className="mockup-label">Unit Converter • High Precision Math</span>
            </div>
            <div className="mockup-content font-mono text-xs">
              <div className="flex justify-between items-center text-primary mb-1">
                <span>5.40 Meters</span>
                <span className="text-accent font-bold">⇄</span>
                <span className="text-brass font-semibold">17.7165 Feet</span>
              </div>
              <p className="text-secondary mt-1">&gt; Base-Unit Normalization • Zero Rounding Error</p>
              <p className="text-muted mt-1">Categories: Length • Mass • Temp • Digital Storage</p>
            </div>
          </div>
        );
    }
  };

  return (
    <article className="tech-card project-card">
      
      {/* Visual Mockup Header */}
      <div className="project-card-visual">
        {renderVisualMockup()}
      </div>

      {/* Meta Row: Category & Featured Badge */}
      <div className="project-card-meta">
        <span className="badge badge-accent font-mono">{category}</span>
        {badge && (
          <span className="badge badge-brass font-mono">
            <Sparkles size={11} />
            {badge}
          </span>
        )}
      </div>

      {/* Project Title & Tagline */}
      <h3 className="project-card-title">
        <Link to={`/projects/${slug}`} className="project-title-link">
          {name}
        </Link>
      </h3>
      <p className="project-card-tagline">{tagline}</p>

      {/* Short Summary */}
      <p className="project-card-description">{shortDescription}</p>

      {/* Problem Being Solved Callout */}
      <div className="project-problem-box">
        <div className="problem-box-header">
          <AlertCircle size={14} className="problem-icon" />
          <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-wider">
            Problem Being Solved:
          </span>
        </div>
        <p className="problem-box-text">{problemSolved}</p>
      </div>

      {/* Technology Stack Tags */}
      <div className="project-tech-stack" aria-label="Technology Stack">
        {techStack.map((tech, idx) => (
          <span key={idx} className="tech-tag font-mono">
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons: Case Study, Live Demo, GitHub */}
      <div className="project-card-actions">
        <Link 
          to={`/projects/${slug}`} 
          className="btn btn-primary btn-sm project-action-btn"
          aria-label={`Read full case study on ${name}`}
        >
          <BookOpen size={14} />
          <span>Case Study</span>
        </Link>

        {liveDemoUrl && (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm project-action-btn"
            aria-label={`View live demo of ${name}`}
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm project-action-btn"
            aria-label={`View GitHub source code for ${name}`}
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        )}
      </div>

    </article>
  );
}
