import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@sclinfotech.com',
      subDetails: 'support@sclinfotech.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91-9289442740 ',
      // subDetails: '+91 98765 67XXX',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'SCL Infotech Pvt. Ltd.',
      subDetails: 'Qbicals 109, 1st Floor, Sector 62, Noida Uttar Pradesh, India',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subDetails: '24/7 Support Available',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We’re here to help you take your finance business to the next level.
            Reach out to us through any of the channels below — our team will get back to you quickly.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-teal-500/60 hover:bg-gray-800/90 shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500">
                <info.icon className="text-white" size={28} />
              </div>
              <h4 className="text-white font-semibold text-xl mb-2">{info.title}</h4>
              <p className="text-gray-300">{info.details}</p>
              <p className="text-gray-400 text-sm">{info.subDetails}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-teal-600 to-emerald-500 text-white py-4 px-10 rounded-full shadow-xl  transition-transform duration-300 ">
            Let’s Build Something Great Together 🚀
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
