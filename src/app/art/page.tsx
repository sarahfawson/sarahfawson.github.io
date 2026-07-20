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

// const quotes = [
//   "You can't use up creativity. The more you use, the more you have.",
//   'Creativity is a wild mind and a disciplined eye.'
// ];

const artImages = [
  {
    src: '/images/portfolio/creative/coffee_dali.jpg',
    alt: 'Salvador Dali coffee cup'
  },
  {
    src: '/images/portfolio/creative/2yearAnniversaryInfographic.JPG',
    alt: '2 year anniversary infographic, sketched'
  },
  {
    src: '/images/portfolio/creative/3yearAnniversaryInfographic.jpg',
    alt: '3 year anniversary infographic'
  },
  {
    src: '/images/portfolio/creative/perfect-dots.png',
    alt: 'Perfect dots artwork'
  },
  {
    src: '/images/portfolio/creative/acrylic_youcaneven.JPG',
    alt: 'Acrylic painting - you can even'
  },
  {
    src: '/images/portfolio/creative/coffee_douglassperspective.jpg',
    alt: 'Frederick Douglass coffee cup sketching in progress'
  },
  {
    src: '/images/portfolio/creative/oilpainting_iceland.jpg',
    alt: 'Oil painting of Iceland'
  },
  {
    src: '/images/portfolio/creative/coffeecup_ellen.JPG', 
    alt: 'Ellen Degeneres coffee cup'
  },
  {
    src: '/images/portfolio/creative/oilpainting_laughing.jpg',
    alt: 'Oil painting of laughing'
  }
];

export default function ArtPage() {
  return (
    <main className="container">
      <h1>Art</h1>
      <p className="project-subtitle">A selection of some personal creative projects.</p>
      
      <div className="art-grid">
        {artImages.map((image, index) => (
          <div key={index} className="art-item">
            <Image
              src={image.src}
              alt={image.alt}
              width={350}
              height={350}
              className="art-image"
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* <section className="art-quote">
        <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
        <svg width="75%" height="30" viewBox="0 0 1200 30" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '1.5rem auto 0' }}>
          <path d="M0 15 Q30 0, 60 15 T120 15 T180 15 T240 15 T300 15 T360 15 T420 15 T480 15 T540 15 T600 15 T660 15 T720 15 T780 15 T840 15 T900 15 T960 15 T1020 15 T1080 15 T1140 15 T1200 15" stroke="#bcde85" strokeWidth="3" fill="none"/>
        </svg>
      </section> */}

      <section className="recommended-reads">
        <h2>Recommended Reads</h2>
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
