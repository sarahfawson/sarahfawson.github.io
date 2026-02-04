import Image from 'next/image';

export default function Home() {
  return (
    <main className="container homepage-content">
      <div className="homepage-heading">
        <h1>{'Hi, I\'m Sarah Fawson'}</h1>
        <Image
          src="/images/smiley.svg"
          alt="Spinning smiley face"
          width={50}
          height={50}
          priority
          className='spinning-smiley heading-smiley'
        />
      </div>
      <p className="about-text" style={{ marginTop: '1.5rem' }}>
{'I\'m a Senior Product Designer at the New York Times, I focus on making sense of complex workflows - whether they\'re human or data. I enjoy what I do, and I love to work closely with others to build things together.'}
      </p>
      <p>
        <a href="/projects" className="nav-link" data-text="See my work">See my work →</a>
      </p>
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
          className="service-image"
        />
      </div>
    </main>
  );
}
