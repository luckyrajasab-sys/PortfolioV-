import React, { useState } from 'react';
import { Trophy, ExternalLink, Eye, Calendar, Sparkles } from 'lucide-react';
import CertificateModal from './CertificateModal';
import { achievementsData } from '../data/achievements';

const filterCategories = [
  'All',
  'Silambam & Sports',
  'Anthropic AI Suite',
  'Technical Certifications',
  'Hackathons & Community'
];

export default function Achievements() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeCertificate, setActiveCertificate] = useState(null);

  const filteredAchievements = selectedFilter === 'All'
    ? achievementsData
    : achievementsData.filter(item => item.category === selectedFilter);

  return (
    <section id="achievements" className="section-wrapper achievements-section" aria-label="Achievements and Certifications">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <Trophy size={14} />
            Honors &amp; Milestones
          </span>
          <h2 className="section-title">Achievements &amp; Certifications</h2>
          <p className="section-description">
            Verifiable milestones from hackathons, competitive coding tournaments, industry-recognized certifications, and technical community leadership.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="achievements-filter-bar" role="tablist">
          {filterCategories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedFilter === cat}
              className={`filter-pill-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="achievements-grid">
          {filteredAchievements.map((item) => (
            <div key={item.id} className="tech-card achievement-card">
              
              <div className="achievement-card-top">
                <span className="badge badge-accent font-mono text-xs">{item.category}</span>
                <span className="font-mono text-xs text-muted flex items-center gap-1">
                  <Calendar size={12} />
                  {item.date}
                </span>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-org font-mono text-xs text-secondary">{item.organization}</p>
              
              {item.badgeText && (
                <div className="achievement-badge-pill">
                  <Sparkles size={12} className="text-brass" />
                  <span className="font-mono text-xs">{item.badgeText}</span>
                </div>
              )}

              <p className="achievement-desc">{item.description}</p>

              {/* Skills Demonstrated */}
              {item.skillsDemonstrated && (
                <div className="achievement-skills-row">
                  {item.skillsDemonstrated.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag text-xs font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions: View Certificate & Verify Link */}
              <div className="achievement-actions">
                {item.certificateImage && (
                  <button
                    onClick={() => setActiveCertificate(item)}
                    className="btn btn-secondary btn-sm"
                    type="button"
                    aria-label={`View certificate preview for ${item.title}`}
                  >
                    <Eye size={14} />
                    <span>View Certificate</span>
                  </button>
                )}

                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    aria-label={`Verify credentials online for ${item.title}`}
                  >
                    <ExternalLink size={14} />
                    <span>Verify</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />

      </div>
    </section>
  );
}
