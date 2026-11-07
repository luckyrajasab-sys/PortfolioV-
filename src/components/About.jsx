import React from 'react';
import { BookOpen, Compass, Target, Sparkles, CheckCircle2, TrendingUp, Lightbulb, Clock, Shield } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const { about } = profileData;

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Me">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <Compass size={14} />
            Academic Narrative &amp; Background
          </span>
          <h2 className="section-title">Beyond the Codebase</h2>
          <p className="section-description">
            A look into my academic journey at Prince Dr. K. Vasudevan College, why I chose Artificial Intelligence &amp; Data Science, and how state-level Silambam athletic discipline fuels my engineering focus.
          </p>
        </div>

        {/* Bento Grid: Story & Philosophy */}
        <div className="about-bento-grid">
          
          {/* Main Narrative Card */}
          <div className="tech-card about-story-card">
            <div className="card-kicker-row">
              <span className="badge badge-accent">
                <BookOpen size={12} />
                My Background
              </span>
              <span className="text-muted text-sm font-mono">B.Tech AI &amp; Data Science</span>
            </div>
            
            <h3 className="about-card-title">{about.introduction}</h3>
            
            <p className="about-paragraph">{about.bio}</p>
            <p className="about-paragraph">{about.athleticBackground}</p>

            {/* Core Interests Tags */}
            <div className="about-interests-wrap mt-3 mb-4">
              <span className="font-mono text-xs text-muted block mb-2 font-semibold">CORE TECHNICAL INTERESTS:</span>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, idx) => (
                  <span key={idx} className="badge badge-oak font-mono text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-core-pillars">
              <div className="pillar-item">
                <span className="pillar-icon-box">
                  <Lightbulb size={18} />
                </span>
                <div>
                  <h4 className="pillar-heading">Learning Philosophy</h4>
                  <p className="pillar-text">{about.learningPhilosophy}</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-icon-box oak">
                  <Target size={18} />
                </span>
                <div>
                  <h4 className="pillar-heading">Future Ambitions</h4>
                  <p className="pillar-text">{about.futureAmbitions}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Journey Timeline */}
          <div className="tech-card about-timeline-card">
            <div className="card-kicker-row">
              <span className="badge badge-brass">
                <Clock size={12} />
                Academic Timeline
              </span>
              <span className="text-muted text-sm font-mono">2023 - Present</span>
            </div>

            <h3 className="about-card-title">Educational Milestones</h3>
            
            <div className="timeline-flow">
              {about.timeline.map((item, idx) => (
                <div key={idx} className="timeline-entry">
                  <div className="timeline-marker">
                    <span className="timeline-dot" />
                    {idx < about.timeline.length - 1 && <span className="timeline-line" />}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year font-mono">{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Silambam Badge Callout */}
            <div className="silambam-callout-box mt-4 p-3 bg-secondary rounded border border-subtle flex items-center gap-3">
              <div className="silambam-icon-badge text-amber">
                <Shield size={24} />
              </div>
              <div className="text-xs">
                <strong className="text-primary font-heading block">Silambam Martial Artist</strong>
                <span className="text-muted font-mono">4 Gold • 1 Silver • 1 Bronze Medal • 7 Certifications</span>
              </div>
            </div>
          </div>

        </div>

        {/* Reflection Subsection: Learning, Improved, Working Towards */}
        <div className="about-reflection-section">
          <div className="reflection-header">
            <span className="section-kicker brass">
              <Sparkles size={14} />
              Continuous Growth Log
            </span>
            <h3 className="reflection-title">2nd-Year Reflection &amp; Self-Assessment</h3>
            <p className="text-secondary max-w-2xl">
              Authentic engineering growth requires continuous self-interrogation. Here is an honest snapshot of what I am actively absorbing, what I have solidified, and my upcoming targets.
            </p>
          </div>

          <div className="reflection-grid">
            
            {/* What I'm Learning */}
            <div className="tech-card reflection-card">
              <div className="reflection-icon-badge amber">
                <BookOpen size={20} />
              </div>
              <h4 className="reflection-card-heading">What I'm Learning</h4>
              <p className="reflection-card-text">
                {about.reflections.learning}
              </p>
              <div className="reflection-tag-box">
                <span className="badge">Binary Trees &amp; Graphs</span>
                <span className="badge">DBMS Normalization</span>
                <span className="badge">Scikit-Learn Baselines</span>
              </div>
            </div>

            {/* What I've Improved */}
            <div className="tech-card reflection-card">
              <div className="reflection-icon-badge emerald">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="reflection-card-heading">What I've Improved</h4>
              <p className="reflection-card-text">
                {about.reflections.improved}
              </p>
              <div className="reflection-tag-box">
                <span className="badge badge-emerald">Complex Cart State</span>
                <span className="badge badge-emerald">API Error Fallbacks</span>
                <span className="badge badge-emerald">vCard Standards</span>
              </div>
            </div>

            {/* What I'm Working Towards */}
            <div className="tech-card reflection-card">
              <div className="reflection-icon-badge walnut">
                <TrendingUp size={20} />
              </div>
              <h4 className="reflection-card-heading">What I'm Working Towards</h4>
              <p className="reflection-card-text">
                {about.reflections.workingTowards}
              </p>
              <div className="reflection-tag-box">
                <span className="badge badge-accent">Summer '25 Internships</span>
                <span className="badge badge-accent">ML Web Integration</span>
                <span className="badge badge-accent">Open-Source PRs</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
