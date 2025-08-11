import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Safety",
      description: "We design our systems to remove the need for risky human operations in elevated environments.",
      icon: "🛡️"
    },
    {
      title: "Practical Innovation",
      description: "We focus on solving specific field level problems through grounded engineering and system design.",
      icon: "🔧"
    },
    {
      title: "Sustainability",
      description: "We use water efficient cleaning mechanisms and aim to reduce chemical usage wherever possible.",
      icon: "🌱"
    },
    {
      title: "Transparency",
      description: "We prioritize clear communication and data backed performance during every engagement.",
      icon: "📊"
    },
    {
      title: "Precision",
      description: "We choose to build narrow and deep, tailoring our drones for specific maintenance use cases that benefit the most from aerial systems.",
      icon: "🎯"
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
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Zerowings Aerospace is a drone technology company solving real world problems in vertical infrastructure and renewable maintenance. We are building autonomous aerial systems designed to improve safety, efficiency, and sustainability in cleaning applications.
            </p>
            <p>
              The idea for Zerowings began in early 2025 when we identified the recurring risks and inefficiencies involved in cleaning tall structures and renewable assets. Manual cleaning methods are slow and hazardous. With drones, we offer a smarter and safer alternative that reduces human risk and improves consistency.
            </p>
            <p>
              We are currently focused on product development, pilot deployments, and early partnerships across cities in India. Our systems are tailored for building exteriors, wind turbines, solar panels, and ship superstructures.
            </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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