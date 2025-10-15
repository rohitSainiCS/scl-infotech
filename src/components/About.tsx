import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Committed to delivering innovative solutions that drive success in the finance industry.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise in finance technology and operations.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Proven track record of delivering high-quality services that exceed expectations.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Helping finance companies scale and optimize their operations for sustainable growth.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
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
            About SCL Infotech
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            SCL Infotech offers specialized Decision Automation Services backed by expertise in Lending and Insurance. 
            We deliver end-to-end implementation of Business Rule Engines (BRE) such as FICO and Drools, enabling 
            organizations to automate, optimize, and manage complex decision frameworks in financial domains.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 shadow-md hover:shadow-teal-500/10 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-lg mb-5 transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900 p-10 rounded-2xl border border-gray-700 hover:border-teal-500 shadow-md hover:shadow-teal-500/10 transition-all duration-300"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
              Our Commitment
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              SCL Infotech provides specialized Decision Automation Services, leveraging deep expertise in Lending and Insurance sectors. 
              The company offers comprehensive end-to-end implementation of Business Rule Engines (BRE) including FICO, Drools, and more — 
              empowering organizations to automate, optimize, and efficiently manage complex decision-making frameworks within the financial industry.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
