import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="circular-text-container">
        <div className="circle">
          <Image
            src="/images/smiley.svg"
            alt="Spinning smiley face"
            width={200}
            height={200}
            priority
            className="spinning-smiley"
          />
        </div>
        <svg className="circular-text" viewBox="0 0 400 400">
          <defs>
            <path
              id="textPath"
              d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
            />
          </defs>
          <text>
            <textPath href="#textPath" startOffset="0%">
              happy you're here
            </textPath>
          </text>
        </svg>
      </div>
    </main>
  );
}

// TODO: Create a skills/tags system that can be referenced across pages
// - Create a shared data file for skills (src/data/skills.ts)
// - Create a reusable Skills component
// - Add skills to project cards and about page
// - Style skills as tags with consistent design 