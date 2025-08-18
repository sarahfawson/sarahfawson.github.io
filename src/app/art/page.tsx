import Image from 'next/image';

const artImages = [
  {
    src: "/images/portfolio/creative/coffee_dali.jpg",
    alt: "Salvador Dali coffee cup"
  },
  {
    src: "/images/portfolio/creative/2yearAnniversaryInfographic.JPG",
    alt: "2 year anniversary infographic, sketched"
  },
  {
    src: "/images/portfolio/creative/3yearAnniversaryInfographic.jpg",
    alt: "3 year anniversary infographic"
  },
  {
    src: "/images/portfolio/creative/perfect-dots.png",
    alt: "Perfect dots artwork"
  },
  {
    src: "/images/portfolio/creative/acrylic_youcaneven.JPG",
    alt: "Acrylic painting - you can even"
  },
  {
    src: "/images/portfolio/creative/coffee_douglassperspective.jpg",
    alt: "Frederick Douglass coffee cup sketching in progress"
  },
  {
    src: "/images/portfolio/creative/oilpainting_iceland.jpg",
    alt: "Oil painting of Iceland"
  },
  {
    src: "/images/portfolio/creative/coffeecup_ellen.JPG", 
    alt: "Ellen Degeneres coffee cup"
  },
  {
    src: "/images/portfolio/creative/oilpainting_laughing.jpg",
    alt: "Oil painting of laughing"
  },
  {
    src: "/images/portfolio/creative/coffeecup_popart.JPG",
    alt: "Pop art coffee cup"
  }
];

export default function ArtPage() {
  return (
    <main className="container">
      <h1>Art</h1>
      <p>A selection of some personal creative projects.</p>
      
      <div className="art-grid">
        {artImages.map((image, index) => (
          <div key={index} className="art-item">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="art-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
