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