import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Target, 
  AlertCircle, 
  Layers, 
  CheckCircle2, 
  Lightbulb, 
  TrendingUp, 
  Sparkles, 
  Compass, 
  UserCheck,
  ChevronRight
} from 'lucide-react';
import { Github } from '../components/icons/BrandIcons';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();

  const projectIndex = projectsData.findIndex(p => p.slug === slug || p.id === slug);
  const project = projectsData[projectIndex];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      document.title = `${project.name} — Case Study | Vishwa`;
    } else {
      document.title = 'Project Not Found | Vishwa';
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="container section-wrapper text-center">
        <div className="tech-card p-12 max-w-xl mx-auto">
          <AlertCircle size={48} className="text-rose mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-heading text-primary">Case Study Not Found</h2>
          <p className="text-secondary mt-2 mb-6">
            The project case study you requested does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <article className="project-detail-page" aria-label={`Case Study: ${project.name}`}>
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Link to="/" className="back-link font-mono text-sm">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>

      {/* Case Study Header Banner */}
      <header className="detail-hero-section">
        <div className="container">
          <div className="detail-hero-meta">
            <span className="badge badge-accent font-mono">{project.category}</span>
            {project.badge && (
              <span className="badge badge-brass font-mono">
                <Sparkles size={12} />
                {project.badge}
              </span>
            )}
          </div>

          <h1 className="detail-hero-title">{project.name}</h1>
          <p className="detail-hero-tagline">{project.tagline}</p>

          <p className="detail-hero-overview">{caseStudy.overview}</p>

          {/* External Action Links */}
          <div className="detail-hero-actions">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`Open live demo for ${project.name}`}
              >
                <ExternalLink size={16} />
                <span>Launch Live Application</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={`Inspect source code for ${project.name} on GitHub`}
              >
                <Github size={16} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Case Study Body */}
      <div className="container detail-content-container">
        
        {/* Quick Facts / Metadata Bar */}
        <div className="tech-card detail-specs-card">
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label font-mono text-xs text-muted flex items-center gap-1">
                <UserCheck size={13} className="text-accent" />
                My Role:
              </span>
              <span className="spec-value text-sm font-semibold text-primary">{caseStudy.roleAndContribution}</span>
            </div>

            <div className="spec-item">
              <span className="spec-label font-mono text-xs text-muted flex items-center gap-1">
                <Layers size={13} className="text-brass" />
                Primary Stack:
              </span>
              <div className="spec-tags-wrap">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="badge font-mono text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Problem Statement & Objectives */}
        <div className="detail-section-block">
          <div className="grid-dual-cols">
            
            {/* Problem Statement */}
            <div className="tech-card">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={20} className="text-rose" />
                <h3 className="text-xl font-heading font-bold text-primary">The Problem Statement</h3>
              </div>
              <p className="text-secondary leading-relaxed">{caseStudy.problemStatement}</p>
            </div>

            {/* Project Objectives */}
            <div className="tech-card">
              <div className="flex items-center gap-2 mb-3">
                <Target size={20} className="text-emerald" />
                <h3 className="text-xl font-heading font-bold text-primary">Core Objectives</h3>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                    <CheckCircle2 size={16} className="text-emerald mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Section 2: Technology Stack Breakdown */}
        {caseStudy.techStackDetails && (
          <div className="detail-section-block">
            <h3 className="section-title text-2xl mb-4">Detailed Technology Stack</h3>
            <div className="tech-stack-details-grid">
              
              {caseStudy.techStackDetails.frontend && (
                <div className="tech-card">
                  <h4 className="font-mono text-xs uppercase text-accent font-semibold tracking-wider mb-2">Frontend Architecture</h4>
                  <ul className="space-y-1.5 text-sm text-secondary font-mono">
                    {caseStudy.techStackDetails.frontend.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="dot-brass" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.techStackDetails.backend && (
                <div className="tech-card">
                  <h4 className="font-mono text-xs uppercase text-brass font-semibold tracking-wider mb-2">Backend &amp; APIs</h4>
                  <ul className="space-y-1.5 text-sm text-secondary font-mono">
                    {caseStudy.techStackDetails.backend.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="dot-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.techStackDetails.aiModels && (
                <div className="tech-card">
                  <h4 className="font-mono text-xs uppercase text-emerald font-semibold tracking-wider mb-2">AI &amp; Vector Embeddings</h4>
                  <ul className="space-y-1.5 text-sm text-secondary font-mono">
                    {caseStudy.techStackDetails.aiModels.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="dot-emerald" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.techStackDetails.tooling && (
                <div className="tech-card">
                  <h4 className="font-mono text-xs uppercase text-muted font-semibold tracking-wider mb-2">DevOps &amp; Infrastructure</h4>
                  <ul className="space-y-1.5 text-sm text-secondary font-mono">
                    {caseStudy.techStackDetails.tooling.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="dot-muted" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Section 3: Development Process & Architecture */}
        {caseStudy.process && (
          <div className="detail-section-block">
            <h3 className="section-title text-2xl mb-4">Development Lifecycle &amp; Process</h3>
            <div className="process-timeline-list">
              {caseStudy.process.map((step, idx) => (
                <div key={idx} className="tech-card process-step-card">
                  <span className="font-mono text-xs text-accent font-semibold">{step.phase}</span>
                  <p className="text-secondary text-sm mt-1">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Main Features */}
        <div className="detail-section-block">
          <h3 className="section-title text-2xl mb-4">Key Features &amp; Capabilities</h3>
          <div className="grid-dual-cols">
            {caseStudy.features.map((feature, idx) => (
              <div key={idx} className="tech-card feature-item-card">
                <div className="flex items-start gap-3">
                  <span className="feature-number font-mono text-xs">{idx + 1}</span>
                  <p className="text-sm text-primary font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Challenges Faced & Solutions Implemented */}
        <div className="detail-section-block">
          <h3 className="section-title text-2xl mb-4">Technical Challenges &amp; Engineering Solutions</h3>
          <div className="challenges-grid">
            {caseStudy.challenges.map((item, idx) => (
              <div key={idx} className="tech-card challenge-card">
                <div className="challenge-header">
                  <AlertCircle size={16} className="text-amber flex-shrink-0" />
                  <h4 className="text-primary font-semibold text-base">{item.challenge}</h4>
                </div>
                
                <div className="solution-box mt-3">
                  <div className="flex items-center gap-1.5 mb-1 font-mono text-xs text-emerald font-semibold">
                    <CheckCircle2 size={13} />
                    <span>Implemented Solution:</span>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Results, Outcomes, and Future Roadmap */}
        <div className="detail-section-block">
          <div className="grid-dual-cols">
            
            {/* Authentic Results & Outcomes */}
            <div className="tech-card">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={20} className="text-accent" />
                <h3 className="text-xl font-heading font-bold text-primary">Results &amp; Real Outcomes</h3>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                    <ChevronRight size={15} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons Learned */}
            <div className="tech-card">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={20} className="text-amber" />
                <h3 className="text-xl font-heading font-bold text-primary">Lessons Learned</h3>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                    <CheckCircle2 size={15} className="text-amber mt-0.5 flex-shrink-0" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Section 7: Future Improvements */}
        {caseStudy.futureRoadmap && (
          <div className="detail-section-block">
            <div className="tech-card">
              <div className="flex items-center gap-2 mb-3">
                <Compass size={20} className="text-brass" />
                <h3 className="text-xl font-heading font-bold text-primary">Future Roadmap &amp; Enhancements</h3>
              </div>
              <ul className="space-y-2">
                {caseStudy.futureRoadmap.map((road, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                    <span className="dot-brass" />
                    <span>{road}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Project Navigation Footer (Prev / Next) */}
        <nav className="project-pagination-row" aria-label="Project Case Study Navigation">
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className="pagination-btn prev tech-card">
              <span className="pagination-dir font-mono text-xs text-muted flex items-center gap-1">
                <ArrowLeft size={13} />
                Previous Project
              </span>
              <span className="pagination-title font-semibold text-primary">{prevProject.name}</span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className="pagination-btn next tech-card text-right">
              <span className="pagination-dir font-mono text-xs text-muted flex items-center justify-end gap-1">
                Next Project
                <ChevronRight size={13} />
              </span>
              <span className="pagination-title font-semibold text-primary">{nextProject.name}</span>
            </Link>
          ) : <div />}
        </nav>

      </div>
    </article>
  );
}
