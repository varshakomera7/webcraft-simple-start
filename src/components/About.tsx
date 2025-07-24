import { CheckCircle, Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Our Company
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to helping businesses 
            thrive in the digital age through innovative solutions and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Driving Innovation Since 2015
            </h3>
            <p className="text-muted-foreground">
              With over 8 years of experience in the industry, we've helped companies of all sizes 
              transform their operations, streamline processes, and achieve sustainable growth through 
              technology-driven solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                  <p className="text-muted-foreground">Successfully delivered 500+ projects across various industries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Expert Team</h4>
                  <p className="text-muted-foreground">Certified professionals with deep industry expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Client-Focused</h4>
                  <p className="text-muted-foreground">Tailored solutions that align with your business goals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">50+</h4>
                <p className="text-muted-foreground">Team Members</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">200+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 col-span-2">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Innovation First</h4>
                <p className="text-muted-foreground">Always staying ahead with cutting-edge technology</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;