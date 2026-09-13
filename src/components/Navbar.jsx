import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'How It Works', 'Features', 'Dashboard', '15-Day Trial', 'Coming Soon', 'Contact Us'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              SMARTROLL
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.replace(/\s+/g, '').toLowerCase()}`} 
                className="group relative text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors py-2"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#15-daytrial" className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
              Start 15-Day Trial
            </a>
            <a href="#contactus" className="bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              Book a Demo
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass border-t border-slate-200"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.replace(/\s+/g, '').toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="#15-daytrial" onClick={() => setIsOpen(false)} className="w-full text-center text-primary-600 font-medium py-2">Start 15-Day Trial</a>
              <a href="#contactus" onClick={() => setIsOpen(false)} className="w-full text-center bg-primary-600 text-white font-medium py-2.5 rounded-lg shadow-md">Book a Demo</a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;