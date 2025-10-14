import React from 'react';
import { motion } from 'framer-motion';

const bankingServices = [
  'Loan Origination & Credit Decisioning',
  'Credit Risk & ML Scoring',
  'Collections & Recovery Optimization',
  'Regulatory Compliance & Reporting',
  'Automated KYC & AML checks',
  'Fraud Detection & Prevention',
  'Consistent credit risk assessment using rule-based criteria & scores',
  'Streamlined loan applications & faster approvals',
];

const insuranceServices = [
  'Underwriting Automation & Risk Assessment',
  'Automated policy eligibility checks & approvals',
  'Claims Processing & Fraud Detection',
  'Personalized policy recommendations & updates',
  'Product Configuration & Pricing',
  'Rapid creation of new insurance products & bundles',
  'Dynamic pricing adjustments based on market rules',
  'Automated quote generation & proposal creation',
];

const DecisionAutomation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950" id="decision-automation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 mb-4">
            Our Service in Decision Automation
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            SCL Infotech delivers FICO Blaze Advisor-based solutions to automate complex business rules, ensuring agility, compliance, and precision for banking and insurance enterprises.
          </p>
        </motion.div>

        {/* Banking and Insurance Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Banking Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-6 text-center">Banking</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bankingServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-5 rounded-xl border border-gray-700 text-gray-300 hover:border-teal-500 transition-all duration-300 shadow-md"
                >
                  <p className="text-sm">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Insurance Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Insurance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {insuranceServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-5 rounded-xl border border-gray-700 text-gray-300 hover:border-emerald-500 transition-all duration-300 shadow-md"
                >
                  <p className="text-sm">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DecisionAutomation;
