"use client";

import Image from 'next/image';

const recommendedReads = [
  {
    title: "Design is Storytelling",
    author: "Ellen Lupton",
    image: "/images/books/design-is-storytelling.jpg"
  },
  {
    title: "Am I there yet?",
    author: "Mari Andrew",
    image: "/images/books/am-i-there-yet.jpg"
  },
  {
    title: "Data Story",
    author: "Nancy Duarte",
    image: "/images/books/data-story.jpg"
  },
  {
    title: "The boy the mole the fox and the horse",
    author: "Charlie Mackesy",
    image: "/images/books/boy-mole-fox.jpg"
  }
];

export default function About() {

  const fastFacts = [
    "Based in Denver, CO",
    "Currently at The New York Times",
    "Graduated from MICA and OU",
    "Sewing and scrapbooking enthusiast",
    "Amateur oil painter"
  ];

  return (
    <main className="container">
      <div className="about-grid">
        <div className="about-content">
          <h3 className="about-intro">
            Thanks for stopping by.
          </h3>
          <div className="about-text">
            <p>
              I'm all about turning complex information into seemless experiences - to me, the magic I get to wield as a designer lives at the intersection of clarity, delight, and impact.
            </p>
            {/* <div className="skills-section">
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </div>
            </div> */}
          </div>
          <div className="about-email-container">
        <a href="mailto:hello@sarahfawson.com" className="about-email">
          hello@sarahfawson.com
        </a>
      </div>
        </div>
        <div className="fast-facts-section">
          <h4>Fast Facts</h4>
          <ul className="fast-facts-list">
            {fastFacts.map((fact, index) => (
              <li key={index} className="fast-fact-item">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
        {/* <div className="about-image-section">
          <div className="about-image-container">
            <Image
              src="/images/about/profile-photo.png"
              alt="Sarah Fawson"
              fill
              className="about-image"
              priority
            />
          </div>
        </div> */}

      {/* <div className="work-together">
        <h4>Let's work together if:</h4>
        <ul className="work-list">
          <li>You have a story to tell but are having trouble knowing how to get from A to Z</li>
          <li>You're looking for a thoughtful, collaborative partner (and a bit of design magic)</li>
        </ul>
      </div> */}
<hr className="section-divider" />

  <section className="services-section">
        <div className="services-row">
          <Image
            src="/images/about/services/services-01.jpg"
            alt="Service 1"
            width={200}
            height={200}
            className="service-image"
          />
          <Image
            src="/images/about/services/services-02.jpg"
            alt="Service 2"
            width={200}
            height={200}
            className="service-image"
          />
          <Image
            src="/images/about/services/services-03.jpg"
            alt="Service 3"
            width={200}
            height={200}
            className="service-image"
          />
          <Image
            src="/images/about/services/services-04.jpg"
            alt="Service 4"
            width={200}
            height={200}
            className="service-image"
          />
        </div>
      </section>

      <section className="recommended-reads">
        <h2>Inspiration</h2>
        <p>A collection of artifacts that have influenced my work in data visualization, design, history, and creativity.</p>
        
        <div className="books-grid">
          {recommendedReads.map((book, index) => (
            <div 
              key={index}
              className="book-card"
            >
              <div className="book-image-container">
                <Image
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  fill
                  className="book-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="book-content">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
