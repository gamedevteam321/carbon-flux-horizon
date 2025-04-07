
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const OurPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const plans = [
    {
      title: "Research & Development",
      description: "Continuous innovation in pyrolysis technology to maximize efficiency and carbon sequestration.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Scaling Production",
      description: "Expanding our modular technology to process more biomass and create more biochar.",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Global Deployment",
      description: "Implementing our technology in regions with high biomass availability and carbon removal potential.",
      image: "https://images.unsplash.com/photo-1527380992061-b126c88cbb41?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Carbon Credits",
      description: "Generating verified carbon removal credits to fund sustainable development.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  return (
    <section className="bg-background text-foreground py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl">OUR PLAN</h2>
        </div>
        
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {plans.map((plan, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="font-montserrat text-2xl mb-4">{plan.title}</h3>
                      <p className="text-muted-foreground mb-6">{plan.description}</p>
                      <div className="flex items-center space-x-2">
                        {plans.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                              idx === currentSlide ? 'bg-sidebar-primary' : 'bg-muted'
                            }`}
                            onClick={() => setCurrentSlide(idx)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={plan.image} 
                          alt={plan.title} 
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-background/50 border-sidebar-primary text-sidebar-primary rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-background/50 border-sidebar-primary text-sidebar-primary rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurPlan;
