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
                    <div className={`w-10 h-10 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
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
                        whileInView={{ height: `${h}%` }}
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
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${cls.a}%` }}></div>
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