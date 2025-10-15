import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, HeartHandshake, Brain, Rocket } from "lucide-react";

const CareersSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Smooth scroll into view when details open
  useEffect(() => {
    if (showDetails && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showDetails]);

  const features = [
    {
      icon: Briefcase,
      title: "Dynamic Roles",
      description:
        "Join a growing company that values innovation and impact. Shape the future of financial technology.",
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description:
        "Enhance your skills with challenging projects, mentorship, and access to advanced tools.",
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Culture",
      description:
        "Work with passionate professionals who support each other and celebrate success together.",
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description:
        "We invest in your growth and provide clear opportunities to advance in your career.",
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gray-900/90" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white">
            What can we help you achieve?
          </h2>
        </motion.div>

        {/* Buttons */}
        {!showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => setShowDetails(true)}
              type="button"
              className="inline-block px-8 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-300"
            >
              Work with us
            </button>
            <a
              href="mailto:careers@sclinfotech.in?subject=Job Application"
              className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Apply for job
            </a>
          </motion.div>
        )}

        {/* Expanded Details */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-left"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 text-center mb-10"
            >
              Why Join SCL Infotech?
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 bg-gray-800 p-10 rounded-2xl border border-gray-700 hover:border-teal-500 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 mb-4">
                Let’s Build the Future Together
              </h4>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                At SCL Infotech, you’ll work on cutting-edge technologies in finance automation,
                AI-driven decision systems, and more. Your contribution will make a real impact in
                redefining financial services.
              </p>
              <a
                href="mailto:careers@sclinfotech.in?subject=Application for Career at SCL Infotech"
                className="inline-block px-8 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                Send Your Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CareersSection;
