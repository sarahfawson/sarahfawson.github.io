'use client';

import Image from 'next/image';

const recommendedReads = [
  {
    title: 'Design is Storytelling',
    author: 'Ellen Lupton',
    image: '/images/books/design-is-storytelling.jpg'
  },
  {
    title: 'Am I there yet?',
    author: 'Mari Andrew',
    image: '/images/books/am-i-there-yet.jpg'
  },
  {
    title: 'Data Story',
    author: 'Nancy Duarte',
    image: '/images/books/data-story.jpg'
  },
  {
    title: 'The boy the mole the fox and the horse',
    author: 'Charlie Mackesy',
    image: '/images/books/boy-mole-fox.jpg'
  }
];

export default function About() {
  return (
    <main className="container">
      <div className="about-content">
      <h1>About</h1>
        <div className="about-text">
          <p>
            Hey, I'm Sarah, a Senior Product Designer at the New York Times who focuses on making sense of complex workflows - whether they're human or data. I enjoy what I do, and I love to work closely with others to build things together.
          </p>
        </div>
      </div>
<hr className="section-divider" />
  <section className="services-section">
        <div className="services-row">
          <Image
            src="/images/about/services/services-01.png"
            alt="service design"
            width={200}
            height={200}
            className="service-image"
          />
          <Image
            src="/images/about/services/services-02.png"
            alt="ui and ux design"
            width={200}
            height={200}
            className="service-image"
          />
          <Image
            src="/images/about/services/services-03.png"
            alt="infographic design"
            width={200}
            height={200}
            className="service-image"
          />
          <Image
            src="/images/about/services/services-04.png"
            alt="prototyping"
            width={200}
            height={200}
            className="service-image-"
          />
        </div>
      </section>

      <section className="recommended-reads">
        <h2>You can’t use up creativity. The more you use, the more you have.</h2>
        {/* <p>These books have influenced my work in data visualization, design, history, and creativity.</p> */}
        
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
