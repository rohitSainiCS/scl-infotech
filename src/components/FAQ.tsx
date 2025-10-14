import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of finance companies do you serve?',
      answer: 'We serve banks, credit unions, lending institutions, investment firms, insurance companies, and fintech startups. Our scalable solutions adapt to your specific needs.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Timelines vary: simple integrations take 2-4 weeks, full overhauls 3-6 months. Detailed timelines provided at consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 24/7 support including updates, monitoring, troubleshooting, and technical assistance.'
    },
    // {
    //   question: 'Are your solutions regulation-compliant?',
    //   answer: 'Absolutely. We comply with PCI DSS, SOX, GDPR, and other relevant financial standards, including auditing and reporting.'
    // },
    // {
    //   question: 'Can you integrate with existing systems?',
    //   answer: 'Yes, we specialize in seamless integration across platforms, databases, and third-party apps to ensure data consistency.'
    // },
    // {
    //   question: 'What sets SCLinfotech apart?',
    //   answer: 'Expertise in finance, innovation, and a personalized approach. We’re your strategic technology partner for growth.'
    // },
    // {
    //   question: 'Do you offer custom software development?',
    //   answer: 'Yes, tailored specifically for finance firms—from new apps to full digital transformations.'
    // },
    {
      question: 'How do you ensure data security?',
      answer: 'Through multi-layered security: encryption, access controls, audits, and compliance with industry standards.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, implementation, and how we help your finance company succeed.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-teal-400">
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600/20 to-emerald-500/20 p-8 rounded-2xl border border-teal-500/30 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              Our team is here to help. Contact us for personalized answers and detailed information about how our solutions can benefit your specific needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
