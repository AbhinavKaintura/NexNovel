'use client'; 
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-24"
        >
          <div>
            <h2 className="text-4xl font-light text-green-900 mb-8">Our Approach</h2>
            <p className="text-neutral-600 leading-relaxed">
              We believe in the power of design to shape culture and drive meaningful change. 
              Our process combines strategic thinking with creative excellence to deliver 
              results that exceed expectations.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="aspect-square bg-neutral-100 rounded-lg mb-6" />
            <h3 className="text-xl font-light text-green-900 mb-2">Featured Work</h3>
            <p className="text-neutral-600">Discover our latest projects and collaborations.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;