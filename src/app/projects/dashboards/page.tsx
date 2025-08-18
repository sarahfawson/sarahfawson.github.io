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
          <p className="project-subtitle">Making data and insights easy and enjoyable to find and understand.</p>
        </div>

        <div className="project-content">
          <section className="project-section">

          </section>
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Insights Hub - Deloitte Client</h2>
          </section>
          <section className="project-section">
            <h4>Background</h4>
            <p>MangoDB is going through a digital transformation to update their financial and HR systems that collect data used in decision-making.
            This is a tough time with lots of change for everyone in the company, and management wants a “data insights hub” up as soon as possible to have better visibility into what is going on now, and into the future. 
            They have seen what Deloitte has built for its leadership internally and wants the same for MangoDB.</p>
            <p>My Role: Design Lead</p>
          </section>
          <section className="project-section">
            <h4>Approach</h4>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/general/process-dataviz.png"
                alt="process"
                width={500}
                height={400}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '75%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          <h4>Discovery Findings</h4>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/insightshub/personas.png"
                alt="persona profiles"
                width={500}
                height={400}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '75%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <hr className="section-divider" />
            <h4>Prioritization</h4>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/insightshub/affinity.png"
                alt="affinity diagram"
                width={500}
                height={250}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '75%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/insightshub/prioritize.png"
                alt="prioritization illustration"
                width={500}
                height={250}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '75%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <hr className="section-divider" />
            <h4>Dashboards</h4>
            <p>Real, identifying data has been scrubbed from examples to protect the interest of clients.</p>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/insightshub/dashboard-home.png"
                alt="dashboard in light mode"
                width={500}
                height={900}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '80%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/insightshub/dashboard-pm.png"
                alt="dashboard in light mode"
                width={500}
                height={1200}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '80%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <hr className="section-divider" />

            <h4>Final Considerations</h4>
            {/* <p>Real, identifying data has been scrubbed from examples to protect the interest of clients.</p> */}
            
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/insightshub/mango-db-considerations.png"
                alt="dashboard in light mode"
                width={500}
                height={1200}
                className="project-image"
                priority
                style={{ 
                  maxWidth: '80%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          </section>

          <hr className="section-divider" />
                  
        <div className="project-content">
          <section className="project-section">
            <h2>Operational Health</h2>
            <p>This information about recent workflows and visualization design work is available upon request.</p>
          </section>
        </div>

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