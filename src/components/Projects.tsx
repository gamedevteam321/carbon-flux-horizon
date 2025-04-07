
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section id="carbon-removal" className="bg-secondary text-foreground py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              OUR PROJECTS CREATE CARBON REMOVAL CREDITS
            </h2>
            <p className="text-foreground mb-8">
              We develop and operate large-scale carbon removal projects across the globe, 
              focusing on regions with high biomass availability and carbon sequestration potential. 
              Our projects generate verified carbon removal credits that help finance sustainable 
              development and climate action.
            </p>
            <Button className="bg-sidebar-primary text-primary-foreground hover:bg-sidebar-primary/80 rounded-none px-8 py-6">
              View Projects
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-background overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?q=80&w=800&auto=format&fit=crop" 
                alt="Carbon removal project" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 h-24 bg-background border border-border flex items-center justify-center">
              <p className="text-xl font-montserrat">
                <span className="text-4xl font-bold text-sidebar-primary">1M+</span> <span className="text-primary">tons of CO₂ removed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
