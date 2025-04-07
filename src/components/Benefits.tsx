
import { 
  Leaf, Recycle, Sprout, Droplet, Wind, Thermometer, 
  Sun, Shield, Globe, 
} from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  label: string;
}

const Benefit = ({ icon, label }: BenefitProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-secondary rounded-full">
        {icon}
      </div>
      <span className="font-montserrat uppercase tracking-wide text-sm">{label}</span>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: <Leaf size={28} />, label: "Sustainable" },
    { icon: <Recycle size={28} />, label: "Circular" },
    { icon: <Sprout size={28} />, label: "Regenerative" },
    { icon: <Droplet size={28} />, label: "Pure" },
    { icon: <Wind size={28} />, label: "Clean" },
    { icon: <Thermometer size={28} />, label: "Efficient" },
    { icon: <Sun size={28} />, label: "Renewable" },
    { icon: <Shield size={28} />, label: "Secure" },
    { icon: <Globe size={28} />, label: "Global" },
  ];

  return (
    <section className="bg-background py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-9 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
