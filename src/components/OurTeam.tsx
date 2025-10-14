import React from "react";
import { motion, easeOut } from "framer-motion";
import { Briefcase, Linkedin } from "lucide-react";
import SubramanyamImage from "./images/subramanyam-chandrasekhar.jpg"; 
import LpSir from "./images/LP Sir.jpg"; 
import Akshat  from "./images/Akshat Sir.jpg";
const teamMembers = [
  {
    name: "Lakshmi Prashad",
    role: "Founder & CEO",
    img: LpSir,
    linkedin: "https://www.linkedin.com/in/lakshmi-prashad-7ba75812",
  },
  {
    name: "Dr. Subramanyam Chandrasekhar",
    role: "Co-Founder & Mentor",
    img: SubramanyamImage,
    linkedin: "https://www.linkedin.com/in/subramanyam-chandrasekhar-065b8a112/?originalSubdomain=in",
  },
  
  {
  name: "Akshat Khanna",
  role: "Manager",
  img: Akshat, 
  linkedin: "https://www.linkedin.com/in/akshat-khanna1099?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
    <section id="team" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Team 
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A passionate group of innovators, strategists, and technologists working together
          to deliver business growth and intelligent solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full sm:w-72 bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-teal-500"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-teal-500 shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Briefcase size={16} /> {member.role}
              </p>
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
