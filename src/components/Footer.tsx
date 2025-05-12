'use client';

const socialLinks = [
  {
    name: 'Behance',
    href: 'https://www.behance.net/sarah-fawson',
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/sarahfawson',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/sarahfawson',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/thedatasays/',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarahfawson/',
  }
  
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Sarah Fawson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
