import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    { title: 'Teach Without Interruption', desc: 'Attendance happens while teaching continues.', for: 'Teachers', color: 'from-blue-500 to-cyan-400' },
    { title: 'No Queues. No Roll Calls.', desc: 'Quick fingerprint verification directly in the classroom.', for: 'Students', color: 'from-purple-500 to-pink-500' },
    { title: 'Complete Visibility', desc: 'Real-time attendance information from one dashboard.', for: 'Administrators', color: 'from-emerald-500 to-teal-400' },
    { title: 'Better Attendance Insights', desc: 'Understand patterns and identify attendance issues early.', for: 'School Management', color: 'from-orange-500 to-amber-400' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Schools Choose SmartRoll
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${b.color} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform`}></div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">For {b.for}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{b.title}</h3>
              <p className="text-slate-600 text-lg">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;