"use client";

import Image from 'next/image';
import Chip from '@/components/Chip';

export default function About() {
  const skills = [
    "Data Visualization",
    "UX/UI",
    "Storytelling",
    "CSS",
    "Product Design",
    "Infographics",
    "Journey Maps",
    "Service Design",
    "Art Direction",
    "Workshops"
  ];

  return (
    <main className="container">
      <div className="about-grid">
        <div className="about-content">
          <p className="about-intro">
            I'm Sarah Fawson—designer, data translator, and the person behind The Data Says.
          </p>
          <div className="about-text">
            <p>
              I'm all about turning complex, messy data into stories that make people stop, think, and feel something. I love finding the balance between clarity, delight, and impact.
            </p>
            <div className="skills-section">
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about-image-section">
          <div className="about-image-container">
            <Image
              src="/images/about/profile-photo.png"
              alt="Sarah Fawson"
              fill
              className="about-image"
              priority
            />
          </div>
          <a href="mailto:hello@sarahfawson.com" className="about-email">
            hello@sarahfawson.com
          </a>
        </div>
      </div>

      <div className="work-together">
        <h3>Let's work together if:</h3>
        <ul className="work-list">
          <li>You have a story to tell but are having trouble knowing how to get from A to Z</li>
          <li>You're looking for a thoughtful, collaborative partner (and a bit of design magic)</li>
        </ul>
      </div>
    </main>
  );
}
