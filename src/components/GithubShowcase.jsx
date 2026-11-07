import React, { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, FolderGit2 } from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { githubConfig } from '../data/github';

export default function GithubShowcase() {
  const [repos, setRepos] = useState(githubConfig.fallbackRepositories);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState('fallback'); // 'api' | 'fallback'

  useEffect(() => {
    if (!githubConfig.enableLiveFetch) return;

    let isMounted = true;
    const controller = new AbortController();

    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubConfig.username}/repos?sort=updated&per_page=6`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github.v3+json'
            }
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (isMounted && Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setDataSource('api');
          }
        } else {
          // Rate limited or user not found, preserve verified fallback
          if (isMounted) setDataSource('fallback');
        }
      } catch {
        if (isMounted) {
          // Network error or aborted, retain fallback data gracefully
          setDataSource('fallback');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRepos();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'python':
        return '#3572A5';
      case 'javascript':
        return '#F1E05A';
      case 'typescript':
        return '#3178C6';
      case 'java':
        return '#B07219';
      case 'c++':
      case 'cpp':
        return '#F34B7D';
      case 'c':
        return '#555555';
      default:
        return '#B88752';
    }
  };

  return (
    <section id="github" className="section-wrapper github-section" aria-label="GitHub Showcase">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker">
            <Github size={14} />
            Open Source &amp; Code Repositories
          </span>
          <h2 className="section-title">GitHub Showcase</h2>
          <p className="section-description">
            Selected open-source repositories and coursework code vaults hosted on GitHub.
          </p>

          <div className="github-profile-pill mt-4">
            <a
              href={githubConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label="View official GitHub profile"
            >
              <Github size={16} />
              <span className="font-mono">@{githubConfig.username}</span>
              <ExternalLink size={14} />
            </a>
            
            <span className="font-mono text-xs text-muted">
              {dataSource === 'api' ? '• Live API Sync' : '• Verified Repository Data'}
            </span>
          </div>
        </div>

        {/* Loading State Skeleton */}
        {loading && (
          <div className="github-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="tech-card github-card animate-pulse">
                <div className="h-5 bg-card-hover rounded w-3/4 mb-3" />
                <div className="h-4 bg-card-hover rounded w-full mb-2" />
                <div className="h-4 bg-card-hover rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && (
          <div className="github-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="tech-card github-card">
                
                <div className="github-card-top">
                  <div className="flex items-center gap-2">
                    <FolderGit2 size={16} className="text-accent flex-shrink-0" />
                    <h3 className="github-repo-name font-mono">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-title-link"
                      >
                        {repo.name}
                      </a>
                    </h3>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon btn-icon-sm text-secondary hover:text-primary"
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="github-repo-desc text-secondary text-sm">
                  {repo.description || "Open-source coursework and development repository."}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="repo-topics-row">
                    {repo.topics.slice(0, 4).map((topic, tIdx) => (
                      <span key={tIdx} className="badge font-mono text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer: Language & Stats */}
                <div className="github-card-footer font-mono text-xs">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="lang-dot"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span className="text-secondary">{repo.language || 'Code'}</span>
                  </div>

                  <div className="github-stats-row text-muted">
                    <span className="flex items-center gap-1" title="GitHub Stars">
                      <Star size={13} className="text-amber" />
                      {repo.stargazers_count ?? 0}
                    </span>
                    <span className="flex items-center gap-1" title="Forks">
                      <GitFork size={13} />
                      {repo.forks_count ?? 0}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
