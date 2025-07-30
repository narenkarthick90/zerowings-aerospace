import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import facilityImage from "@/assets/facility.jpg";
import teamImage from "@/assets/team.jpg";

const ExcellenceCenter = () => {
  const features = [
    {
      title: "Advanced Research Lab",
      description: "Cutting-edge facility dedicated to developing next-generation drone cleaning technologies.",
      icon: "🔬"
    },
    {
      title: "Training Academy",
      description: "Comprehensive training programs for aerospace cleaning specialists and drone operators.",
      icon: "🎓"
    },
    {
      title: "Quality Standards",
      description: "Setting industry benchmarks for aerospace cleaning excellence and safety protocols.",
      icon: "⭐"
    },
    {
      title: "Innovation Hub",
      description: "Collaborative space where ideas become breakthrough solutions for aerospace challenges.",
      icon: "💡"
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
            Leading the aerospace cleaning industry through innovation, training, and uncompromising quality standards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src={facilityImage} 
              alt="Zerowings Excellence Center Facility" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                World-Class Facility
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our state-of-the-art Centre of Excellence houses the most advanced drone technology 
                and cleaning systems in the aerospace industry. From research and development to 
                training and certification, every aspect of our operation is designed for excellence.
              </p>
            </div>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">{feature.icon}</span>
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
          </div>
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
                <span className="text-primary">✓</span>
                <span className="text-foreground">Aerospace Engineering Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Certified Drone Operators</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Quality Assurance Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">✓</span>
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