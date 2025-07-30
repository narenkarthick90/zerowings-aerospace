import { Card, CardContent } from "@/components/ui/card";

const CleaningProcess = () => {
  const steps = [
    {
      title: "Assessment & Planning",
      description: "Our advanced drones conduct comprehensive 3D mapping and surface analysis to create a precise cleaning strategy tailored to your specific aerospace equipment.",
      icon: "🔍",
      details: ["3D Surface Mapping", "Contamination Analysis", "Custom Protocol Design"]
    },
    {
      title: "Precision Cleaning",
      description: "State-of-the-art drone technology equipped with specialized cleaning systems removes contaminants with unmatched precision and safety.",
      icon: "🚁",
      details: ["Automated Cleaning Systems", "Real-time Monitoring", "Zero Contact Damage"]
    },
    {
      title: "Quality Assurance",
      description: "Multi-stage verification ensures every surface meets aerospace industry standards through detailed inspection and certification protocols.",
      icon: "✅",
      details: ["Quality Verification", "Compliance Certification", "Performance Reports"]
    }
  ];

  return (
    <section id="cleaning-process" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We <span className="text-primary">Clean</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our three-step process ensures perfect results every time
          </p>
        </div>


        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary transition-colors duration-300"
            >
              <CardContent className="p-8">
                <div className="text-6xl mb-6 text-center">{step.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-foreground">
                      <span className="text-primary mr-3">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;