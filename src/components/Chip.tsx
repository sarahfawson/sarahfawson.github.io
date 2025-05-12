import React from 'react';

interface ChipProps {
  label: string;
  className?: string;
}

export default function Chip({ label, className = '' }: ChipProps) {
  return (
    <span className={`chip ${className}`}>
      {label}
    </span>
  );
} 