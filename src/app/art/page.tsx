import Image from 'next/image';

const recommendedReads = [
  {
    title: "Design is Storytelling",
    author: "Ellen Lupton",
    image: "/images/books/design-is-storytelling.jpg",
    link: "https://www.amazon.com/Design-Storytelling-Ellen-Lupton/dp/194230319X"
  },
  {
    title: "Am I there yet?",
    author: "Mari Andrew",
    image: "/images/books/am-i-there-yet.jpg",
    link: "https://bymariandrew.com/books/am-i-there-yet/"
  },
  {
    title: "Data Story",
    author: "Nancy Duarte",
    image: "/images/books/data-story.jpg",
    link: "https://www.amazon.com/Data-Story-Communicate-Data-People/dp/1940858984"
  }
];

export default function ArtPage() {
  return (
    <main className="container">
      <h1>Art</h1>
      <p>Coming soon: A showcase of some personal creative projects.</p>
      
      <section className="recommended-reads">
        <h2>Recommended Reads</h2>
        <p>A collection of books that have influenced my work in data visualization, design, history, and creativity.</p>
        
        <div className="books-grid">
          {recommendedReads.map((book, index) => (
            <a 
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
