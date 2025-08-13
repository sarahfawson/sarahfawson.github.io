"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CalendarPrototypePage() {
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>Content Planning Prototypes</h1>
          <p className="project-subtitle">A planning app for newsletter and push alert content generation, scheduling, and ai-generated recommendations.</p>
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              This project began when I redesigned a calendar tool used for content planning, and evolved into an experiment of new generative design and development tools including Cursor, Figma Make, and Vercel. 
            </p>
            
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/nyt/calendar-design-prototype-week.png"
                alt="Calendar Prototype"
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="project-image"
              />
            </div>
                        <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/nyt/calendar-design-prototype-month.png"
                alt="Calendar Prototype"
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="project-image"
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
              I gained feedback on this prototype with extensive user testing to gather feedback and 
              identify areas for improvement in the calendar and control center concept and different features that support it.
            </p>
          </section>


        </div>
      </div>
    </main>
  );
} 