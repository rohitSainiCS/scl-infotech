import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// ✅ Client Logos
import HdfcERGO from "../components/images/HdfcERGO.jpg";
import KloudRack from "./images/kloudRack.jpg";
import Kollect from "./images/kollect.jpg";
import TataCapital from "./images/TataCapital.jpg";
import GodrejCapital from "./images/GodrejCapital.jpg";

const ClientsSlider: React.FC = () => {
  const clients = [
    { name: "HDFC Ergo", logo: HdfcERGO },
    { name: "KloudRack", logo: KloudRack },
    { name: "Kollect", logo: Kollect },
    { name: "Tata Capital", logo: TataCapital },
    { name: "Godrej Capital", logo: GodrejCapital },
  ];

  const duplicatedClients = [...clients, ...clients];
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [duration, setDuration] = useState(25);

  // Responsive scroll speed
  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 640) setDuration(12);
      else if (window.innerWidth < 1024) setDuration(18);
      else setDuration(25);
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  // Measure width of scrollable content
  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, [window.innerWidth]);

  return (
    <section id="clients" className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
            Our Valued Customers & Partners
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            SCL Infotech proudly serves many of India’s largest NBFCs and insurance organizations,
            providing high-impact solutions across Lending and Insurance, AI-driven process automation,
            and next-generation GenAI-powered workflows.
          </p>
        </motion.div>

        {/* Scrolling Client Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex space-x-6 sm:space-x-12"
            animate={{ x: [-scrollWidth, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: duration,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-20 sm:w-44 sm:h-28 bg-white/5 backdrop-blur-sm p-4 rounded-2xl 
                  flex items-center justify-center shadow-md border border-gray-700 
                  hover:shadow-teal-500/10 hover:border-teal-500 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
