
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ title, description, imageUrl }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group bg-transparent border border-border hover:border-primary transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-montserrat font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
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
    },
    {
      title: "Bio Tar",
      description: "High-value organic compound used in industrial processes and production of sustainable chemicals.",
      imageUrl: "https://images.unsplash.com/photo-1518623001779-bdda3bf225e6?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="our-biocarbon" className="bg-background text-foreground py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">OUR BIOCARBON</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We transform organic residues to sustainable products
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
