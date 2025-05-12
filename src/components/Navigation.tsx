'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Art', path: '/art' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-brand">
            <Link href="/">Sarah Fawson</Link>
          </div>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
                  pathname === item.path
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 text-base font-medium ${
                pathname === item.path
                  ? 'text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
