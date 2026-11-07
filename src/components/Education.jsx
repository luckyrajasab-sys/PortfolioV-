import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section" aria-label="Education and Coursework">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <GraduationCap size={14} />
            Academic Foundation
          </span>
          <h2 className="section-title">Education &amp; Coursework</h2>
          <p className="section-description">
            My formal university training in Computer Science &amp; Engineering, detailing semester-by-semester coursework, academic milestones, and theoretical foundations.
          </p>
        </div>

        {/* Primary Degree Banner Card */}
        <div className="tech-card education-hero-card">
          <div className="degree-badge-row">
            <span className="badge badge-accent font-mono">
              <Calendar size={12} />
              {educationData.duration}
            </span>
            <span className="badge badge-emerald font-mono">
              <CheckCircle2 size={12} />
              {educationData.currentStanding}
            </span>
            <span className="badge badge-brass font-mono">
              Cumulative CGPA: {educationData.grade}
            </span>
          </div>

          <h3 className="degree-title">{educationData.degree}</h3>
          <p className="degree-department">
            {educationData.department} • <span className="text-accent">{educationData.specialization}</span>
          </p>
          <p className="degree-institution">
            {educationData.institution} — <span className="text-secondary">{educationData.location}</span>
          </p>
          
          <p className="degree-overview">{educationData.overview}</p>
        </div>

        {/* Semester-by-Semester Progression Cards */}
        <div className="semesters-grid">
          {educationData.semesters.map((sem, sIdx) => (
            <div key={sIdx} className="tech-card semester-card">
              
              <div className="semester-card-header">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="semester-number font-heading">{sem.semester}</h4>
                    <span className={`badge ${sem.status === 'In Progress' ? 'badge-accent' : 'badge-emerald'}`}>
                      {sem.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted">{sem.period}</span>
                </div>
                <span className="semester-highlight-pill">{sem.highlight}</span>
              </div>

              {/* Coursework List */}
              <div className="semester-courses">
                <div className="coursework-label font-mono text-xs text-secondary">
                  <BookOpen size={12} />
                  <span>Key Coursework &amp; Topics:</span>
                </div>
                
                <ul className="courses-list">
                  {sem.courses.map((course, cIdx) => (
                    <li key={cIdx} className="course-item">
                      <div className="course-header">
                        <span className="course-code font-mono text-xs">{course.code}</span>
                        <span className="course-name font-medium">{course.name}</span>
                      </div>
                      <p className="course-topics text-xs text-muted font-mono">{course.keyTopics}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Semester Milestones */}
              {sem.milestones && sem.milestones.length > 0 && (
                <div className="semester-milestones">
                  <span className="milestones-heading font-mono text-xs text-secondary">
                    <CheckCircle2 size={12} className="text-emerald" />
                    Key Milestones:
                  </span>
                  <ul className="milestones-list">
                    {sem.milestones.map((milestone, mIdx) => (
                      <li key={mIdx} className="milestone-item text-xs text-secondary">
                        <ChevronRight size={12} className="text-accent mt-0.5" />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Academic Honors Banner */}
        <div className="academic-honors-row">
          {educationData.academicHonors.map((honor, hIdx) => (
            <div key={hIdx} className="tech-card honor-card">
              <div className="honor-icon-wrapper">
                <Award size={20} className="text-amber" />
              </div>
              <div>
                <h4 className="honor-title">{honor.title}</h4>
                <p className="honor-description">{honor.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
