import React, { useState } from 'react';
import { BookMarked, Target, Compass, AlertTriangle, CheckCircle, ArrowRight, ExternalLink, Calendar, GitCommit } from 'lucide-react';
import { learningData } from '../data/learning';

export default function LearningJourney() {
  const [activeTab, setActiveTab] = useState('journal'); // 'journal' | 'goals' | 'future'

  return (
    <section id="learning" className="section-wrapper learning-section" aria-label="Learning Journey and Academic Reflections">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker brass">
            <BookMarked size={14} />
            Academic Learning Portfolio
          </span>
          <h2 className="section-title">Learning Journey &amp; Reflection</h2>
          <p className="section-description">
            A transparent engineering journal documenting technical hurdles, problem dissections, lessons absorbed, and active learning goals. Real engineering is forged through debugging and continuous reflection.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="learning-tabs-bar" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'journal'}
            className={`filter-pill-btn ${activeTab === 'journal' ? 'active' : ''}`}
            onClick={() => setActiveTab('journal')}
            type="button"
          >
            <BookMarked size={14} />
            <span>Digital Journal ({learningData.entries.length})</span>
          </button>
          
          <button
            role="tab"
            aria-selected={activeTab === 'goals'}
            className={`filter-pill-btn ${activeTab === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveTab('goals')}
            type="button"
          >
            <Target size={14} />
            <span>Active Learning Goals ({learningData.currentGoals.length})</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'future'}
            className={`filter-pill-btn ${activeTab === 'future' ? 'active' : ''}`}
            onClick={() => setActiveTab('future')}
            type="button"
          >
            <Compass size={14} />
            <span>Future Objectives</span>
          </button>
        </div>

        {/* Tab 1: Digital Journal Entries */}
        {activeTab === 'journal' && (
          <div className="journal-entries-stream">
            {learningData.entries.map((entry) => (
              <article key={entry.id} className="tech-card journal-entry-card">
                
                {/* Entry Header */}
                <div className="journal-header-row">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-accent font-mono text-xs">{entry.category}</span>
                    <span className="badge badge-brass font-mono text-xs">{entry.badge}</span>
                  </div>
                  <span className="font-mono text-xs text-muted flex items-center gap-1">
                    <Calendar size={12} />
                    {entry.date}
                  </span>
                </div>

                <h3 className="journal-title">{entry.title}</h3>
                <p className="journal-description">{entry.description}</p>

                {/* Problem Encountered Callout */}
                <div className="journal-callout problem">
                  <div className="callout-header">
                    <AlertTriangle size={15} className="text-amber" />
                    <span className="font-mono text-xs font-semibold uppercase text-secondary">
                      The Problem Encountered:
                    </span>
                  </div>
                  <p className="callout-text">{entry.problemEncountered}</p>
                </div>

                {/* What I Learned */}
                <div className="journal-callout solution">
                  <div className="callout-header">
                    <CheckCircle size={15} className="text-emerald" />
                    <span className="font-mono text-xs font-semibold uppercase text-secondary">
                      What I Learned &amp; Implemented:
                    </span>
                  </div>
                  <p className="callout-text">{entry.whatILearned}</p>
                </div>

                {/* What I Would Improve */}
                <div className="journal-callout improvement">
                  <div className="callout-header">
                    <ArrowRight size={15} className="text-brass" />
                    <span className="font-mono text-xs font-semibold uppercase text-secondary">
                      What I Would Improve Next Time:
                    </span>
                  </div>
                  <p className="callout-text">{entry.whatIWouldImprove}</p>
                </div>

                {/* Evidence Attachment */}
                {entry.evidence && (
                  <div className="journal-evidence-footer">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted">
                      <GitCommit size={14} className="text-accent" />
                      <span>Evidence: {entry.evidence}</span>
                    </div>
                    {entry.evidenceUrl && (
                      <a
                        href={entry.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm font-mono text-xs"
                      >
                        <span>View Repository</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                )}

              </article>
            ))}
          </div>
        )}

        {/* Tab 2: Active Learning Goals */}
        {activeTab === 'goals' && (
          <div className="learning-goals-grid">
            {learningData.currentGoals.map((item, idx) => (
              <div key={idx} className="tech-card goal-card">
                <div className="goal-card-top">
                  <span className="badge badge-brass font-mono text-xs">{item.domain}</span>
                  <span className="badge badge-accent font-mono text-xs">{item.status}</span>
                </div>

                <h3 className="goal-title">{item.goal}</h3>
                <p className="goal-detail">{item.detail}</p>

                {/* Progress bar */}
                <div className="goal-progress-wrap">
                  <div className="goal-progress-label font-mono text-xs">
                    <span>Curriculum Coverage</span>
                    <span className="text-brass">{item.progress}</span>
                  </div>
                  <div className="goal-progress-track">
                    <div className="goal-progress-fill" style={{ width: item.progress }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Future Objectives */}
        {activeTab === 'future' && (
          <div className="future-objectives-grid">
            {learningData.futureObjectives.map((obj, idx) => (
              <div key={idx} className="tech-card objective-card">
                <span className="badge badge-accent font-mono text-xs mb-3">{obj.timeline}</span>
                <h3 className="objective-title">{obj.title}</h3>
                <p className="objective-actions text-sm text-secondary mt-2">
                  <strong className="text-primary font-mono text-xs block mb-1">Action Plan:</strong>
                  {obj.actionItems}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

