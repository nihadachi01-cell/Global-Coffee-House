import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-stone-950 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-stone-400">Have a question about brewing? Want to partner with us? We'd love to hear from you.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-stone-800 p-3 rounded-full text-gold-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 uppercase font-bold">Email</p>
                    <p className="text-white">support@globalcoffee.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-stone-800 p-3 rounded-full text-gold-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 uppercase font-bold">Phone</p>
                    <p className="text-white">+1 (555) 000-COFFEE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-stone-800 p-3 rounded-full text-gold-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 uppercase font-bold">HQ</p>
                    <p className="text-white">123 Roast Ave, Coffee District<br/>Seattle, WA 98101</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 rounded-2xl p-8 text-center border border-gold-500/20">
               <h4 className="font-bold text-white text-lg mb-2">Need Instant Help?</h4>
               <p className="text-stone-400 text-sm mb-4">Chat with our AI Sommelier or support team.</p>
               <button className="bg-green-600 hover:bg-green-500 text-white w-full py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                 WhatsApp Support
               </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 bg-stone-900 p-8 md:p-12 rounded-2xl border border-stone-800 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-stone-400 font-bold">First Name</label>
                  <input type="text" className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-stone-400 font-bold">Last Name</label>
                  <input type="text" className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-stone-400 font-bold">Email</label>
                <input type="email" className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-400 font-bold">Message</label>
                <textarea rows={5} className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:translate-x-1">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;