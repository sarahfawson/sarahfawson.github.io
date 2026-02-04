'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CJRPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const changeSlide = (direction: number) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < 6) {
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="project-detail">
        <div className="project-header">
          <h1>The Legislative Roots of Mass Incarceration</h1>
          <p className="project-year">2020</p>
          <p className="project-subtitle">I analyzed the United States' criminal legal system, policing, disenfranchisement, and more while building my thesis at MICA.</p>
        </div>
        
        <div className="project-images-grid">
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history1.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history1.jpg"
              alt="CJR Visual Analysis page 1"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history2.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history2.jpg"
              alt="CJR Visual Analysis 2"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history3.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history3.jpg"
              alt="CJR Visual Analysis 3"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history4.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history4.jpg"
              alt="CJR Visual Analysis 4"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history5.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history5.jpg"
              alt="CJR Visual Analysis 5"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history6.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history6.jpg"
              alt="CJR Visual Analysis 6"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history7.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history7.jpg"
              alt="CJR Visual Analysis 7"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history8.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history8.jpg"
              alt="CJR Visual Analysis 8"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history9.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history9.jpg"
              alt="CJR Visual Analysis 9"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
          <div className="project-image-item" onClick={() => openImageModal('/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history10.jpg')}>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history10.jpg"
              alt="CJR Visual Analysis 10"
              width={100}
              height={150}
              className="project-detail-image"
              priority
            />
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal-overlay" onClick={closeImageModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-modal-close" onClick={closeImageModal}>
                ×
              </button>
              <Image
                src={selectedImage}
                alt="Expanded view"
                width={800}
                height={600}
                className="image-modal-image"
                priority
              />
            </div>
          </div>
        )}

        <div className="project-content">
          <section className="project-section">
            {/* <h2>Overview</h2> */}
            <p className="project-subtitle">Our lives begin to end the day we become silent about things that matter.</p>
            <p>
            This work aims to shine a bright light on the perpetual marginalization of the dispossessed at the hands of our own government. Our country’s history of racialized legislation and culture has led to a system of mass incarceration today, the likes of which no country has ever seen before. What is different now, from previous periods of racial control like slavery and the Jim Crow era? We have data, and we’re seeing the injustices live streamed.
            </p>
            <p>
            Although we celebrate colorblindness in America, our laws and leadership have enabled systemic racism and control that is exerted disproportionately on People of Color. Let us better understand our history so we can demand the change needed.
            </p>
            <p>
            I have summarized the process of creating this as my thesis for the Maryland Institute College of Art (MICA) Information & Data Visualization Master’s program, completed in December 2020.
            </p>

        <hr className="section-divider" />
            <h3>We have a mass incarceration problem because of our legislation and our history, not because of our crime.</h3>
            <div className="two-column-layout highlighted">
              <div className="column-left" style={{ padding: '1.5rem' }}>
                <h4>The data shows the scale of the mass incarceration problem</h4>
                <p>The data tells us about how pervasive mass incarceration is in the United States. For example:</p>
                <ul>
                  <li>The U.S. puts people behind bars at a higher rate than any country around the world at 698 per 100,000 people</li>
                  <li>Black men are incarcerated at a disproportionate rate - 33% of Black men are incarcerated in their lifetime</li>
                  <li>After someone leaves prison, they are legally disenfranchised in many ways. 5.2Million people are currently impacted by voter disenfranchisement due to a felony charge.</li>
                  <li>These problems often lead to recidivism and generational poverty</li>
                </ul>
              </div>
              <div className="column-right" style={{ padding: '1.5rem' }}>
                <h4>Discrimination is still legal in the United States</h4>
                <p>There are too many forms of discrimination of former prisoners that are still currently legal. To name a few:</p>
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
              </div>
            </div>
        </section>

        <hr className="section-divider" />
            
        {/* <section className="project-section">
            <h2>Approach</h2>
            <Image
              src="/images/portfolio/thedatasays-personal/thesis/approach.png"
              alt="approach and process to this work"
              width={150}
              height={150}
              className="project-detail-image small"
            />

          <hr className="section-divider" /> */}

        <section className="project-section">
          <h3>There is no shortage of data, in its many forms.</h3>
          <div className="two-column-layout">
            <div className="column-left">
              <p>
              I used a combination of data from the U.S. Census Bureau, the Bureau of Justice Statistics, and the U.S. Department of Justice to create the visualizations for this project.
              A few of my many inspiration sources for this project are shown. This research was heavily influenced by Michelle Alexander's groundbreaking work "The New Jim Crow," 
                which analyzes how mass incarceration functions as a new form of racial control in the United States.
              </p>
            </div>
            <div className="column-right">
              <Image
                src="/images/portfolio/thedatasays-personal/thesis/sources.png"
                alt="Research sources and methodology"
                width={800}
                height={800}
                className="project-detail-image"
                style={{ width: '100%', height: 'auto', maxWidth: '100%', boxShadow: 'none' }}
              />
            </div>
          </div>
          <hr className="section-divider" />

            <div className="carousel-container">
            <h3>Finding the right layout for the shape of this data was crucial.</h3>
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 16.666}%)` }}>
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
                    src="/images/portfolio/thedatasays-personal/thesis/version-of-layout-00-sketches.png"
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
                <div className="carousel-slide">
                  <Image
                    src="/images/portfolio/thedatasays-personal/thesis/version-of-layout-04.png"
                    alt="Layout version 4"
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
                <span className={`dot ${currentSlide === 4 ? 'active' : ''}`} onClick={() => goToSlide(4)}></span>
                <span className={`dot ${currentSlide === 5 ? 'active' : ''}`} onClick={() => goToSlide(5)}></span>
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
        
        <section className="project-section">
          <p>
            I spoke about the process of creating this thesis – including all the ups and downs, the research, analysis, and design – in the 2021 Outlier Data Visualization Conference, available to view <a href="https://youtu.be/paECLTlgz9I?si=Q-YnbCEz-Nz2fY3x" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </section>
          
        </div>
      </div>
    </main>
  );
} 