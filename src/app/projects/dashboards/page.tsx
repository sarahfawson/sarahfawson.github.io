"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function DashboardsPage() {
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>Data Dashboards</h1>
          <p className="project-subtitle">Designing data for public consumption.</p>
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Info coming soon</h2>
            <p>Stay tuned for more details on this project.</p>
            
            <div className="project-image-container">
              <Image
                src="/images/portfolio/thedatasays-personal/dash-general-light.png"
                alt="dashboard in light mode"
                width={800}
                height={600}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          </section>

          <hr className="section-divider" />

          {/* <section className="project-section">
            
            <h2>Journey Maps</h2>
            <p>
              User journey maps that illustrate the complete experience of users 
              as they interact with products, services, or processes. More to come...
            </p>
            
          </section>

          <hr className="section-divider" /> */}

          {/* <section className="project-section">
            <h2>Methodology</h2>
            <p>
              Each diagram is created through a systematic approach that involves 
              research, stakeholder interviews, and iterative refinement to ensure 
              clarity and accuracy in representing complex processes.
            </p>
          </section> */}


        </div>
      </div>
    </main>
  );
} 