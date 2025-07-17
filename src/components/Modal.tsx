import { useEffect } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

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

  const handleConfettiClick = () => {
    // Create a spectacular confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 9999
    });
    
    // Add a second burst for extra effect
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        zIndex: 9999
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        zIndex: 9999
      });
    }, 150);
  };

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
                <span key={index} className="tag tag-interactive active">{tag}</span>
              ))}
            </div>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleConfettiClick();
              }}
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