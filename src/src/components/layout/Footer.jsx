
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="w-8 h-8" src="svg/logo.svg"/>
              <span className="text-xl font-bold gradient-text">VectaShield</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building tomorrow's technology today
            </p>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Services</span>
            <div className="space-y-2 text-sm text-gray-400">
              <p>AI Solutions</p>
              <p>Application Development</p>
              <p>Digital Transformation</p>
              <p>Product Engineering</p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Company</span>
            <div className="space-y-2 text-sm text-gray-400">
              <p><NavLink to="/" className="hover:text-white">Home</NavLink></p>
              <p><NavLink to="/about" className="hover:text-white">About Us</NavLink></p>
              <p><NavLink to="/contact" className="hover:text-white">Contact</NavLink></p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Connect</span>
            <div className="space-y-2 text-sm text-gray-400">
              <p><Link to="https://www.instagram.com/vectashield_llc" className="hover:text-white">Instagram</Link></p>
              <p><Link to="https://www.linkedin.com/company/vectashield" className="hover:text-white">LinkedIn</Link></p>
              <p><Link to="https://github.com/VectaShield" className="hover:text-white">GitHub</Link></p>
              <p><Link to="mailto:contact@vectashield.com" className="hover:text-white">Email</Link></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VectaShield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
