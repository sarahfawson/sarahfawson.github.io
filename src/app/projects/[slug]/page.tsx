"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';

export default function ProjectPage() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    return (
      <main className="container">
        <Link href="/projects" className="back-link">Back to Projects</Link>
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <Link href="/projects" className="back-link">← Back to Projects</Link>
      <div className="project-detail">
      <div className="project-header">
          <h3>Case Study: {project.title}</h3>
        </div>
        <div className="project-image-container">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="project-image"
            priority
          />
        </div>

        <div className="project-content">
          <p>{project.details}</p>
          <div className="tag-container">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 