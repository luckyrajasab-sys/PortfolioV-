import React, { useState } from 'react';
import { FileText, Download, Calendar, Eye, X } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Resume() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="section-wrapper resume-section" aria-label="Resume & Curriculum Vitae">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <FileText size={14} />
            Curriculum Vitae
          </span>
          <h2 className="section-title">Resume &amp; Credentials</h2>
          <p className="section-description">
            A comprehensive one-page overview of academic credentials, engineering proficiencies, verified project implementations, and leadership experience.
          </p>

          <div className="resume-updated-pill mt-3">
            <span className="badge badge-brass font-mono text-xs">
              <Calendar size={12} />
              Last Updated: {profileData.resumeLastUpdated}
            </span>
          </div>
        </div>

        {/* Resume Preview Sheet & Actions Card */}
        <div className="resume-wrapper">
          <div className="tech-card resume-card">
            
            {/* Action Bar */}
            <div className="resume-actions-bar">
              <div className="resume-doc-info">
                <FileText size={20} className="text-accent" />
                <div>
                  <h3 className="resume-doc-title">Vishwa_Resume.pdf</h3>
                  <p className="font-mono text-xs text-muted">Standard 1-Page Academic &amp; Developer CV</p>
                </div>
              </div>

              <div className="resume-action-buttons">
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="btn btn-secondary btn-sm"
                  type="button"
                  aria-label="Preview full resume document"
                >
                  <Eye size={15} />
                  <span>Full View</span>
                </button>

                {profileData.resumeUrl ? (
                  <a
                    href={profileData.resumeUrl}
                    download="Vishwa_Resume.pdf"
                    className="btn btn-primary btn-sm"
                    aria-label="Download Vishwa's Resume in PDF format"
                  >
                    <Download size={15} />
                    <span>Download PDF</span>
                  </a>
                ) : (
                  <button className="btn btn-secondary btn-sm opacity-50 cursor-not-allowed" disabled>
                    Resume Config In Progress
                  </button>
                )}
              </div>
            </div>

            {/* Structured Resume Content Preview Sheet */}
            <div className="resume-sheet">
              
              {/* Sheet Header */}
              <div className="resume-sheet-header">
                <div>
                  <h4 className="sheet-name">{profileData.name}</h4>
                  <p className="sheet-role font-mono text-xs text-accent">{profileData.title}</p>
                </div>
                <div className="sheet-contact-block font-mono text-xs text-secondary">
                  <p>{profileData.email}</p>
                  <p>{profileData.location} • github.com/luckyrajasab-sys</p>
                </div>
              </div>

              <hr className="sheet-divider" />

              {/* Education Summary */}
              <div className="sheet-section">
                <h5 className="sheet-section-title font-mono">EDUCATION</h5>
                <div className="sheet-row">
                  <div>
                    <strong className="text-primary text-sm">B.Tech in Artificial Intelligence &amp; Data Science</strong>
                    <p className="text-secondary text-xs">{profileData.college}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-muted">
                    <p>2023 – 2027 • Second Year</p>
                    <p className="text-emerald font-semibold">CGPA: {profileData.cgpa}</p>
                  </div>
                </div>
              </div>

              {/* Core Technical Proficiencies */}
              <div className="sheet-section">
                <h5 className="sheet-section-title font-mono">TECHNICAL SKILLS</h5>
                <div className="sheet-skills-compact text-xs text-secondary">
                  <p><strong className="text-primary">Programming:</strong> Python, Java, JavaScript (ES6+)</p>
                  <p><strong className="text-primary">Frontend:</strong> React, HTML5, Modern CSS (Grid, Flexbox, Keyframes)</p>
                  <p><strong className="text-primary">Backend &amp; Services:</strong> Firebase (Used in Projects), Supabase (Learning)</p>
                  <p><strong className="text-primary">AI &amp; Data Science:</strong> NumPy, Pandas, Machine Learning Concepts (Learning)</p>
                  <p><strong className="text-primary">CS Fundamentals:</strong> Data Structures &amp; Algorithms (DSA), DBMS</p>
                  <p><strong className="text-primary">Developer Tools &amp; AI:</strong> VS Code, Antigravity, Claude, ChatGPT, Perplexity</p>
                </div>
              </div>

              {/* Selected Projects */}
              <div className="sheet-section">
                <h5 className="sheet-section-title font-mono">FEATURED WEB APPLICATIONS</h5>
                <div className="sheet-project-item">
                  <div className="sheet-row">
                    <strong className="text-primary text-sm">LOKHA — Verified Indian Real Estate Discovery Portal</strong>
                    <span className="font-mono text-xs text-muted">React, Modern CSS, Vercel</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">
                    Multi-metro property search across Bengaluru, Mumbai, Chennai, and Delhi with dynamic multi-parameter filtering.
                  </p>
                </div>

                <div className="sheet-project-item mt-2">
                  <div className="sheet-row">
                    <strong className="text-primary text-sm">Aether Weather Pro — Meteorological Dashboard &amp; AI Analytics</strong>
                    <span className="font-mono text-xs text-muted">React, Weather REST API, Geolocation</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">
                    Apple-inspired weather dashboard with live GPS detection, 14-day forecasts, atmospheric radar visuals, and error resilience.
                  </p>
                </div>

                <div className="sheet-project-item mt-2">
                  <div className="sheet-row">
                    <strong className="text-primary text-sm">INAVIST — All-in-One India Tourism &amp; Itinerary Web Portal</strong>
                    <span className="font-mono text-xs text-muted">React, Hackathon Build, Itinerary Logic</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">
                    Centralized platform for 100+ Indian destinations with crowd level indicators and smart budget estimators.
                  </p>
                </div>
              </div>

              {/* Leadership & Activities */}
              <div className="sheet-section">
                <h5 className="sheet-section-title font-mono">HONORS &amp; EXTRACURRICULAR RECOGNITIONS</h5>
                <p className="text-xs text-secondary">
                  • <strong>Silambam Martial Arts:</strong> Winner of 4 Gold, 1 Silver, and 1 Bronze Medal across District, State &amp; National Levels (7 official certificates).<br />
                  • <strong>Anthropic AI Suite:</strong> Completed ~15 interactive certifications across prompt engineering and Claude API tool use.<br />
                  • <strong>Sole for Souls Marathon:</strong> Official distance marathon finisher for community health awareness.<br />
                  • <strong>National Service Scheme (NSS):</strong> Active student volunteer for campus civic action and social outreach.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Full View Modal */}
        {showPreviewModal && (
          <div className="modal-backdrop" onClick={() => setShowPreviewModal(false)} role="dialog" aria-modal="true">
            <div className="modal-container tech-card resume-preview-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title flex items-center gap-2">
                  <FileText className="text-accent" size={18} />
                  <span>Resume Viewer</span>
                </h3>
                <button 
                  onClick={() => setShowPreviewModal(false)} 
                  className="btn-icon" 
                  aria-label="Close resume viewer"
                  type="button"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body p-0">
                <iframe
                  src={profileData.resumeUrl}
                  title={`${profileData.name} Resume PDF`}
                  className="resume-pdf-iframe"
                  width="100%"
                  height="550"
                />
              </div>

              <div className="modal-footer">
                <a
                  href={profileData.resumeUrl}
                  download="Vishwa_Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} />
                  <span>Download File</span>
                </a>
                <button onClick={() => setShowPreviewModal(false)} className="btn btn-secondary btn-sm" type="button">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
