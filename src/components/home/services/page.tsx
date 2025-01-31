import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Brand Design",
    description: "Creating distinctive visual identities that resonate."
  },
  {
    title: "Digital Experience",
    description: "Crafting immersive digital journeys and interfaces."
  },
  {
    title: "Strategy",
    description: "Developing comprehensive brand and marketing strategies."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-neutral-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-light text-green-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;