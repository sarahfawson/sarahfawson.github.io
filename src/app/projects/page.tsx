"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/components/Modal';
import { largeProjects, smallProjects, allTags } from '@/data/projects';
// import DataViz from '@/components/dataviz';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof smallProjects[0] | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? [] // If clicking the same tag, clear it
        : [tag] // If clicking a different tag, replace with just that tag
    );
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  const filteredProjects = smallProjects.filter(project => 
    selectedTags.length === 0 || 
    project.tags.some(tag => selectedTags.includes(tag))
  );

  return (
    <main className="container projects-page">
      <h1>Design Work </h1>      
      <div className="large-projects-grid">
        {largeProjects.map((project) => (
          <div key={project.slug} className="project-large">
            <div className="project-large-image-container">
              <Link href={`/projects/${project.slug}`} className="portfolio-link">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-large-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
            <div className="project-large-content">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link href={`/projects/${project.slug}`} className="portfolio-link">
                <span className="see-more">See more →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">More designs</h2>    
      <div className="tag-container">
        <button 
          className={`tag tag-interactive ${selectedTags.length === 0 ? 'active' : ''}`}
          onClick={clearTags}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag tag-interactive ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="project-small"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="project-image"
              />
            </div>
            {/* <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
            </div> */}
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        image={selectedProject?.image || ''}
        description={selectedProject?.summary || ''}
        tags={selectedProject?.tags || []}
        link={selectedProject?.link || ''}
      />
    </main>
  );
}
