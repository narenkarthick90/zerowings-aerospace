import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, GraduationCap, Users, Lightbulb, CheckCircle } from "lucide-react";
import facilityImage from "@/assets/facility.jpg";
import teamImage from "@/assets/team.jpg";

const ExcellenceCenter = () => {
  const features = [
    {
      title: "Drone Showcase",
      description: "See cutting‑edge drones in action, explore their design, and discover real‑world applications across industries.",
      icon: Eye
    },
    {
      title: "Workshops & Training",
      description: "Hands‑on programs in assembly, programming, flying, and maintenance — building skills for the growing UAV sector.",
      icon: GraduationCap
    },
    {
      title: "Innovation Zone",
      description: "Collaborate on new ideas, test emerging tech, and tackle real aerospace challenges.",
      icon: Lightbulb
    }
  ];

  return (
    <section id="excellence" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Centre of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier hub for learning and innovation in drones and aerospace, connecting students, enthusiasts, and technicians with leading technology and expert mentorship.
          </p>
        </div>

        <div className="grid gap-8 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <feature.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Expert Team
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our multidisciplinary team combines aerospace engineering expertise with 
              advanced drone technology. Every team member is certified to the highest 
              industry standards and committed to delivering exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Aerospace Engineering Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Certified Drone Operators</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Quality Assurance Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Safety Protocol Specialists</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Meet Our Team
            </Button>
          </div>
          <div>
            <img 
              src={teamImage} 
              alt="Zerowings Expert Team" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceCenter;