"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function WorkflowDiagramsPage() {
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>Service Design</h1>
          <p className="project-subtitle">View a selection of journey maps and diagrams where I layer in how people, processes, and technology interact.</p>
        </div>
        {/* <div className="project-content">
          <section className="project-section">
            <h2>Messaging Workflows</h2>
            <p>This information about recent work is available upon request.</p>
          </section>
        </div> */}

        <div className="project-content">
          
          <section className="project-section">
            <h2>Covid-19 Patient Journey</h2>
            <p>
            In a former role working with a State Government during the Covid-19 pandemic, I synthesized user research into a comprehensive map that intersects human experiences, physical processes, and data collection moments.
            All sensitive or identifiable information about the client, data, and subjects have been changed.</p>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/deloitte/JourneyMap-actors.jpg"
                alt="covid-19 patient journey map personas"
                width={800}
                height={200}
                className="project-image"
                priority
                style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    objectFit: 'contain'
                  }}
              />
            </div>
            <p>
              The final journey map artifact illustrates the high level touch points and experience of a patient navigating the medical system during the Covid-19 outbreak in 2020. This, layered with information about when data collection and back end processes were happening, was pivotal to this client team being able to understand how to improve the overall experience by tackling blockers that existed within these back end processes distinctly.
            </p>
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

          </section>

          {/* <hr className="section-divider" /> */}

          {/* <section className="project-section">
            
            <h2>Journey Maps</h2>
            <p>
              User journey maps that illustrate the complete experience of users 
              as they interact with products, services, or processes. 

            </p>
            <h2>Product Design</h2>
            <p>
              At the intersection of User Research, UX/UI design, and Data Visualization design, to make products people can enjoy and navigate with ease.

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
            <p>More information coming soon.</p>
          </section> */}

        </div>
      </div>
    </main>
  );
} 