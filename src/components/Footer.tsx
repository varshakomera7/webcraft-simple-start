import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-glow">CompanyName</h3>
            <p className="text-background/80">
              Transforming businesses through innovative technology solutions and expert consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>Data Analytics</li>
              <li>Cybersecurity</li>
              <li>Technical Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background">Contact Info</h4>
            <div className="space-y-2 text-background/80">
              <p>123 Business Ave, Suite 100</p>
              <p>City, State 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@company.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 CompanyName. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;