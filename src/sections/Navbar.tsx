import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['about', 'projects', 'techstack', 'experience', 'certifications', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-text-primary hover:text-brand-primary transition-colors"
        >
          MA<span className="text-brand-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                activeSection === link.href.slice(1)
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/Resume.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-4 py-2 rounded-lg hover:bg-brand-primary hover:text-white transition-all text-sm font-semibold"
        >
          <Download className="w-4 h-4" /> Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-md border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-4 py-2.5 rounded-lg text-sm font-semibold mt-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
