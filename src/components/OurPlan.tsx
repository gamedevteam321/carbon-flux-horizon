import { motion } from 'framer-motion';
import { CO2Icon, ResidueIcon, BiocharIcon, FacilityIcon, JobsIcon, LeafIcon } from './icons/PlanIcons';

const OurPlan = () => {
  const stats = [
    {
      icon: <CO2Icon />,
      value: "1,650,000",
      label: "tons/year of CO2",
      sublabel: "to be removed"
    },
    {
      icon: <ResidueIcon />,
      value: "3,000,000",
      label: "tons/year of residue",
      sublabel: "to be removed"
    },
    {
      icon: <BiocharIcon />,
      value: "750,000",
      label: "Tons/Year of Biochar",
      sublabel: "to be produced"
    },
    {
      icon: <FacilityIcon />,
      value: "1000",
      label: "Production facilities",
      sublabel: "projected (Decentralized)"
    },
    {
      icon: <JobsIcon />,
      value: "10,000+",
      label: "Rural Jobs Created"
    },
    {
      icon: <LeafIcon />,
      value: "The Largest",
      label: "Decentralized Carbon",
      sublabel: "Project in the World"
    }
  ];

  return (
    <section className="bg-[#020817] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="text-white w-24 h-24">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
                {stat.sublabel && (
                  <p className="text-lg text-gray-400">{stat.sublabel}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlan;
