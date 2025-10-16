import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './images/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home'); // ✅ Track active link

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services', hasDropdown: true },
    { href: '#team', label: 'Our Team' },
    { href: '#contact', label: 'Contact' },
    { href: '#clients', label: 'Clients' },
    { href: '#careers', label: 'Careers' },
    { href: '#faq', label: 'FAQ' },
  ];

  const serviceSubmenu = [
    { label: 'Our Services', href: '#services' },
    { label: 'Lending Solutions', href: '#lending-solutions' },
    { label: 'Decision Automation', href: '#decision-automation' },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();

    setIsMenuOpen(false);
    setIsServicesMobileOpen(false);

    // Wait for menu animation to finish before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(href); // ✅ Update active section
      }
    }, 250);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="group inline-flex items-center p-1 rounded-xl bg-white/10 border border-white/20 shadow-sm hover:shadow-teal-500/30 transition"
            >
              <motion.img
                src={Logo}
                alt="SCLinfotech Logo"
                title="SCLinfotech"
                className="h-12 w-auto object-contain rounded-md p-1 bg-white shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="text-sm font-medium text-gray-300 hover:text-teal-400 transition flex items-center gap-1"
                  >
                    {item.label} ▼
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-60 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50"
                      >
                        {serviceSubmenu.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={(e) => handleScroll(e, sub.href)}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              activeSection === sub.href
                                ? 'text-teal-400 bg-gray-700'
                                : 'text-gray-300 hover:text-white hover:bg-teal-600'
                            }`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href
                      ? 'text-teal-400'
                      : 'text-gray-300 hover:text-teal-400'
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-teal-400 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 bg-gray-800/90 rounded-md shadow-md px-4 py-4 space-y-3"
            >
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href}>
                    <button
                      onClick={() =>
                        setIsServicesMobileOpen((prev) => !prev)
                      }
                      className="w-full text-left text-gray-300 hover:text-teal-400 py-2 flex justify-between items-center"
                    >
                      {item.label}
                      <span>{isServicesMobileOpen ? '▲' : '▼'}</span>
                    </button>
                    <AnimatePresence>
                      {isServicesMobileOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {serviceSubmenu.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={(e) => handleScroll(e, sub.href)}
                              className={`block text-sm py-1 transition-colors ${
                                activeSection === sub.href
                                  ? 'text-teal-400'
                                  : 'text-gray-300 hover:text-teal-400'
                              }`}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`block text-sm py-2 transition-colors ${
                      activeSection === item.href
                        ? 'text-teal-400'
                        : 'text-gray-300 hover:text-teal-400'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
