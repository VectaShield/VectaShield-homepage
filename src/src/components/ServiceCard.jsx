
import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const ServiceCard = ({ icon: Icon, title, description, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-6 floating-animation"
      style={{ animationDelay: `${delay * 0.5}s` }}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-colorPalette5 glow-blue`}>
        <Icon className="w-6 h-6 text-colorPalette4" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
