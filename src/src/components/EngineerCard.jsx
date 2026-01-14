import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, Github, AppWindow, Linkedin, Twitter } from 'lucide-react';

const EngineerCard = ({ member, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        opacity: { duration: 0.6, delay },
        y:       { duration: 0.6, delay },
        scale:   { duration: 0.3 }
      }}
      whileHover={{ scale: 1.10 }}
      className="glass-panel group relative overflow-hidden p-1 neon-border hover:scale-110 transform-gpu"
    >
      <div className="relative">
        <img  
          className="w-full h-64 object-cover object-top transition-transform duration-500" 
          alt={member.alt} src={member.imageUrl} />
        <div className="absolute inset-0 fade-up"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-sm gradient-text font-semibold">{member.role}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center gap-4">
        {member.website && <a href={member.website}><AppWindow/></a>}
        {member.xtwitter && <a href={member.xtwitter}><Twitter/></a>}
        {member.linkedin && <a href={member.linkedin}><Linkedin/></a>}
        {member.github && <a href={member.github}><Github/></a>}
        </div>
      </div>
    </motion.div>
  );
};

export default EngineerCard;