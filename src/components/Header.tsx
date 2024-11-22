// Header.tsx - Main navigation and personal branding component
import React from 'react';
import { Link } from 'react-scroll';
import { Github, Youtube, Linkedin, Sun, Moon, Laptop } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const navItems = [
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Portfolio', target: 'portfolio' },
    { name: 'Contact', target: 'contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/shadowTEM', label: 'GitHub' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@YoussefSalah21', label: 'YouTube' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/feed/', label: 'LinkedIn' },
    { icon: <Laptop className="w-5 h-5" />, url: 'https://huggingface.co/ShadowTEM', label: 'Hugging Face' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-navy-600 dark:text-white">
            Youssef ELBegirmy | Data Scientist
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-white cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;