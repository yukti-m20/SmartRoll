import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');

if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

const components = {
    'Navbar.jsx': `
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

  const navLinks = ['Home', 'How It Works', 'Features', 'Dashboard', 'Pricing', '15-Day Trial', 'Coming Soon', 'Contact Us'];

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${scrolled ? 'glass py-3' : 'bg-transparent py-5'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              SMARTROLL
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link} href={\`#\${link.replace(/\s+/g, '').toLowerCase()}\`} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
              Start 15-Day Trial
            </button>
            <button className="bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              Book a Demo
            </button>
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
              <a key={link} href={\`#\${link.replace(/\s+/g, '').toLowerCase()}\`} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md">
                {link}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-center text-primary-600 font-medium py-2">Start 15-Day Trial</button>
              <button className="w-full bg-primary-600 text-white font-medium py-2.5 rounded-lg shadow-md">Book a Demo</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
`,
    'Hero.jsx': `
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
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2">
              Book a Free Demo <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-lg hover:bg-slate-50 transition shadow-md border border-slate-200 flex items-center justify-center gap-2">
              Try for 15 Days
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-primary-600 font-bold text-lg hover:bg-primary-50 transition flex items-center justify-center gap-2">
              Explore Dashboard
            </button>
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
`,
    'ProblemSolution.jsx': `
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white" id="howitworks">
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
`,
    'HowItWorks.jsx': `
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
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
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
`,
    'Features.jsx': `
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
              <div className={\`w-16 h-16 rounded-2xl \${feature.bg} flex items-center justify-center mb-6\`}>
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
`,
    'DashboardPreview.jsx': `
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, AlertTriangle, TrendingUp, Users, UserCheck, UserX } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Entire School's Attendance. One Dashboard.
          </h2>
          <p className="text-xl text-slate-600">
            Turn attendance data into actionable insights instantly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-2xl relative"
        >
          {/* Dashboard Header UI */}
          <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-lg text-slate-800">School Overview</div>
            <div className="flex gap-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search student..." className="pl-10 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:border-primary-500 bg-slate-50" />
              </div>
              <button className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                <Filter size={18} />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Total Students', value: '1,250', icon: <Users size={20}/>, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Present Today', value: '1,124', icon: <UserCheck size={20}/>, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Absent', value: '126', icon: <UserX size={20}/>, color: 'text-rose-600', bg: 'bg-rose-50' },
                  { label: 'Attendance Rate', value: '89.9%', icon: <TrendingUp size={20}/>, color: 'text-primary-600', bg: 'bg-primary-50' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                    <div className={\`w-10 h-10 rounded-full \${stat.bg} \${stat.color} flex items-center justify-center mb-4\`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart Mockup */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-800">Weekly Attendance Trends</h3>
                  <select className="text-sm border-slate-200 rounded-md py-1 px-2"><option>This Week</option></select>
                </div>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[85, 92, 88, 95, 90].map((h, i) => (
                    <div key={i} className="w-full flex flex-col items-center gap-2">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: \`\${h}%\` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-primary-500 rounded-t-md opacity-80 hover:opacity-100 transition-opacity relative group"
                      >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {h}%
                         </div>
                      </motion.div>
                      <div className="text-xs text-slate-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Alerts & Classes */}
            <div className="space-y-6">
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  Low Attendance Alerts
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Rahul Sharma', class: '10-A', current: '68%', req: '75%' },
                    { name: 'Priya Patel', class: '9-B', current: '71%', req: '75%' },
                    { name: 'Amit Kumar', class: '11-C', current: '65%', req: '75%' },
                  ].map((student, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl shadow-sm text-sm border border-rose-100/50 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-800">{student.name}</div>
                        <div className="text-xs text-slate-500">Class {student.class}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-rose-600">{student.current}</div>
                        <div className="text-[10px] text-slate-400">Req: {student.req}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4">Class Overview</h3>
                <div className="space-y-4">
                  {[
                    { c: 'Class 10-A', a: 94 },
                    { c: 'Class 9-A', a: 91 },
                    { c: 'Class 10-B', a: 89 },
                  ].map((cls, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700">{cls.c}</span>
                        <span className="font-bold text-primary-600">{cls.a}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: \`\${cls.a}%\` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
`,
    'PremiumAddons.jsx': `
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
    { title: 'Custom Reports', desc: 'Create reports specifically for your school\\'s requirements. Custom fields, filters, and formats.', icon: <FileText size={24}/> }
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
`,
    'Pricing.jsx': `
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
`,
    'Trial.jsx': `
import React from 'react';
import { motion } from 'framer-motion';

const Trial = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-purple-700 text-white" id="15-daytrial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don't Just Believe Us. <br/>
              <span className="text-primary-200">Test It in Your Classroom.</span>
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Use SmartRoll in a real classroom before making a decision. No need to immediately purchase an entire school deployment.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/30 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur-sm p-4 rounded border border-white/20">
                  <h4 className="font-bold">DAY 1</h4>
                  <p className="text-sm text-primary-100">We install and configure one SmartRoll device.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur-sm p-4 rounded border border-white/20">
                  <h4 className="font-bold">DAYS 2–14</h4>
                  <p className="text-sm text-primary-100">Students and teachers use it in a real classroom.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur-sm p-4 rounded border border-white/20">
                  <h4 className="font-bold">DAY 15</h4>
                  <p className="text-sm text-primary-100">Review results and decide if SmartRoll is right for you.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 border border-white/20 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Try One Device. One Classroom. 15 Days.</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Speed', 'Reliability', 'Teacher experience', 'Student experience', 'Dashboard', 'Attendance accuracy'].map((t,i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-300">✓</span> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Book Your 15-Day Trial</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-medium text-slate-500 mb-1">School Name</label><input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Contact Person</label><input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Phone Number</label><input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Email Address</label><input type="email" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
              </div>
              <div><label className="block text-xs font-medium text-slate-500 mb-1">City</label><input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Number of Students</label><input type="number" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Number of Classes</label><input type="number" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
              </div>
              <div><label className="block text-xs font-medium text-slate-500 mb-1">Preferred Demo Date</label><input type="date" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
              
              <button type="button" className="w-full mt-6 bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition shadow-lg shadow-primary-500/30">
                Request My Trial
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trial;
`,
    'ComingSoon.jsx': `
import React from 'react';
import { MapPin } from 'lucide-react';

const ComingSoon = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="comingsoon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span> Launching Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Coming Soon to Aligarh
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We are preparing for our first SmartRoll classroom trials.
            </p>
            
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pilot & Demo Program</h3>
              <p className="text-primary-600 font-semibold mb-4">Starting January</p>
              <p className="text-slate-600 mb-4">Schools in Aligarh will be among the first to experience SmartRoll.</p>
              <div className="inline-block bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded">
                LIMITED EARLY PILOT SLOTS
              </div>
            </div>

            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition">
              Join the Early Access List
            </button>
          </div>

          <div className="relative h-[400px] bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-200">
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, slate 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4 relative shadow-xl">
                <div className="absolute inset-0 rounded-full border-4 border-primary-500 opacity-50 animate-ping"></div>
                <MapPin size={40} className="text-primary-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Aligarh</h3>
              <p className="text-slate-500 font-medium">Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
`,
    'Benefits.jsx': `
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
              <div className={\`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br \${b.color} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform\`}></div>
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
`,
    'Security.jsx': `
import React from 'react';
import { ShieldCheck, Lock, Database, WifiOff, Users, Server } from 'lucide-react';

const Security = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Designed for Reliable and Secure Attendance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {[
            { t: 'Secure device communication', i: <Lock /> },
            { t: 'Controlled dashboard access', i: <ShieldCheck /> },
            { t: 'Role-based access', i: <Users /> },
            { t: 'Data backup', i: <Database /> },
            { t: 'Offline attendance storage', i: <WifiOff /> },
            { t: 'Automatic synchronization', i: <Server /> },
            { t: 'Device authentication', i: <Lock /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-primary-400 mb-4">{item.i}</div>
              <p className="text-sm font-medium text-slate-300">{item.t}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl max-w-4xl mx-auto text-center text-sm text-slate-400">
          <strong>Note:</strong> SmartRoll is designed with privacy and responsible data management in mind. Biometric data handling and deployment practices should follow applicable institutional and legal requirements.
        </div>
      </div>
    </section>
  );
};

export default Security;
`,
    'FAQ.jsx': `
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: 'How does SmartRoll work?', a: 'The portable device is passed between students and attendance is recorded using fingerprint verification while the teacher continues teaching.' },
    { q: 'Does the teacher need to take attendance?', a: 'No. The teacher only starts the process and can continue teaching.' },
    { q: 'What happens if the internet stops working?', a: 'Attendance is stored locally and synchronized when connectivity is restored.' },
    { q: 'Can we test SmartRoll before purchasing?', a: 'Yes. Schools can apply for the 15-day classroom trial.' },
    { q: 'How many devices does a school need?', a: 'The number depends on the school\\'s classrooms, sections and timetable. SmartRoll can help determine the appropriate deployment during the demo.' },
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
                <ChevronDown className={\`transform transition-transform \${open === i ? 'rotate-180 text-primary-500' : 'text-slate-400'}\`} />
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
`,
    'FinalCTA.jsx': `
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
`,
    'Contact.jsx': `
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50" id="contactus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's Talk About Your School
            </h2>
            <div className="space-y-4 text-slate-600 text-lg mb-12">
              <p>✓ Interested in a demo?</p>
              <p>✓ Want to become an early pilot school?</p>
              <p>✓ Have questions about SmartRoll?</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600"><Phone /></div>
                <div><p className="font-bold text-slate-900">Phone</p><p>+91 1234567890</p></div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-500"><MessageCircle /></div>
                <div><p className="font-bold text-slate-900">WhatsApp</p><p>+91 1234567890</p></div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600"><Mail /></div>
                <div><p className="font-bold text-slate-900">Email</p><p>hello@smartroll.in</p></div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600"><MapPin /></div>
                <div><p className="font-bold text-slate-900">Location</p><p>Aligarh, Uttar Pradesh, India</p></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">School Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows="4" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"></textarea>
              </div>
              <button type="button" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
`,
    'Footer.jsx': `
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div className="col-span-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300 mb-4 block">
              SMARTROLL
            </span>
            <p className="text-lg text-slate-300 font-medium max-w-sm mb-6">
              Attendance Happens. Teaching Continues.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition">In</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition">Ig</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition">Yt</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'How It Works', 'Features', 'Dashboard', 'Pricing', '15-Day Trial', 'Coming Soon', 'Contact'].map(l => (
                <li key={l}><a href={\`#\${l.replace(/\\s+/g, '').toLowerCase()}\`} className="hover:text-primary-400 transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Data & Security', 'Support'].map(l => (
                <li key={l}><a href="#" className="hover:text-primary-400 transition">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-sm">
          © 2026 SmartRoll. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`
};

for (const [filename, content] of Object.entries(components)) {
    fs.writeFileSync(path.join(componentsDir, filename), content.trim());
}
console.log('Components generated successfully.');
