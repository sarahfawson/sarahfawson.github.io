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
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1400px] flex flex-col items-center gap-6">
          <div className="flex justify-center flex-wrap gap-8 font-semibold md:gap-6 max-sm:gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="!text-[var(--color-alabster)] text-base p-2 transition-all duration-200 hover:font-bold hover:no-underline md:text-sm max-sm:text-xs max-sm:p-1"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="text-center text-base font-medium md:text-xs">
            <p className="m-0 !text-[var(--color-alabster)]">© {new Date().getFullYear()} Sarah Fawson. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
