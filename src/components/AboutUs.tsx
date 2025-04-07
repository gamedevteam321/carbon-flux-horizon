
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Avatar className="w-28 h-28 mb-4 border-2 border-sidebar-primary">
        <AvatarImage src={image} alt={name} className="grayscale" />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <h4 className="font-montserrat font-semibold text-lg">{name}</h4>
      <p className="text-muted-foreground text-sm">{role}</p>
    </div>
  );
};

const AboutUs = () => {
  const team = [
    {
      name: "Arjun Dhawan",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Emma Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Lead Scientist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about-us" className="bg-secondary text-foreground py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-2">THE TIME IS NOW</h2>
          <h3 className="font-montserrat text-xl mb-8">ABOUT US</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We are a carbon project developer leveraging proprietary modular pyrolysis technology to 
            convert agricultural and forestry waste into biochar, addressing waste management challenges 
            while creating a product with substantial agricultural benefits and carbon removal potential.
          </p>
        </div>
        
        <div className="mb-24">
          <h3 className="font-montserrat font-semibold text-2xl mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-montserrat italic mb-6">
            "Biochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar"
          </blockquote>
          <cite className="text-muted-foreground">— Arjun Dhawan, Co-Founder, Nexchar</cite>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
