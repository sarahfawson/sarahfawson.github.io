'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const dataStoryImages = [
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history1.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history2.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history3.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history4.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history5.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history6.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history7.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history8.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history9.jpg',
  '/images/portfolio/thedatasays-personal/thesis/mass-incarceration-history10.jpg',
];

export default function CJRPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const changeSlide = (direction: number) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < 6) {
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Autoplay the layout carousel, advancing every 2s and looping back to the start.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % 6);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const openImageModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(index);
  };

  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateModal = useCallback((direction: number) => {
    const newIndex = selectedImageIndex + direction;
    if (newIndex >= 0 && newIndex < dataStoryImages.length) {
      setSelectedImageIndex(newIndex);
      setSelectedImage(dataStoryImages[newIndex]);
    }
  }, [selectedImageIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft' && selectedImageIndex > 0) {
        navigateModal(-1);
      } else if (e.key === 'ArrowRight' && selectedImageIndex < dataStoryImages.length - 1) {
        navigateModal(1);
      } else if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedImageIndex, navigateModal, closeImageModal]);
  return (
    <main className="container">
      <div className="project-detail">
        <Link href="/projects" className="nav-link mb-8 text-[var(--accent-turquoise-dark)]" data-text="← Back to Projects">← Back to Projects</Link>
        
        <div className="project-header">
          <h1>The Legislative Roots of Mass Incarceration</h1>
          <p className="project-year">2020</p>
          <p className="project-subtitle">I analyzed the United States' criminal legal system, policing, and felony disenfranchisement while building my thesis at MICA.</p>
        </div>
        <section className="project-section">
          <h2>Data Story</h2>
          
          <div className="project-images-grid">
            {dataStoryImages.map((src, index) => (
              <div key={src} className="project-image-item" onClick={() => openImageModal(src, index)}>
                <Image
                  src={src}
                  alt={`CJR Visual Analysis ${index + 1}`}
                  width={100}
                  height={150}
                  className="project-detail-image"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className="image-modal-overlay" onClick={closeImageModal}>
              {/* Close button - top right of overlay */}
              <button className="image-modal-close" onClick={closeImageModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="image-modal-wrapper" onClick={(e) => e.stopPropagation()}>
                {/* Left Arrow */}
                <button 
                  className={`image-modal-nav image-modal-prev ${selectedImageIndex === 0 ? 'disabled' : ''}`}
                  onClick={() => navigateModal(-1)}
                  disabled={selectedImageIndex === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>

                <div className="image-modal-content">
                  <Image
                    src={selectedImage}
                    alt="Expanded view"
                    width={800}
                    height={600}
                    className="image-modal-image"
                    priority
                  />
                  
                  {/* Image counter */}
                  <div className="image-modal-counter">
                    {selectedImageIndex + 1} / {dataStoryImages.length}
                  </div>
                </div>

                {/* Right Arrow */}
                <button 
                  className={`image-modal-nav image-modal-next ${selectedImageIndex === dataStoryImages.length - 1 ? 'disabled' : ''}`}
                  onClick={() => navigateModal(1)}
                  disabled={selectedImageIndex === dataStoryImages.length - 1}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </section>

        <div className="project-content">
          <section className="project-section">
            {/* <h2>Overview</h2> */}
            <p className="project-subtitle">"Our lives begin to end the day we become silent about things that matter."</p>
            <p>
            This work aims to shine a bright light on the perpetual marginalization of the dispossessed at the hands of our own government. Our country’s history of racialized legislation and culture has led to a system of mass incarceration today, the likes of which no country has ever seen before. What is different now, from previous periods of racial control like slavery and the Jim Crow era? We have data, and we’re seeing the injustices live streamed.
            </p>
            <p>
            Although we celebrate colorblindness in America, our laws and leadership have enabled systemic racism and control that is exerted disproportionately on People of Color. Let us better understand our history so we can demand the change needed.
            </p>


        <hr className="section-divider" />
            <h2>Background</h2>
            <h3>We have a mass incarceration problem because of our legislation and our history, not because of our crime.</h3>
            <div style={{ marginTop: '2rem' }}>
              <h4>The data shows the scale of the mass incarceration problem</h4>
              <p>The data tells us about how pervasive mass incarceration is in the United States. For example:</p>
              <ul>
                <li>The U.S. puts people behind bars at a higher rate than any country around the world at 698 per 100,000 people</li>
                <li>Black men are incarcerated at a disproportionate rate - 33% of Black men are incarcerated in their lifetime</li>
                <li>After someone leaves prison, they are legally disenfranchised in many ways. 5.2Million people are currently impacted by voter disenfranchisement due to a felony charge.</li>
                <li>These problems often lead to recidivism and generational poverty</li>
              </ul>
            </div>
            <div style={{ marginTop: '2rem' }}>
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
            I spoke about the process of creating this thesis – including all the ups and downs, the research, analysis, and design – at the 2021 Outlier Data Visualization Conference, available to view <a href="https://youtu.be/paECLTlgz9I?si=Q-YnbCEz-Nz2fY3x" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </section>


       
        </div>
      </div>
    </main>
  );
} 