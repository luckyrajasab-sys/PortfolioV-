import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Wrench, 
  Atom, 
  FileCode, 
  Layout, 
  Palette, 
  Coffee, 
  Network, 
  Database, 
  Table, 
  BarChart3, 
  Brain, 
  GitBranch, 
  Code, 
  UploadCloud, 
  PenTool,
  CheckCircle 
} from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { skillsData } from '../data/skills';

// Dynamic icon resolver
const iconMap = {
  Atom,
  FileCode,
  Layout,
  Palette,
  Terminal,
  Coffee,
  Network,
  Database,
  Cpu,
  Table,
  BarChart3,
  Brain,
  GitBranch,
  Github,
  Code,
  UploadCloud,
  Figma: PenTool,
};

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={20} className="category-header-icon" />;
      case 'backend':
        return <Terminal size={20} className="category-header-icon" />;
      case 'ai-data':
        return <Cpu size={20} className="category-header-icon oak" />;
      default:
        return <Wrench size={20} className="category-header-icon" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <Code2 size={14} />
            Technical Toolkit
          </span>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-description">
            A grounded overview of my technical abilities across the stack. Rather than arbitrary percentage ratings, each skill reflects real-world project usage and academic coursework rigor.
          </p>
        </div>

        {/* Grouped Bento Layout */}
        <div className="skills-categories-grid">
          {skillsData.categories.map((cat) => (
            <div key={cat.id} className="tech-card skill-category-card">
              
              {/* Category Header */}
              <div className="category-card-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <span className="category-kicker font-mono text-xs">{cat.kicker}</span>
                  <h3 className="category-title">{cat.title}</h3>
                </div>
              </div>

              <p className="category-description">{cat.description}</p>

              {/* Skills List in Category */}
              <div className="skills-pill-grid">
                {cat.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || CheckCircle;

                  return (
                    <div key={sIdx} className="skill-detail-item">
                      <div className="skill-item-top">
                        <div className="skill-icon-name">
                          <IconComponent size={16} className="skill-item-icon" />
                          <span className="skill-name font-semibold">{skill.name}</span>
                        </div>
                        <span className={`badge font-mono text-xs ${
                          skill.status === 'Used in Projects' ? 'badge-emerald' : 'badge-amber'
                        }`}>
                          {skill.status}
                        </span>
                      </div>
                      
                      {skill.context && (
                        <p className="skill-context-text">{skill.context}</p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="skills-footer-note text-center">
          <p className="text-sm text-secondary font-mono">
            * All technologies listed have been verified through academic laboratories, personal software builds, or open-source pull requests.
          </p>
        </div>

      </div>
    </section>
  );
}
