import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-yellow-400 font-bold text-lg hidden md:block">GABEL</div>

          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8 ml-auto md:ml-0">
            <a
              href="https://wa.me/213542888414"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex text-sm"
            >
              Hire Me
            </a>

            <button
              className="md:hidden text-yellow-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md py-4 border-t border-yellow-400/20">
            <div className="flex flex-col gap-4 px-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/213542888414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm w-full text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
