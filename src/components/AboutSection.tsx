import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wrench, Leaf, BarChart3, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      title: "Safety",
      description: "We design our systems to remove the need for risky human operations in elevated environments.",
      icon: Shield
    },
    {
      title: "Practical Innovation",
      description: "We focus on solving specific field level problems through grounded engineering and system design.",
      icon: Wrench
    },
    {
      title: "Sustainability",
      description: "We use water efficient cleaning mechanisms and aim to reduce chemical usage wherever possible.",
      icon: Leaf
    },
    {
      title: "Transparency",
      description: "We prioritize clear communication and data backed performance during every engagement.",
      icon: BarChart3
    },
    {
      title: "Precision",
      description: "We choose to build narrow and deep, tailoring our drones for specific maintenance use cases that benefit the most from aerial systems.",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Zerowings Aerospace</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We develop autonomous drone systems that revolutionize vertical infrastructure maintenance, 
              making cleaning safer, more efficient, and environmentally sustainable.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2025</div>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4+</div>
                <p className="text-sm text-muted-foreground">Target Industries</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Safety Focused</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide safe, efficient and environmentally responsible aerial cleaning solutions using autonomous drone systems for urban and renewable infrastructure.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a trusted provider of drone powered maintenance systems that redefine how vertical cleaning is approached worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                  <h4 className="text-lg font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-foreground mb-6">What We Do</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Zerowings Aerospace develops specialized drone systems engineered for the cleaning and maintenance of elevated and complex structures. Our platforms integrate modular cleaning tools, autonomous navigation algorithms, and real time monitoring capabilities. By replacing conventional access methods, we help infrastructure owners and operators enhance operational safety, reduce downtime, and streamline maintenance workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;