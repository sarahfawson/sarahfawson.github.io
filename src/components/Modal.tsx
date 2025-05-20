import { useEffect } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export default function Modal({ isOpen, onClose, title, image, description, tags }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-project">
          <div className="modal-project-image-wrapper">
            <div className="modal-project-image">
              <Image
                src={image}
                alt={title}
                fill
                className="project-image"
                priority
              />
            </div>
          </div>
          <div className="modal-project-content">
            <p>{description}</p>
            <div className="tag-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a 
              href="/projects/thanks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              I like this
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 