import React from "react";
import { motion, easeOut } from "framer-motion";
import { Briefcase, Linkedin } from "lucide-react";

// ✅ Team Images
import SubramanyamImage from "./images/subramanyam-chandrasekhar.jpg";
import LpSir from "./images/LP Sir.jpg";
import Akshat from "./images/Akshat Sir.jpg";

// ✅ Team Member Data
const teamMembers = [
  {
    name: "Dr. Subramanyam Chandrasekhar",
    role: "Co-Founder & Mentor",
    img: SubramanyamImage,
    linkedin:
      "https://www.linkedin.com/in/subramanyam-chandrasekhar-065b8a112/?originalSubdomain=in",
    description:
      "Veteran academician and consultant with 45+ years in R&D and industry. Senior Professor at JAGSoM and co-founder of Intellect AI Labs.",
  },
  {
    name: "Lakshmi Prashad",
    role: "Founder & CEO",
    img: LpSir,
    linkedin: "https://www.linkedin.com/in/lakshmi-prashad-7ba75812",
    description:
      "Founder of SCL Infotech with 23+ years in AI and BFSI. Expert in ML, banking solutions, and AI-driven innovation.",
  },
  {
    name: "Akshat Khanna",
    role: "Manager",
    img: Akshat,
    linkedin:
      "https://www.linkedin.com/in/akshat-khanna1099?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description:
      "Drives project execution and delivery excellence. Ensures timely implementation and high-impact outcomes for clients.",
  },
];

const OurTeam: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Passionate minds driving innovation, growth, and meaningful impact through
          technology and leadership.
        </motion.p>

        {/* Team Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative bg-gray-900 border border-gray-700 rounded-3xl p-6 sm:p-8 w-full sm:w-80 text-center shadow-md hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-500 shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-teal-400 font-medium mb-2 flex justify-center items-center gap-2">
                <Briefcase size={16} /> {member.role}
              </p>
              <p className="text-gray-400 text-sm mb-4">{member.description}</p>

              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal-400 hover:text-emerald-300 transition-transform transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>

              {/* Glowing border on hover */}
              <div className="absolute -inset-0.5 rounded-3xl border border-teal-400 blur-sm opacity-0 hover:opacity-10 transition duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
