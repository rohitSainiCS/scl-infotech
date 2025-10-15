import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  BarChart4,
  Bot,
  Headphones,
  BrainCog,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Business Analysis & Decision Harvesting',
      description:
        'Transforming business logic into executable decision models for better process clarity and efficiency.',
    },
    {
      icon: BarChart4,
      title: 'Rule Structure & Decision Flow Design',
      description:
        'Designing transparent, scalable rule frameworks for consistent decision-making across teams.',
    },
    {
      icon: Bot,
      title: 'Custom API-Based Rule Configuration',
      description:
        'Deploying and managing rules through API integrations tailored to your ecosystem.',
    },
    {
      icon: BrainCog,
      title: 'Generative AI in Banking & Insurance',
      description:
        'Driving innovation in financial services with generative AI for automation and personalization.',
    },
    {
      icon: Bot,
      title: 'Agentic AI Modules for Loan Underwriting',
      description:
        'Autonomous AI agents that assess risk, validate documents, and streamline the loan underwriting process in real time.',
    },
    {
      icon: Headphones,
      title: 'Post-production Support',
      description:
        'Ongoing assistance to optimize, update, and maintain your rule-based systems.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
            Our Services
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Solutions that combine deep domain knowledge with technology to power smarter financial operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-teal-500/70 hover:shadow-teal-400/10 shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-2xl hover:from-teal-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
