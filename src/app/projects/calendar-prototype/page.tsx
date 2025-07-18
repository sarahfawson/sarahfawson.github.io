"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CalendarPrototypePage() {
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>Calendar Prototype</h1>
          <p className="project-subtitle">A detailed calendar designed and prototyped for live testing</p>
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              This project involved designing and prototyping a comprehensive calendar interface 
              for live user testing and feedback collection.
            </p>
            
            <div className="project-image-container">
              <Image
                src="/images/portfolio/thedatasays-personal/dash-general-light.png"
                alt="Calendar Prototype"
                fill
                className="project-image"
                priority
              />
            </div>
          </section>

          <hr className="section-divider" />

          <section className="project-section">
            <h2>Design Process</h2>
            <p>
              The calendar prototype was developed through an iterative design process, 
              focusing on user experience and interface usability.
            </p>
            
            <h3>Key Features</h3>
            <ul>
              <li>Intuitive date selection and navigation</li>
              <li>Event management and scheduling</li>
              <li>Responsive design for multiple devices</li>
              <li>User-friendly interface elements</li>
            </ul>
          </section>

          <hr className="section-divider" />

          <section className="project-section">
            <h2>Testing & Iteration</h2>
            <p>
              I gained feedback on thisprototype with extensive user testing to gather feedback and 
              identify areas for improvement in the calendar and control center concept and different features that support it.
            </p>
          </section>


        </div>
      </div>
    </main>
  );
} 