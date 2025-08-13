import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="homepage-columns">
        <div className="circular-text-container">
          <div className="circle">
            <Image
              src="/images/smiley.svg"
              alt="Spinning smiley face"
              width={150}
              height={150}
              priority
              className="spinning-smiley"
            />
          </div>
          {/* <svg className="circular-text" viewBox="0 0 400 400">
            <defs>
              <path
                id="textPath"
                d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
              />
            </defs>
            <text className="circular-text">
              <textPath href="#textPath" startOffset="0%">
                happy you're here
              </textPath>
            </text>
          </svg> */}
        </div>
        <div className="homepage-text">
          <h1>Hi, I'm Sarah Fawson</h1>
          <p className="about-text">
            I'm a designer, artist, and storyteller.
          </p>
          <p>
            <a href="/about" className="about-link">Say Hello →</a>
          </p>
        </div>
      </div>
    </main>
  );
}
