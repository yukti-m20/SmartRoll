import React from 'react';
import { motion } from 'framer-motion';
import { Play, Hand, Fingerprint, Users, RefreshCw } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: <Play size={28} />, title: 'Start', desc: 'Teacher starts the SmartRoll device at the beginning of class.' },
    { icon: <Hand size={28} />, title: 'Pass', desc: 'The device is handed to the first student in the front row.' },
    { icon: <Fingerprint size={28} />, title: 'Verify', desc: 'Each student quickly verifies their fingerprint. (✓ Verified)' },
    { icon: <Users size={28} />, title: 'Continue', desc: 'Students pass the device. The teacher continues teaching.' },
    { icon: <RefreshCw size={28} />, title: 'Sync', desc: 'Attendance records automatically sync to the cloud dashboard.' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="howitworks">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Attendance in Motion.<br/>Data in Real Time.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A seamless 5-step process that completely eliminates the need for manual roll calls.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0">
             <motion.div 
               className="h-full bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600"
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               viewport={{ once: true }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 text-primary-400 group-hover:scale-110 group-hover:bg-primary-900 transition-all duration-300 shadow-xl relative z-10">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm flex items-center justify-center border-2 border-slate-900">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;