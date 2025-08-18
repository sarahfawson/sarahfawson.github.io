"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CalendarPrototypePage() {
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>Content Planning Tools</h1>
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
            <h2>Generative Design & Prototyping </h2>
            <p>
              I gained feedback on this prototype with user testing and design demos to gather feedback, test concepts, and solicit new ideas.
              </p>
              <p>
              More information to come soon!
            </p>
            {/* <h3>Feedback Themes</h3>
            <ul>
              <li>Users are excited about the concepts, particularly the way this could be customized to their permission level and needs</li>
              <li>Event management and scheduling</li>
              <li>User-friendly interface elements</li>
            </ul> */}
          </section>


        </div>
      </div>
    </main>
  );
} 