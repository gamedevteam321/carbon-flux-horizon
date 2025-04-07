
import {
  Layers, Filter, Thermometer, MapPin, Users,
  Battery, Shield, LineChart, FileCheck
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechFeature = ({ icon, title, description }: TechFeatureProps) => {
  return (
    <Card className="bg-secondary border-border hover:border-primary transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-montserrat font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const OurTechnology = () => {
  const features = [
    {
      icon: <Layers size={24} />,
      title: "Modular & Scalable",
      description: "Easily scale up or down based on biomass availability and project requirements."
    },
    {
      icon: <Filter size={24} />,
      title: "Biomass Agnostic",
      description: "Process various types of organic material for maximum versatility."
    },
    {
      icon: <Thermometer size={24} />,
      title: "High Temperature with Precision Control",
      description: "Achieve optimal pyrolysis conditions for different feedstocks."
    },
    {
      icon: <MapPin size={24} />,
      title: "Hyperlocal Implementation",
      description: "Deploy units directly where biomass is available to minimize transportation."
    },
    {
      icon: <Users size={24} />,
      title: "Low Skill Requirement",
      description: "Designed for ease of operation in various global contexts."
    },
    {
      icon: <Battery size={24} />,
      title: "Low Energy Consumption",
      description: "Energy-efficient design that minimizes operational costs."
    },
    {
      icon: <Shield size={24} />,
      title: "Emissions Control",
      description: "Advanced systems to ensure clean operation with minimal environmental impact."
    },
    {
      icon: <LineChart size={24} />,
      title: "Transparent Monitoring",
      description: "Real-time data collection for process optimization and verification."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Trusted Verification Process",
      description: "Rigorous standards ensuring accountability and quality assurance."
    }
  ];

  return (
    <section id="technology" className="bg-background text-foreground py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">OUR TECHNOLOGY</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our processing technology is scalable, efficient & robust
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <TechFeature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechnology;
