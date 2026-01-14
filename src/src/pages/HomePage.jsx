
import { React, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Rocket, Blocks, Bot, Globe, Cpu, Cloud, Flame, Earth, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import FloatingElement from '@/components/FloatingElement';
import ServiceCard from '@/components/ServiceCard';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const GradientIcon = ({ Icon, from, via1, via2, to, ...props }) => {
  return (
    <svg viewBox="0 0 24 24" className={props.className}>
      <defs>
        <linearGradient id="shared-gradient" x1="0%" y1="0%" x2="100%" y2="70%">
          <stop offset="0%" stopColor={from} />
          <stop offset="60%" stopColor={via1} />
          <stop offset="80%" stopColor={via2} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <Icon stroke={`url(#shared-gradient)`} />
    </svg>
  );
};

const HomePage = () => {
  const services = [
    {
      icon: Bot,
      title: "Artificial Intelligence",
      description: "We apply cutting-edge AI to create practical solutions that address today's most complex challenges.",
      color: "blue",
    },
    {
      icon: Blocks,
      title: "Systems Integration",
      description: "Our team bridges hardware, software, and data systems into seamless, reliable workflows that just work.",
      color: "blue",
    },
    {
      icon: Rocket,
      title: "Product Prototyping",
      description: "We turn bold ideas into working prototypes quickly, helping you validate concepts and accelerate innovation.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Application Development",
      description: "From web to mobile to desktop, we build applications that are scalable, user-friendly, and performance-driven.",
      color: "blue",
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "We help businesses modernize through websites, social platforms, design, logistics, and marketing that connect and convert.",
      color: "blue",
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "We design and manage databases, cloud platforms, servers, and hosting for secure, scalable, and efficient operations.",
      color: "colorPalette1",
    },
  ];

  const servicesRef = useRef(null);
  const navigate = useNavigate();

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <Helmet>
        <title>VectaShield</title>
        <meta name="description" content="Leading software development company specializing in AI, web applications, and cutting-edge technology solutions for the future." />
      </Helmet>
      
      <div className="min-h-screen relative">
        
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                  <span className="gradient-text">Engineering The Future</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Bridging passion and execution with engineering excellence in defense technology and Artificial Intelligence. Building tomorrow's technology today.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    size="lg" 
                    className="neon-border text-white font-semibold px-8 py-4 pulse-glow"
                    onClick={toContact}
                  >
                  <Flame className="w-5 h-5 mr-2" />
                    Forge Your Solution
                  </Button>
                  <Button  
                    size="lg" 
                    className="bg-white hover:bg-slate-200 text-black border-electric-blue px-8 py-4"
                    onClick={scrollToServices}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
              
              <div className="relative h-96">
                <FloatingElement delay={0.6} className="absolute top-0 right-0 w-32 h-32">
                  <div className="p-4 w-32 h-32 glow-blue rounded-full justify-center flex items-center">
                    <GradientIcon
                      Icon={Hexagon}
                      from="var(--colorPalette1)"
                      via1="var(--colorPalette2)"
                      via2="var(--colorPalette3)"
                      to="var(--colorPalette4)"
                      className="w-16 h-16"
                    />
                  </div>
                </FloatingElement>
                
                <FloatingElement delay={1.0} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-electric-blue/20 to-mint-green/20 flex items-center justify-center glow-blue">
                    <img alt="Futuristic holographic interface with glowing data streams" className="w-48 h-48 rounded-full object-cover" src="images/art/forge.webp" />
                  </div>
                </FloatingElement>

                 <FloatingElement delay={0.8} className="absolute bottom-10 left-0 w-32 h-32">
                  <div className="p-4 w-32 h-32 glow-blue rounded-full justify-center flex items-center">
                    <GradientIcon
                      Icon={Earth}
                      from="var(--colorPalette1)"
                      via1="var(--colorPalette2)"
                      via2="var(--colorPalette3)"
                      to="var(--colorPalette4)"
                      className="w-16 h-16"
                    />
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </section>

        <section ref={servicesRef} className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate products to market
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-12"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building the future with our technology
              </p>
              <Link to="/about">
              <Button 
                size="lg" 
                className="neon-border text-white font-semibold px-12 py-4 pulse-glow"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Forge Ahead
              </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
