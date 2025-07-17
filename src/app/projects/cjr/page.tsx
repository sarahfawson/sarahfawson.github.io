"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CJRPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction: number) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < 4) {
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>The Legislative Roots of Mass Incarceration</h1>
          <p className="project-subtitle">I analyzed the United States' criminal legal system, policing, disenfranchisement, and more while building my thesis at MICA.</p>
        </div>
        {/* <div className="project-image-container">
          <Image
            src="/images/portfolio/thedatasays-personal/thumbnails-04.png"
            alt="CJR Visual Analyses"
            fill
            className="project-image"
            priority
          />
        </div> */}


        <div className="project-content">
          <section className="project-section">
            {/* <h2>Overview</h2> */}
            {/* <p>
              A comprehensive analysis of the United States criminal justice system, including data on policing practices, 
              incarceration rates, and the impact of disenfranchisement on communities.
            </p> */}
            <hr className="section-divider" />
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/data-tells-us.png"
              alt="What the data tells us about the criminal justice system"
              width={80}
              height={80}
              className="project-detail-image"
            />
                <h4>There are too many forms of discrimination of former prisoners that are still currently legal, like:</h4>
                <ul>
                  <li>Voting</li>
                  <li>Serving on a jury</li>
                  <li>Getting a job</li>
                  <li>Opening a bank account</li>
                  <li>Starting a business</li>
                  <li>Getting a student loan</li>
                  <li>Traveling abroad</li>
                  <li>Renting/buying housing</li>
                </ul>
            </section>
            <section className="project-section">
            <hr className="section-divider" />

            <h2>Approach</h2>

            <Image
              src="/images/portfolio/thedatasays-personal/thesis/approach.png"
              alt="approach and process to this work"
              width={150}
              height={150}
              className="project-detail-image small"
            />

          <hr className="section-divider" />
          <h2>Data Sources</h2>

            <p>
            I used a combination of data from the U.S. Census Bureau, the Bureau of Justice Statistics, and the U.S. Department of Justice to create the visualizations for this project.
            A few of my many inspiration sources for this project are shown. This research was heavily influenced by Michelle Alexander's groundbreaking work "The New Jim Crow," 
              which analyzes how mass incarceration functions as a new form of racial control in the United States.
            </p>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/sources.png"
              alt="Research sources and methodology"
              width={150}
              height={150}
              className="project-detail-image small"
            />
          <hr className="section-divider" />

            <div className="carousel-container">
            <h2>It took several attempts to find the right layout for the shape of data I had.</h2>
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                <div className="carousel-slide">
                  <Image
                    src="/images/portfolio/thedatasays-personal/thesis/stickies.png"
                    alt="Stickies and text"
                    width={400}
                    height={300}
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-slide">
                  <Image
                    src="/images/portfolio/thedatasays-personal/thesis/sketches.png"
                    alt="Sketches"
                    width={400}
                    height={300}
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-slide">
                  <Image
                    src="/images/portfolio/thedatasays-personal/thesis/version-of-layout-01.png"
                    alt="Layout version 1"
                    width={400}
                    height={300}
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-slide">
                  <Image
                    src="/images/portfolio/thedatasays-personal/thesis/version-of-layout-02.png"
                    alt="Layout version 2"
                    width={400}
                    height={300}
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-slide">
                  <Image
                    src="/images/portfolio/thedatasays-personal/thesis/version-of-layout-03.png"
                    alt="Layout version 3"
                    width={400}
                    height={300}
                    className="carousel-image"
                  />
                </div>
              </div>
              <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <button className="carousel-btn next" onClick={() => changeSlide(1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
              <div className="carousel-dots">
                <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}></span>
                <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}></span>
                <span className={`dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}></span>
                <span className={`dot ${currentSlide === 3 ? 'active' : ''}`} onClick={() => goToSlide(3)}></span>
              </div>
            </div>
            {/* <Image
              src="/images/portfolio/thedatasays-personal/thesis/dataishuman.png"
              alt="Data is human"
              width={80}
              height={80}
              className="project-detail-image"
            /> */}
          </section>
          <hr className="section-divider" />
          <section className="final-visual-narrative-section">

            <h2>Final Visual Narrative</h2>
            <div className="project-images-grid">            
                <div className="project-image-item">
                <iframe
                  src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history.pdf"
                  width="100%"
                  height="600"
                  className="project-pdf-embed"
                  title="Mass Incarceration History"
                />

              </div>
            </div>

          </section>
          <p>
                This project was presented at the <a href="https://youtu.be/paECLTlgz9I?si=Q-YnbCEz-Nz2fY3x" target="_blank" rel="noopener noreferrer">Data Visualization Society's 2021 Outlier conference</a>
            </p>

        {/* <section className="notes-section">
            <div className="tag-container">
                <span className="tag">Data Visualization</span>
                <span className="tag">Criminal Justice</span>
                <span className="tag">Research</span>
            </div>
          </section> */}
        </div>
      </div>
    </main>
  );
} 