
import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Code, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/use-toast';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // replace with your route
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-20 p-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img className="w-10 h-10" src="svg/logo.svg"/>
          <span className="text-2xl font-bold gradient-text-name">VectaShield</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
             <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-300 dark:text-gray-300 transition-colors ${isActive ? 'text-white font-semibold' : ''}`
                }
                end={item.path === '/'}
              >
                {item.name}
            </NavLink>
          ))}
          <Button 
            className="neon-border bg-transparent text-white"
            onClick={handleClick}
          >
            Get Started
          </Button>
          {/* <ThemeToggle /> */}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-panel">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                   <NavLink to={item.path} className={({ isActive }) =>
                      `w-full text-gray-300 dark:text-gray-300 transition-colors ${isActive ? 'text-white font-semibold' : ''}`
                    }>{item.name}
                    </NavLink>
                </DropdownMenuItem>
              ))}
               <DropdownMenuItem>
                 <Button 
                    className="w-full neon-border bg-transparent text-white"
                    onClick={handleClick}
                  >
                    Get Started
                  </Button>
               </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
