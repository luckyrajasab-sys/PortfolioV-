import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Terminal } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404: Page Not Found | Vishwa';
  }, []);

  return (
    <main className="container section-wrapper not-found-page" tabIndex={-1}>
      <div className="tech-card not-found-card text-center max-w-xl mx-auto p-12">
        
        <div className="not-found-kicker mb-3">
          <span className="badge badge-accent font-mono text-xs">
            <Terminal size={13} />
            HTTP Status: 404
          </span>
        </div>

        <h1 className="not-found-title font-mono text-6xl font-extrabold text-accent mb-2">404</h1>
        <h2 className="text-2xl font-heading font-bold text-primary mb-3">Page Not Found</h2>
        
        <p className="text-secondary text-sm mb-6 leading-relaxed">
          The requested route does not exist or has been shifted in the directory tree. Let&apos;s get you back to the portfolio showcase.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return Home</span>
          </Link>
          
          <Link to="/#projects" className="btn btn-secondary">
            <Compass size={16} />
            <span>Explore Projects</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
