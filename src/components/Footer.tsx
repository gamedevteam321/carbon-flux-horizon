
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground pt-16 pb-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">NexChar</h3>
            <p className="text-muted-foreground mb-6">
              Transforming waste into sustainable carbon solutions for a better planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#product" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#technology" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#carbon-removal" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Carbon Removal
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  123 Carbon Street, Suite 100<br />
                  San Francisco, CA 94111
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">info@nexchar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 NexChar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-sidebar-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-sidebar-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
