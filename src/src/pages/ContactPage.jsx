
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import SubmitForm from '@/components/SubmitForm'

const ContactPage = () => {
  const handleClick = (page) => {
    window.location.href = page;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - VectaShield</title>
        <meta name="description" content="Get in touch with VectaShield. Let's discuss how we can build your solution today." />
      </Helmet>
      <div className="min-h-screen relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
            <SubmitForm/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="flex items-center gap-4 p-4 glass-panel">
              <Mail className="w-8 h-8 text-electric-blue" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-400">contact@VectaShield.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <button onClick={() => handleClick("https://www.instagram.com/vectashield_llc")}><Instagram className="w-8 h-8 text-white" /></button>
              <button onClick={() => handleClick("https://www.linkedin.com/company/vectashield")}><Linkedin className="w-8 h-8 text-white" /></button>
              <button onClick={() => handleClick("https://github.com/VectaShield")}><Github className="w-8 h-8 text-white" /></button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
