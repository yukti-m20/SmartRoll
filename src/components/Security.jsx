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