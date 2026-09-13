import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: 'How does SmartRoll work?', a: 'The portable device is passed between students and attendance is recorded using fingerprint verification while the teacher continues teaching.' },
    { q: 'Does the teacher need to take attendance?', a: 'No. The teacher only starts the process and can continue teaching.' },
    { q: 'What happens if the internet stops working?', a: 'Attendance is stored locally and synchronized when connectivity is restored.' },
    { q: 'Can we test SmartRoll before purchasing?', a: 'Yes. Schools can apply for the 15-day classroom trial.' },
    { q: 'How many devices does a school need?', a: 'The number depends on the school\'s classrooms, sections and timetable. SmartRoll can help determine the appropriate deployment during the demo.' },
    { q: 'What does the monthly platform include?', a: 'Cloud dashboard, attendance records, reports, software updates, technical support and basic maintenance.' },
    { q: 'When will SmartRoll be available?', a: 'Initial demos and trials are planned to begin in Aligarh starting January.' },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition text-left"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`transform transition-transform ${open === i ? 'rotate-180 text-primary-500' : 'text-slate-400'}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;