import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const Trial = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    students: '',
    classes: '',
    demoDate: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const payload = {
      ...formData,
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
      subject: "New 15-Day Trial Request"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ schoolName: '', contactPerson: '', phone: '', email: '', city: '', students: '', classes: '', demoDate: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

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
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
                <p className="text-slate-600">Our team will contact you to schedule the demo.</p>
                <button onClick={() => setStatus('')} className="mt-6 text-primary-600 font-medium">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">School Name</label><input required name="schoolName" value={formData.schoolName} onChange={handleChange} type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Contact Person</label><input required name="contactPerson" value={formData.contactPerson} onChange={handleChange} type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Phone Number</label><input required name="phone" value={formData.phone} onChange={handleChange} type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Email Address</label><input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                </div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1">City</label><input required name="city" value={formData.city} onChange={handleChange} type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Number of Students</label><input name="students" value={formData.students} onChange={handleChange} type="number" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Number of Classes</label><input name="classes" value={formData.classes} onChange={handleChange} type="number" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                </div>
                <div><label className="block text-xs font-medium text-slate-500 mb-1">Preferred Demo Date</label><input name="demoDate" value={formData.demoDate} onChange={handleChange} type="date" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-slate-50"/></div>
                
                {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
                
                <button disabled={status === 'submitting'} type="submit" className="w-full mt-6 bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition shadow-lg shadow-primary-500/30 flex items-center justify-center disabled:opacity-70">
                  {status === 'submitting' ? <><Loader2 className="animate-spin mr-2" /> Requesting...</> : 'Request My Trial'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trial;