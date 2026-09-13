import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Smartphone, PieChart, Database, Shield, FileText } from 'lucide-react';

const PremiumAddons = () => {
  const addons = [
    { title: 'Parent SMS Notifications', desc: 'Automatically notify parents about attendance events. e.g. "Your child was marked absent today."', icon: <MessageSquare size={24}/> },
    { title: 'WhatsApp Alerts', desc: 'Send attendance notifications directly through WhatsApp. Includes absence alerts and daily updates.', icon: <Smartphone size={24}/> },
    { title: 'Advanced Analytics', desc: 'Discover meaningful patterns. Attendance trends, frequently absent students, and risk identification.', icon: <PieChart size={24}/> },
    { title: 'ERP Integration', desc: 'Integrate SmartRoll with existing school management systems (SIS/ERP).', icon: <Database size={24}/> },
    { title: 'Replacement Warranty', desc: 'Support for eligible normal hardware failures. (Coverage applies according to policy).', icon: <Shield size={24}/> },
    { title: 'Custom Reports', desc: 'Create reports specifically for your school\'s requirements. Custom fields, filters, and formats.', icon: <FileText size={24}/> }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Extend Your SmartRoll Experience
          </h2>
          <p className="text-xl text-slate-400">
            Add powerful communication, analytics and integration capabilities as your school grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:border-primary-500 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-primary-400 mb-4">
                {addon.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{addon.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{addon.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumAddons;