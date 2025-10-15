import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@sclinfotech.com",
      subDetails: "support@sclinfotech.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-9289442740",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "SCL Infotech Pvt. Ltd.",
      subDetails: "Qbicals 109, 1st Floor, Sector 62, Noida, Uttar Pradesh, India",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      subDetails: "24/7 Support Available",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to collaborate? Reach out via the channels below —
            we’ll get back to you quickly.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 border border-gray-700 rounded-3xl p-6 sm:p-8 text-center shadow-md hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg">
                <info.icon className="text-white" size={28} />
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-1">{info.title}</h4>

              {/* Details */}
              <p className="text-gray-300 text-sm">{info.details}</p>
              {info.subDetails && (
                <p className="text-gray-400 text-xs mt-1">{info.subDetails}</p>
              )}

              {/* Optional glowing outline */}
              <div className="absolute -inset-0.5 rounded-3xl border border-teal-400 blur-sm opacity-0 hover:opacity-10 transition duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-medium py-4 px-10 rounded-full shadow-xl hover:scale-105 hover:shadow-teal-500/40 transition-all duration-300"
          >
            Let’s Build Something Great Together 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
