import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Business Analysis & Decision Harvesting', href: '#services' },
      { name: 'Rule Structure & Decision Flow Design', href: '#services' },
      { name: 'Custom API-Based Rule Configuration', href: '#services' },
      { name: 'Generative AI in Banking & Insurance', href: '#services' },
      { name: 'Agentic AI Modules for Loan Underwriting', href: '#services' },
      { name: 'Post-production Support', href: '#services' },
      { name: 'Lending Solutions', href: '#lending-solutions' },
      { name: 'Decision Automation', href: '#decision-automation' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Our Clients', href: '#clients' },
      { name: 'Testimonials', href: '#feedback' },
      { name: 'FAQ', href: '#faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/sclinfotech/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-extrabold text-teal-400 mb-5">
              SCLinfotech Pvt Ltd
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              SCLinfotech Pvt Ltd delivers cutting-edge technology solutions{' '}
              and comprehensive services to finance companies, helping them{' '}
              streamline operations and achieve sustainable growth.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400" />
                <a
                  href="mailto:lp@sclinfotech.in"
                  className="hover:text-teal-400 transition"
                >
                  lp@sclinfotech.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400" />
                <a
                  href="tel:+919289442740"
                  className="hover:text-teal-400 transition"
                >
                  +91-9289442740
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-teal-400" />
                <span>Qbicals 109 First Floor, Sector 63, Noida Uttar Pradesh, India</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3 mb-8 text-gray-300">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-white font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-teal-600 transition-all duration-300 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SCLinfotech Pvt Ltd. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ by{' '}
            <a
              href="#home"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
            >
              SCL Infotech
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
