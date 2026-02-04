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
    <footer className="bg-[var(--accent-turquoise)] border-t border-black/10 py-8 mt-auto w-full md:py-6">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-12 md:gap-8">
        <div className="flex justify-center flex-wrap gap-12 font-semibold md:gap-6 max-sm:gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="!text-[var(--accent-turquoise-dark)] text-base p-2 transition-colors duration-200 hover:underline md:text-sm max-sm:text-xs max-sm:p-1"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="text-center text-base !text-[var(--accent-turquoise-dark)] font-medium px-4 md:text-xs">
          <p className="m-0">© {new Date().getFullYear()} Sarah Fawson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
