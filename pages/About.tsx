import React from 'react';
import { Users, Globe, Sprout } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-stone-950 animate-in fade-in duration-500">
      
      {/* Hero Header */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Our Journey</h1>
        <p className="text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
          From the misty highlands of Ethiopia to the volcanic soils of Guatemala, 
          we travel the globe to find the perfect bean.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        
        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1511537632536-b74c2769399f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Coffee Farm" 
              className="rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-gold-500">Passionate Explorers</h2>
            <p className="text-stone-300 leading-relaxed">
              Global Coffee House began with a simple backpack and a one-way ticket to Colombia. 
              We realized that the best coffee isn't just about the bean—it's about the people, the soil, and the care put into every harvest.
            </p>
            <p className="text-stone-300 leading-relaxed">
              We work directly with small-holder farmers, paying above Fair Trade prices to ensure sustainability and quality. 
              Our mission is to bridge the gap between the remote farm and your morning cup.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-stone-900 p-8 rounded-xl border-t-4 border-gold-600">
            <Sprout className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Ethical Sourcing</h3>
            <p className="text-stone-400">We prioritize environmental stewardship and fair wages for every farmer we partner with.</p>
          </div>
          <div className="bg-stone-900 p-8 rounded-xl border-t-4 border-gold-600">
            <Users className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
            <p className="text-stone-400">Coffee brings people together. We invest a portion of profits back into coffee-growing communities.</p>
          </div>
          <div className="bg-stone-900 p-8 rounded-xl border-t-4 border-gold-600">
            <Globe className="w-10 h-10 text-gold-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Global Flavor</h3>
            <p className="text-stone-400">We celebrate the unique terroir of every region, roasting lightly to preserve authentic characteristics.</p>
          </div>
        </div>

        {/* Team Image */}
        <div className="relative rounded-3xl overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Roasting Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center p-6">
               <h2 className="font-serif text-4xl text-white font-bold mb-4">Crafted with Care</h2>
               <p className="text-stone-200">Every batch is tasted by our certified Q-Graders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;