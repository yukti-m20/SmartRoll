import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Web3Forms logic
    const payload = {
      ...formData,
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your access key from web3forms.com
      subject: "New SmartRoll Enquiry"
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
        setFormData({ name: '', schoolName: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

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
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">We will get back to you shortly.</p>
                <button onClick={() => setStatus('')} className="mt-6 text-primary-600 font-medium">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">School Name</label>
                  <input required name="schoolName" value={formData.schoolName} onChange={handleChange} type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"></textarea>
                </div>
                {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
                <button disabled={status === 'submitting'} type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition flex items-center justify-center disabled:opacity-70">
                  {status === 'submitting' ? <><Loader2 className="animate-spin mr-2" /> Sending...</> : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;