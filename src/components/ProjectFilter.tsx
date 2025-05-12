"use client";

import { useState } from 'react';

interface ProjectFilterProps {
  onFilterChange: (filter: 'topic' | 'skill') => void;
}

export default function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<'topic' | 'skill'>('topic');

  const handleFilterChange = (filter: 'topic' | 'skill') => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="project-filter">
      <div className="filter-label">Display by:</div>
      <div className="filter-buttons">
        <button
          className={`filter-button ${activeFilter === 'topic' ? 'active' : ''}`}
          onClick={() => handleFilterChange('topic')}
        >
          Topic
        </button>
        <button
          className={`filter-button ${activeFilter === 'skill' ? 'active' : ''}`}
          onClick={() => handleFilterChange('skill')}
        >
          Skill
        </button>
      </div>
    </div>
  );
}
