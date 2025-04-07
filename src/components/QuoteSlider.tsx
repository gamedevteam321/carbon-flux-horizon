
import { useState, useEffect } from 'react';

const QuoteSlider = () => {
  const quotes = [
    "The world needs to remove 10 billion tonnes of CO₂ every year to avoid irreversible climate change.",
    "Biochar in the tropics can achieve at least 20% of this."
  ];
  
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 7000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="bg-primary text-primary-foreground py-32 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative h-32">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                index === currentQuote 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
            >
              <p className="text-2xl md:text-3xl font-montserrat font-medium text-center max-w-4xl">
                "{quote}"
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentQuote ? 'bg-primary-foreground' : 'bg-primary-foreground/30'
              }`}
              onClick={() => setCurrentQuote(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;
