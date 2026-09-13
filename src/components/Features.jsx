import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Clock, FileSpreadsheet, Download, Wrench, ShieldCheck, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cloud className="text-blue-500" size={32} />,
      title: 'Cloud Dashboard',
      desc: 'Access complete attendance information from one secure centralized dashboard. View daily, class-wise, section-wise, and individual student records easily.',
      bg: 'bg-blue-50'
    },
    {
      icon: <Clock className="text-emerald-500" size={32} />,
      title: 'Real-Time Records',
      desc: 'Attendance automatically updates after fingerprint verification. Access present/absent history, class-wise records, and instant synchronization.',
      bg: 'bg-emerald-50'
    },
    {
      icon: <FileSpreadsheet className="text-purple-500" size={32} />,
      title: 'Automated Reports',
      desc: 'Generate powerful attendance reports instantly. Daily, weekly, monthly, student-wise, and low attendance reports exported to PDF, Excel, or CSV.',
      bg: 'bg-purple-50'
    },
    {
      icon: <Download className="text-orange-500" size={32} />,
      title: 'Software Updates',
      desc: 'SmartRoll continuously improves. Receive new features, security improvements, bug fixes, firmware updates, and performance enhancements.',
      bg: 'bg-orange-50'
    },
    {
      icon: <ShieldCheck className="text-indigo-500" size={32} />,
      title: 'Technical Support',
      desc: 'Get assistance whenever required. Includes remote troubleshooting, device assistance, software support, and dedicated dashboard support.',
      bg: 'bg-indigo-50'
    },
    {
      icon: <Wrench className="text-rose-500" size={32} />,
      title: 'Basic Maintenance',
      desc: 'Keep your attendance system running smoothly with device diagnostics, basic maintenance support, hardware health monitoring, and firmware maintenance.',
      bg: 'bg-rose-50'
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need. Out of the Box.
          </h2>
          <p className="text-xl text-slate-600">
            A complete ecosystem designed specifically for educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;