import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './images/logo.png'; // Adjust the path if needed

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

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

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Delay closing the menu to avoid interrupting scroll
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsServicesMobileOpen(false);
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <a href="#home" onClick={(e) => handleScroll(e, '#home')}>
              <motion.img
                src={Logo}
                alt="SCLinfotech Logo"
                className="h-14 w-auto object-contain bg-white/90 rounded-xl p-2 shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-default"
                        onClick={(e) => e.preventDefault()}
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
                            className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700 z-50"
                          >
                            <a
                              href="#services"
                              onClick={(e) => handleScroll(e, '#services')}
                              className="block px-4 py-2 text-gray-300 hover:bg-teal-600 hover:text-white rounded-t-md"
                            >
                              Our Services
                            </a>
                            <a
                              href="#lending-solutions"
                              onClick={(e) => handleScroll(e, '#lending-solutions')}
                              className="block px-4 py-2 text-gray-300 hover:bg-teal-600 hover:text-white"
                            >
                              Lending Solutions
                            </a>
                            <a
                              href="#decision-automation"
                              onClick={(e) => handleScroll(e, '#decision-automation')}
                              className="block px-4 py-2 text-gray-300 hover:bg-teal-600 hover:text-white rounded-b-md"
                            >
                              Decision Automation
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
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
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/50 rounded-lg mt-2 shadow-lg">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.href} className="space-y-1">
                        <button
                          onClick={() =>
                            setIsServicesMobileOpen(!isServicesMobileOpen)
                          }
                          aria-label="Toggle Services submenu"
                          className="w-full text-left text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex justify-between items-center"
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
                              className="pl-6 space-y-1"
                            >
                              <a
                                href="#services"
                                onClick={(e) => handleScroll(e, '#services')}
                                className="block text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium"
                              >
                                Our Services
                              </a>
                              <a
                                href="#decision-automation"
                                onClick={(e) => handleScroll(e, '#decision-automation')}
                                className="block text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium"
                              >
                                Decision Automation
                              </a>
                              <a
                                href="#lending-solutions"
                                onClick={(e) => handleScroll(e, '#lending-solutions')}
                                className="block text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-base font-medium"
                              >
                                Lending Solutions
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="text-gray-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
