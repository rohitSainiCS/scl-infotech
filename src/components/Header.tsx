import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './images/logo.png';

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
    setIsMenuOpen(false);
    setIsServicesMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-3"
          >
            <a
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="group inline-flex items-center space-x-2 p-1 rounded-xl bg-white/10 border border-white/20 shadow-sm hover:shadow-teal-500/30 transition-all duration-300"
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

          {/* DESKTOP NAV */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item, index) =>
                item.hasDropdown ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="text-sm font-medium text-gray-300 hover:text-teal-400 transition"
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
                          className="absolute left-0 mt-2 w-60 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50 overflow-hidden"
                        >
                          {[
                            { label: 'Our Services', href: '#services' },
                            { label: 'Lending Solutions', href: '#lending-solutions' },
                            { label: 'Decision Automation', href: '#decision-automation' },
                          ].map((subItem) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              onClick={(e) => handleScroll(e, subItem.href)}
                              className="block px-4 py-3 text-sm text-gray-300 hover:bg-teal-600 hover:text-white transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-sm font-medium text-gray-300 hover:text-teal-400 transition"
                  >
                    {item.label}
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* MOBILE MENU ICON */}
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

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 bg-gray-800/80 rounded-md shadow-lg px-4 py-3 space-y-2"
            >
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href}>
                    <button
                      onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
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
                          className="pl-4 space-y-1"
                        >
                          <a
                            href="#services"
                            onClick={(e) => handleScroll(e, '#services')}
                            className="block text-sm text-gray-300 hover:text-teal-400 py-1"
                          >
                            Our Services
                          </a>
                          <a
                            href="#lending-solutions"
                            onClick={(e) => handleScroll(e, '#lending-solutions')}
                            className="block text-sm text-gray-300 hover:text-teal-400 py-1"
                          >
                            Lending Solutions
                          </a>
                          <a
                            href="#decision-automation"
                            onClick={(e) => handleScroll(e, '#decision-automation')}
                            className="block text-sm text-gray-300 hover:text-teal-400 py-1"
                          >
                            Decision Automation
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block text-sm text-gray-300 hover:text-teal-400 py-2"
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
