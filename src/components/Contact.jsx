import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { Github, Linkedin, Instagram } from './icons/BrandIcons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Spam protection trap
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot trap
    if (formData.honeypot) {
      console.warn('Bot submission trapped via honeypot.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      // Simulate network request / prepare mailto or webhook
      await new Promise(resolve => setTimeout(resolve, 850));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch {
      setStatus('error');
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact Vishwa">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-kicker brass">
            <Mail size={14} />
            Let&apos;s Connect
          </span>
          <h2 className="section-title">Have an idea? Let&apos;s build something meaningful.</h2>
          <p className="section-description">
            Whether you have an internship opportunity, a research collaboration, or simply want to discuss systems, AI algorithms, or open source — my inbox is always open.
          </p>
        </div>

        {/* Contact Layout Grid: Info Cards on Left, Form on Right */}
        <div className="contact-layout-grid">
          
          {/* Direct Channels */}
          <div className="contact-info-column">
            
            <div className="tech-card contact-channel-card">
              <div className="channel-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <span className="channel-label font-mono text-xs text-muted">Primary Email</span>
                <p className="channel-value font-mono text-sm text-primary">{profileData.email}</p>
                <button 
                  onClick={copyEmailToClipboard}
                  className="btn btn-secondary btn-sm mt-2 text-xs font-mono"
                  type="button"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            <div className="tech-card contact-channel-card">
              <div className="channel-icon-box oak">
                <MapPin size={22} />
              </div>
              <div>
                <span className="channel-label font-mono text-xs text-muted">Location</span>
                <p className="channel-value font-medium text-sm text-primary">{profileData.location}</p>
                <p className="text-muted text-xs font-mono mt-1">Open to remote &amp; on-site opportunities</p>
              </div>
            </div>

            <div className="tech-card contact-channel-card">
              <div className="channel-icon-box">
                <MessageSquare size={22} />
              </div>
              <div>
                <span className="channel-label font-mono text-xs text-muted">Professional Networks</span>
                <div className="contact-social-row mt-2">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm font-mono text-xs"
                    aria-label="GitHub Profile"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm font-mono text-xs"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  {profileData.instagram && (
                    <a
                      href={profileData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm font-mono text-xs"
                      aria-label="Instagram Profile"
                    >
                      <Instagram size={14} />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="tech-card contact-form-card">
            
            {status === 'success' ? (
              <div className="form-success-state text-center py-8">
                <div className="success-icon-badge mx-auto mb-4">
                  <CheckCircle2 size={36} className="text-emerald" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Message Sent Successfully!</h3>
                <p className="text-secondary text-sm max-w-md mx-auto mt-2">
                  Thank you for reaching out. I usually review and reply to messages within 24 to 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary btn-sm mt-6 font-mono"
                  type="button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                
                {/* Honeypot anti-spam trap */}
                <div className="visually-hidden" aria-hidden="true">
                  <label htmlFor="hp-field">Leave empty</label>
                  <input
                    type="text"
                    id="hp-field"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="form-row-dual">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label font-mono text-xs">
                      Your Name <span className="text-rose">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error-msg font-mono text-xs">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label font-mono text-xs">
                      Your Email <span className="text-rose">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error-msg font-mono text-xs">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label font-mono text-xs">
                    Subject <span className="text-rose">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Summer 2025 Internship / Project Collaboration"
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="form-error-msg font-mono text-xs">
                      <AlertCircle size={12} />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label font-mono text-xs">
                    Message <span className="text-rose">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, problem space, or project idea..."
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error-msg font-mono text-xs">
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary w-full submit-btn"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="spinner-dot" />
                      <span>Transmitting...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      <span>Send Message</span>
                    </span>
                  )}
                </button>

                <p className="form-privacy-note text-center font-mono text-xs text-muted mt-3">
                  * Direct dispatch simulation. You can also mail directly to{' '}
                  <a href={`mailto:${profileData.email}`} className="text-accent underline">
                    {profileData.email}
                  </a>
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
