import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Quote {
  text: string;
  author: string;
  role: string;
}

const quotes: Quote[] = [
  {
    text: "Biochar represents a significant step forward in our fight against climate change. Its potential for carbon sequestration is remarkable.",
    author: "Dr. Sarah Chen",
    role: "Climate Scientist"
  },
  {
    text: "The decentralized approach to biochar production not only helps the environment but also creates sustainable rural employment.",
    author: "Michael Rodriguez",
    role: "Environmental Economist"
  },
  {
    text: "By converting agricultural waste into biochar, we're not just reducing emissions - we're improving soil health for generations to come.",
    author: "Dr. James Wilson",
    role: "Agricultural Researcher"
  }
];

const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = quotes.length - 1;
      if (nextIndex >= quotes.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1);
      setTouchStart(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black/20 py-20">
      <div className="container mx-auto px-4">
        <div 
          className="relative h-[300px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-3xl text-center"
            >
              <blockquote className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-200 italic">
                  "{quotes[currentIndex].text}"
                </p>
                <footer className="space-y-2">
                  <cite className="text-xl font-semibold text-white not-italic">
                    {quotes[currentIndex].author}
                  </cite>
                  <p className="text-gray-400">{quotes[currentIndex].role}</p>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute top-1/2 left-4 -translate-y-1/2 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
        </div>

        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
