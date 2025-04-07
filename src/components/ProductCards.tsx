
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ title, imageUrl }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl"
    >
      <AspectRatio ratio={1/1} className="bg-black">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="font-montserrat font-bold text-4xl md:text-5xl text-white uppercase tracking-wider">
            {title}
          </h3>
        </div>
      </AspectRatio>
    </motion.div>
  );
};

const ProductCards = () => {
  const products = [
    {
      title: "Biochar",
      description: "Carbon-rich material made from biomass that improves soil health and sequesters carbon.",
      imageUrl: "https://images.unsplash.com/photo-1638367709763-2655b7e97019?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Biocoal",
      description: "Alternative to fossil fuels created from organic matter for sustainable energy production.",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450e7978afad?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Wood Vinegar",
      description: "Natural byproduct of pyrolysis used in agriculture as a biopesticide and growth enhancer.",
      imageUrl: "https://images.unsplash.com/photo-1635397156160-ef08d893e679?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="our-biocarbon" className="bg-black text-white py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-left mb-16">
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl mb-3 text-white/90">Our Biocarbons</h2>
          <p className="text-white/80 text-xl md:text-2xl max-w-3xl">
            Pioneering next generation carbon solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
