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
              {['Home', 'How It Works', 'Features', 'Dashboard', '15-Day Trial', 'Coming Soon', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.replace(/\s+/g, '').toLowerCase()}`} className="hover:text-primary-400 transition">{l}</a></li>
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