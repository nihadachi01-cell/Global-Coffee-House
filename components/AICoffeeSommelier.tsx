import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Coffee, Loader2 } from 'lucide-react';
import { generateCoffeeRecommendation } from '../services/geminiService';

const AICoffeeSommelier: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Welcome to Global Coffee House. I am your AI Sommelier. Tell me what flavors you enjoy, and I'll find your perfect cup." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    // Format history for the service
    const chatHistory = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await generateCoffeeRecommendation(userMsg, chatHistory);

    setMessages(prev => [...prev, { role: 'model', text: response || "I'm having trouble connecting to the coffee database." }]);
    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 bg-stone-800 hover:bg-gold-600 text-gold-500 hover:text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gold-500/30"
          >
            <Coffee className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium text-sm">
              Ask AI Sommelier
            </span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col max-h-[600px] overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-4 bg-stone-800 border-b border-stone-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold-600 flex items-center justify-center text-white">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-100">AI Sommelier</h3>
                <p className="text-xs text-gold-500">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-900/95" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gold-600 text-white rounded-br-none' 
                    : 'bg-stone-800 text-stone-200 border border-stone-700 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 rounded-2xl rounded-bl-none px-4 py-3 border border-stone-700">
                  <Loader2 className="w-4 h-4 animate-spin text-gold-500" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-stone-800 border-t border-stone-700">
            <div className="flex items-center gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Suggest a smooth coffee..."
                className="w-full bg-stone-900 border border-stone-700 rounded-full py-2.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-1.5 p-1.5 bg-gold-600 hover:bg-gold-500 rounded-full text-white disabled:opacity-50 disabled:bg-stone-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AICoffeeSommelier;