import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  if (!experienceData || experienceData.length === 0) {
    return (
      <section id="experience" className="section-wrapper experience-section" aria-label="Experience">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">
              <Briefcase size={14} />
              Professional Path
            </span>
            <h2 className="section-title">Experience &amp; Leadership</h2>
          </div>
          <div className="tech-card text-center p-8">
            <p className="text-secondary">Currently preparing for Summer 2025 internship opportunities.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-wrapper experience-section" aria-label="Experience and Leadership">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <Briefcase size={14} />
            Professional &amp; Academic Leadership
          </span>
          <h2 className="section-title">Experience &amp; Contributions</h2>
          <p className="section-description">
            Hands-on technical leadership, academic peer mentoring, and open-source contributions. Real responsibilities with measurable impact.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="experience-timeline-item">
              
              <div className="exp-timeline-dot-wrapper">
                <div className="exp-timeline-dot">
                  <Briefcase size={14} className="text-accent" />
                </div>
                {idx < experienceData.length - 1 && <div className="exp-timeline-stem" />}
              </div>

              <div className="tech-card exp-card">
                
                {/* Header Row */}
                <div className="exp-card-header">
                  <div>
                    <span className="badge badge-accent font-mono text-xs">{item.type}</span>
                    <h3 className="exp-role-title">{item.role}</h3>
                    <h4 className="exp-organization-name">{item.organization}</h4>
                  </div>
                  
                  <div className="exp-meta-right font-mono text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="exp-section-block">
                  <span className="exp-block-label font-mono text-xs text-secondary">
                    Core Responsibilities:
                  </span>
                  <ul className="exp-list">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="exp-list-item text-secondary text-sm">
                        <ChevronRight size={13} className="text-accent mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                {item.achievements && (
                  <div className="exp-section-block mt-3">
                    <span className="exp-block-label font-mono text-xs text-secondary">
                      Key Outcomes &amp; Impact:
                    </span>
                    <ul className="exp-list">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="exp-list-item text-emerald text-sm">
                          <CheckCircle2 size={13} className="text-emerald mt-1 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills Developed */}
                {item.skillsDeveloped && (
                  <div className="exp-skills-row mt-4">
                    {item.skillsDeveloped.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-tag text-xs font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
