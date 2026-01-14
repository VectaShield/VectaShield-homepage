
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ children, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`floating-animation ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

export default FloatingElement;
