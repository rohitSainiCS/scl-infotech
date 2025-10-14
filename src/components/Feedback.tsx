import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Feedback: React.FC = () => {
  const testimonials = [
    {
      name: 'Rahul Vithani',
      position: 'Vice President, Head',
      company: 'Tata Capital',
      rating: 5,
      feedback:
        'SCLinfotech transformed our operations completely. Their technology solutions helped us reduce processing time by 60% and improve customer satisfaction significantly.',
      avatar:
        'https://th.bing.com/th/id/OIP.I4-UZFpauSOyD2qh4wQ4dwAAAA?w=80&h=80&c=1&bgcl=013240&r=0&o=7&cb=12&dpr=1.5&pid=ImgRC&rm=3',
    },
    {
      name: 'Ankit Gupta',
      position: 'General Manager, core applications and platforms',
      company: 'Godrej',
      rating: 5,
      feedback:
        'The team at SCLinfotech is exceptional. They delivered a robust system integration that seamlessly connected all our platforms. Highly recommended!',
      avatar:
        'https://media.licdn.com/dms/image/v2/D5603AQFYWB5TC5rk-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705662187877?e=2147483647&v=beta&t=68w4_s11wR3VBfcMs2gtMeo3iD7ZDJtsVUijkKlYS88',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director, Investment Partners',
      company: 'Investment Partners',
      rating: 5,
      feedback:
        'Outstanding support and innovative solutions. SCLinfotech helped us achieve compliance standards while maintaining operational efficiency.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'text-amber-300 fill-current' : 'text-gray-600'}
      />
    ));
  };

  return (
    <section id="feedback" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
            Client Feedback
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about their
            experience working with SCLinfotech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group relative shadow-lg hover:shadow-xl"
            >
              <div className="absolute top-4 right-4 text-teal-400/30">
                <Quote size={32} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-400/30"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-teal-400 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-300 leading-relaxed italic">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-600/20 to-emerald-500/20 p-8 rounded-2xl border border-teal-500/30 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Experience the difference that our dedicated team and innovative solutions can make for
              your finance company. Let's create your success story together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
