import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('our-biocarbon');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video 
          className="w-full h-full object-cover min-w-full min-h-full scale-110" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src="/Biochar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-montserrat font-semibold leading-tight mb-6 animate-fade-in">
            Scalable Carbon Solutions for a Sustainable Future
          </h1>
          <h3 className="text-xl md:text-2xl text-white/90 font-light mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Waste to Carbon to Soil to Lives.
          </h3>
          <Button 
            className="bg-sidebar-primary text-white hover:bg-sidebar-primary/80 rounded-none px-8 py-6 text-lg animate-fade-in"
            style={{ animationDelay: '0.6s' }}
            onClick={() => scrollToNext()}
          >
            Learn more
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={() => scrollToNext()}
          className="text-white focus:outline-none"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
