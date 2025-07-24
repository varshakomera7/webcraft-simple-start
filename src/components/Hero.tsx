import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Innovate Your 
                <span className="text-primary"> Business</span>
                <br />
                With Our Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                We help companies transform their digital presence with cutting-edge technology 
                and strategic consulting to drive growth and efficiency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-elegant"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-glow">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-background/10 backdrop-blur-sm rounded-xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-semibold mb-4">Ready to Transform?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Join hundreds of companies that trust us to deliver exceptional results 
                  and drive their digital transformation forward.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></div>
                    Expert consultation and strategy
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></div>
                    Scalable technology solutions
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></div>
                    Ongoing support and maintenance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;