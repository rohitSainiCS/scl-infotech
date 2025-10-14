import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "SCL Infotech excels in Lending and Insurance solutions.",
  "Leveraging automation, AI, and GenAI to support large NBFCs and top insurance providers in India.",
  "Deep domain knowledge translates into tailored automation for credit underwriting, claims decisions, compliance, and digital transformation.",
];

const DomainExpertise: React.FC = () => {
  return (
    <section id="domain-expertise" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Domain Expertise
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We combine deep industry knowledge with advanced technology to deliver tailored solutions for Lending and Insurance.
        </motion.p>

        <motion.div
          className="grid gap-6 max-w-3xl mx-auto sm:grid-cols-1 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CheckCircle className="text-teal-400 w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-left">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DomainExpertise;
