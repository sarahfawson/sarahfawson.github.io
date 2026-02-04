'use client';

import Link from 'next/link';

export default function DesignLeadershipPage() {
  return (
    <main className="container">
      <div className="project-detail">
        <Link href="/projects" className="nav-link mb-8 text-[var(--accent-turquoise-dark)]" data-text="← Back to Projects">← Back to Projects</Link>
        
        <div className="project-header">
          <h1>Design Leadership</h1>
          <p className="project-year">2025-2026</p>
          <p className="project-subtitle">Empowering teams through workshops, demos, and trainings to elevate design practice across the organization.</p>
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Workshops</h2>
            <p>I enjoy leading interactive sessions designed to align, foster collaboration, and solve challenges together.</p>
            
            {/* Placeholder for workshop content */}
            <div className="placeholder-grid">
              <div className="placeholder-item">
                <div className="placeholder-image">
                  {/* Add workshop image here */}
                  <p className="placeholder-text">image coming soon</p>
                </div>
                <h4>Placeholder Title</h4>
                <p>Description of the workshop, its goals, and outcomes.</p>
              </div>
              
              <div className="placeholder-item">
                <div className="placeholder-image">
                  {/* Add workshop image here */}
                  <p className="placeholder-text">Workshop image coming soon</p>
                </div>
                <h4>Placeholder Title</h4>
                <p>Description of the workshop, its goals, and outcomes.</p>
              </div>
            </div>
          </section>

          <hr className="section-divider" />

          <section className="project-section">
            <h2>Demos</h2>
            <p>Live demonstrations showcasing ideas of how to use new design tools, techniques, and best practices to inspire ICs and teams.</p>
            
            {/* Placeholder for demo content */}
            <div className="placeholder-grid">
              <div className="placeholder-item">
                <div className="placeholder-image">
                  {/* Add demo image here */}
                  <p className="placeholder-text">Demo image coming soon</p>
                </div>
                <h4>Demo Title</h4>
                <p>Description of what was demoed and key takeaways.</p>
              </div>
              
              <div className="placeholder-item">
                <div className="placeholder-image">
                  {/* Add demo image here */}
                  <p className="placeholder-text">Demo image coming soon</p>
                </div>
                <h4>Demo Title</h4>
                <p>Description of what was demoed and key takeaways.</p>
              </div>
            </div>
          </section>

          <hr className="section-divider" />
        </div>
      </div>

      <style jsx>{`
        .placeholder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }
        
        .placeholder-item {
          background: var(--card-background, #f8f8f8);
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }
        
        .placeholder-item:hover {
          transform: translateY(-4px);
        }
        
        .placeholder-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .placeholder-text {
          color: #666;
          font-style: italic;
          font-size: 0.9rem;
        }
        
        .placeholder-item h4 {
          margin-bottom: 0.5rem;
          color: var(--text-color, #333);
        }
        
        .placeholder-item p {
          color: var(--text-secondary, #666);
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </main>
  );
}
