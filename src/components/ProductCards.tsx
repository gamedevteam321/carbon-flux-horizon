import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';

interface ProductCardProps {
  title: string;
  imageUrl: string;
}

const ProductCard = ({ title, imageUrl }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/50"
    >
      <AspectRatio ratio={1/1} className="bg-black">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="font-montserrat font-bold text-xl md:text-2xl text-white uppercase tracking-wider text-center">
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
      imageUrl: "src/assets/biochar.png"
    },
    {
      title: "Biocoal",
      imageUrl: "src/assets/biocoal.png"
    },
    {
      title: "Wood Vinegar",
      imageUrl: "src/assets/woodvinegar.png"
    }
  ];

  return (
    <section id="our-biocarbon" className="bg-black text-white py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-left mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-3 text-white/90">Our Biocarbons</h2>
          <p className="text-white/60 text-xl md:text-1xl max-w-2xl">
          We transform organic residues to sustainable products
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
