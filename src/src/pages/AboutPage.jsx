import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target } from 'lucide-react';
import EngineerCard from '@/components/EngineerCard';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Anthony Argeropoulos',
      role: 'Founder | Engineering Physicist',
      bio: 'Brings a multidisciplinary background in physics and engineering to tackle complex, cross-domain problems',
      imageUrl: 'images/anthony_headshot_ai.webp',
      alt: 'Portrait of Anthony Argeropoulos',
      xtwitter: 'https://x.com/anthony_arger/',
      linkedin: 'https://www.linkedin.com/in/argeropoulos/',
      github: 'https://github.com/anthony-arger/'
    },
  ];

  const handleClick = (page) => {
    window.location.href = page;
  };

  return (
    <>
      <Helmet>
        <title>About Us - VectaShield</title>
        <meta name="description" content="Meet the team at VectaShield, the innovators and visionaries building the future of technology with engineering excellence." />
      </Helmet>
      <div className="relative z-10 px-6 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="gradient-text">VectaShield</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[80%] mx-auto">
              Whether you’re launching a new product, optimizing a system, or exploring emerging technologies, we bring a unique blend of technical expertise and creative problem-solving to the table. We believe great ideas deserve great execution, and we're here to forge that path with you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass-panel p-8">
              <Lightbulb className="w-12 h-12 text-colorPalette4 mx-auto mb-4" />
              <h2 className="text-2xl text-colorPalette4 font-bold mb-2">Our Vision</h2>
              <p className="text-gray-400">To lead innovation in emerging technologies by turning bold engineering ideas into practical solutions that work in the real world.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="glass-panel p-8">
              <Target className="w-12 h-12 text-colorPalette4 mx-auto mb-4" />
              <h2 className="text-2xl text-colorPalette4 font-bold mb-2">Our Mission</h2>
              <p className="text-gray-400">We bridge ideas and execution, turning complex challenges into functional products and solutions through relentless engineering and design.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="glass-panel p-8">
              <Users className="w-12 h-12 text-colorPalette4 mx-auto mb-4" />
              <h2 className="text-2xl text-colorPalette4 font-bold mb-2">Our Team</h2>
              <p className="text-gray-400">A growing team of engineers and innovators driven by curiosity, precision, and tackling the next wave of technological challenges</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet the <span className="gradient-text">Architects of Tomorrow</span>
            </h2>
          </motion.div>
          
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-80">
                <EngineerCard member={member} delay={index * 0.2 + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
