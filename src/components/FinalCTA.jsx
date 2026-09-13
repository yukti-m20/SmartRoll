import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-32 bg-primary-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Ready to Make Attendance Effortless?
        </h2>
        <p className="text-xl md:text-2xl text-primary-100 mb-10">
          Let your teachers teach. Let SmartRoll handle attendance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-full shadow-xl hover:bg-slate-50 transition">
            Book a Free Demo
          </button>
          <button className="px-8 py-4 bg-primary-800 text-white font-bold text-lg rounded-full border border-primary-500 hover:bg-primary-900 transition">
            Apply for 15-Day Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;