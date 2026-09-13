import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white" id="problemsolution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Stop Teaching Just to Take Attendance?
          </h2>
          <p className="text-xl text-slate-600">
            Let attendance happen in the background while learning continues.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-100 bg-red-50/50 p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <XCircle size={120} className="text-red-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <XCircle size={24} />
              </span>
              Traditional Attendance
            </h3>
            
            <div className="space-y-6">
              <p className="text-slate-600 italic border-l-4 border-red-200 pl-4 py-2">
                "Teacher calls names. Students respond 'Present'. Teaching is interrupted. Manual registers create errors."
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  'Teaching time lost daily',
                  'Manual and tedious process',
                  'Proxy attendance possibilities',
                  'Paper registers to maintain',
                  'Delayed reporting and insights'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <XCircle size={20} className="text-red-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* SmartRoll */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-primary-100 bg-primary-50/50 p-8 lg:p-12 relative overflow-hidden shadow-lg shadow-primary-500/5"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 size={120} className="text-primary-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <CheckCircle2 size={24} />
              </span>
              SmartRoll Attendance
            </h3>
            
            <div className="space-y-6">
              <p className="text-slate-900 font-medium italic border-l-4 border-primary-400 pl-4 py-2 bg-primary-100/30 rounded-r-lg">
                "Teacher teaches. Device moves through students. Fingerprints verified. Data synced to cloud instantly."
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  'Attendance while teaching continues',
                  'Foolproof biometric verification',
                  'Automatic digital records',
                  'Cloud dashboard integration',
                  'Real-time actionable insights'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;