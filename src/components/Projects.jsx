import React, { useState, useMemo } from 'react';
import { Layers, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Featured Projects">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <Layers size={14} />
            Engineering Showcase
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Selected software systems, machine learning prototypes, and full-stack applications built during my academic semesters. Each project includes complete source code and an in-depth case study.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project category filters">
          {projectCategories.map((category) => {
            const count = category === 'All' 
              ? projectsData.length 
              : projectsData.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-pill-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                <span>{category}</span>
                <span className="filter-count font-mono">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Layout */}
        <div className="projects-bento-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty-state tech-card text-center">
            <Filter size={32} className="text-muted mx-auto mb-3" />
            <h3 className="text-primary text-lg font-semibold">No projects found in this category</h3>
            <p className="text-secondary text-sm mt-1">Please select &quot;All&quot; or another category to view projects.</p>
          </div>
        )}

      </div>
    </section>
  );
}
