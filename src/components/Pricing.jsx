import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600">
            Invest in seamless education. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Device Pricing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">SmartRoll Device</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-extrabold text-slate-900">₹5,000</span>
              <span className="text-slate-500 font-medium">/ device</span>
            </div>
            <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">One-time hardware purchase.</p>
            
            <ul className="space-y-4 mb-8">
              {['Portable fingerprint attendance device', 'Classroom-ready design', 'Cloud connectivity', 'Local attendance storage', 'Secure synchronization'].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <Check size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl font-bold text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-200">
              Request Device Pricing
            </button>
          </motion.div>

          {/* Platform Pricing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-3xl p-8 border border-primary-500 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-bold mb-2">SmartRoll Platform</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-extrabold">₹11,999</span>
              <span className="text-slate-400 font-medium">/ month per school</span>
            </div>
            <p className="text-sm text-slate-400 mb-8 pb-8 border-b border-slate-800">
              Everything required to operate and manage the smart attendance ecosystem.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Cloud Dashboard & Attendance Records', 
                'Automated Reports & Data Backup', 
                'Software Updates & Device Management',
                'Technical Support & Basic Maintenance', 
                'Secure Data Synchronization', 
                'Normal Hardware Failure Support*'
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check size={20} className="text-primary-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/25 mt-auto">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;