import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SubramanyamImage from './images/OurCoreOfferings.jpg';

const lendingSolutions = [
  {
    title: 'Loan Origination System (LOS)',
    description:
      'Solutions based on robust third-party LOS platforms provided by our partners.',
  },
  {
    title: 'Loan Management System (LMS)',
    description:
      'Comprehensive LMS solutions integrated with partner technologies for efficient loan lifecycle management.',
  },
  {
    title: 'Bad Debt Collection System',
    description:
      'Specialized systems from our partners to manage and optimize bad debt recovery processes.',
  },
  {
    title: 'Business Rule Engine (BRE)',
    description:
      'Implementation and customization of BREs to automate decision-making and enforce business policies.',
  },
  {
    title: 'Credit Risk and Customer Analytics',
    description: 'AI and ML models developed for credit risk and analytics.',
  },
];

const LendingSolutions: React.FC = () => {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 text-white"
      id="lending-solutions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: '#2ec4a5' }} // 👈 Custom teal color
          >
            Lending Solutions & Services
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
            SCL Infotech Private Limited offers comprehensive solutions and services within the Lending domain, catering to a wide range of retail and SME products.
          </p>
        </motion.div>

        {/* Core Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Circular Image and Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              Our Core Offerings
            </h3>
            <div className="rounded-full overflow-hidden border-4 border-teal-500 shadow-xl w-64 h-64">
              <img
                src={SubramanyamImage}
                alt="Lending Solutions"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right: List of Offerings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {lendingSolutions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="text-teal-400 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LendingSolutions;
