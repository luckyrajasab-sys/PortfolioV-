import React, { useEffect } from 'react';
import { X, ExternalLink, Award } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container tech-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="flex items-center gap-2">
            <Award className="text-accent" size={20} />
            <h3 id="modal-title" className="modal-title">{certificate.title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="btn-icon" 
            aria-label="Close certificate modal"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        {/* Certificate Graphic Preview */}
        <div className="modal-body">
          <div className="certificate-frame">
            <img 
              src={certificate.certificateImage} 
              alt={`Certificate for ${certificate.title}`} 
              className="certificate-image"
              loading="lazy"
            />
          </div>

          <div className="modal-meta mt-4">
            <div className="modal-meta-row">
              <span className="font-mono text-xs text-muted">Issuing Organization:</span>
              <span className="font-medium text-sm text-primary">{certificate.organization}</span>
            </div>
            <div className="modal-meta-row">
              <span className="font-mono text-xs text-muted">Issue Date:</span>
              <span className="font-mono text-xs text-secondary">{certificate.date}</span>
            </div>
            {certificate.badgeText && (
              <div className="modal-meta-row">
                <span className="font-mono text-xs text-muted">Credential ID / Standing:</span>
                <span className="badge badge-accent font-mono text-xs">{certificate.badgeText}</span>
              </div>
            )}
            <p className="modal-desc text-secondary text-sm mt-3">{certificate.description}</p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Verify Online</span>
              <ExternalLink size={14} />
            </a>
          )}
          <button 
            onClick={onClose} 
            className="btn btn-secondary btn-sm"
            type="button"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

