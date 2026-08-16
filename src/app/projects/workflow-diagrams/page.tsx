'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WorkflowDiagramsPage() {
  return (
    <main className="container">
      <div className="project-detail">
        <Link href="/projects" className="nav-link mb-8 text-[var(--accent-turquoise-dark)]" data-text="← Back to Projects">← Back to Projects</Link>
        
        <div className="project-header">
          <h1>Service Design</h1>
          {/* <p className="project-subtitle">View a selection of service design maps and diagrams where I layer in how people, processes, and technology interact.</p> */}
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Covid-19 Patient Journey</h2>
            <p>
            While working with a State Government during the Covid-19 pandemic, I synthesized user research into a comprehensive map that intersects human experiences, physical processes, and data collection moments.
            All sensitive or identifiable information about the client, data, and subjects have been changed.</p>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/Deloitte_CovidPatientJourneyMap_2022.jpg"
                alt="covid-19 patient journey map"
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

            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/JourneyMap-actors.jpg"
                alt="covid-19 patient journey map personas"
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
          <section className="project-section">
            <h2>Email Campaign Journey</h2>
            {/* <p></p> */}
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/nyt/email-workflow-2025.png"
                alt="email workflow diagram"
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
        </div>
      </div>
    </main>
  );
} 