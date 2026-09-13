import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Cloud, LayoutDashboard, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
              Designed for modern schools. Built for uninterrupted learning.
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              Attendance Happens.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                Teaching Continues.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
              SmartRoll is a portable fingerprint-based smart attendance system that moves through the classroom while teachers continue teaching. No roll calls. No registers. No interruption.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a href="#contactus" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2">
              Book a Free Demo <ArrowRight size={20} />
            </a>
            <a href="#15-daytrial" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-lg hover:bg-slate-50 transition shadow-md border border-slate-200 flex items-center justify-center gap-2">
              Try for 15 Days
            </a>
            <a href="#dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-primary-600 font-bold text-lg hover:bg-primary-50 transition flex items-center justify-center gap-2">
              Explore Dashboard
            </a>
          </motion.div>
        </div>

        {/* Visualizer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 shadow-xl flex items-center justify-center text-white relative">
                  <Fingerprint size={40} className="text-primary-400" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Classroom Device</h3>
                  <p className="text-sm text-slate-500">Biometric Verification</p>
                </div>
              </div>

              <div className="hidden md:flex flex-1 items-center">
                <div className="h-[2px] w-full bg-gradient-to-r from-primary-200 via-primary-500 to-purple-200 relative">
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(14,165,233,0.8)]"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shadow-inner">
                  <Cloud size={40} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Secure Cloud</h3>
                  <p className="text-sm text-slate-500">Real-time Sync</p>
                </div>
              </div>

              <div className="hidden md:flex flex-1 items-center">
                <div className="h-[2px] w-full bg-gradient-to-r from-purple-200 via-purple-500 to-primary-200 relative">
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary-600 border border-slate-100">
                  <LayoutDashboard size={40} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Smart Dashboard</h3>
                  <p className="text-sm text-slate-500">Instant Insights</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;