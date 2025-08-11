import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Building Facade Cleaning",
      icon: "🏢",
      features: [
        {
          name: "Precision Cleaning",
          description: "Drones are equipped with pressure nozzles and stabilized arms to clean glass, concrete, and metal exteriors. They operate at heights without scaffolding or cranes."
        },
        {
          name: "Autonomous Navigation",
          description: "The system adjusts its flight to match building edges and curvature, ensuring uniform coverage across windows, grooves, and ledges."
        },
        {
          name: "Performance Tracking",
          description: "Coverage maps and resource usage are tracked in real time to support audit and scheduling needs for facility managers."
        }
      ]
    },
    {
      title: "Wind Turbine Maintenance",
      icon: "💨",
      features: [
        {
          name: "Blade Cleaning",
          description: "Drone mounted tools remove dust, dirt, and salt residue from turbine blades to restore aerodynamic efficiency and prevent wear."
        },
        {
          name: "Surface Mapping",
          description: "Integrated visual sensors help scan blade surfaces before and after cleaning to detect possible early stage damage."
        },
        {
          name: "Fast Turnaround",
          description: "Cleaning is completed in short windows, minimizing turbine downtime and improving energy yield over time."
        }
      ]
    },
    {
      title: "Ship Hull & Superstructure Cleaning",
      icon: "🚢",
      features: [
        {
          name: "Waterline Cleaning",
          description: "Drones target salt deposits and pollutants on hull surfaces and ship towers while docked, removing the need for scaffolding or cranes."
        },
        {
          name: "Corrosion Prevention",
          description: "Regular drone cleaning helps reduce surface rust and extend the life of exposed marine structures."
        },
        {
          name: "Visual Inspection",
          description: "Each cleaning is logged with visual data that can support maintenance records and regulatory audits."
        }
      ]
    },
    {
      title: "Solar Panel Cleaning",
      icon: "☀️",
      features: [
        {
          name: "Water Efficient Spray",
          description: "Drones apply fine water mist or soft jets to remove surface dust without scratching or damaging the panels."
        },
        {
          name: "Thermal Spot Detection",
          description: "Cameras can detect abnormal heating or underperforming panel sections before and after cleaning."
        },
        {
          name: "Energy Optimization",
          description: "Routine aerial cleaning helps maintain maximum panel output, especially in dusty, arid, or coastal locations."
        }
      ]
    },
    {
      title: "Firefighting Support",
      icon: "🚒",
      features: [
        {
          name: "Targeted Water or Foam Discharge",
          description: "Drones can be equipped with fire retardant dispensers to reach areas inaccessible to ground crews, such as upper floors or narrow alleyways during urban fires."
        },
        {
          name: "Thermal Imaging and Visibility Support",
          description: "Onboard thermal cameras provide responders with real time visuals to locate hotspots and trapped individuals in smoke dense zones."
        },
        {
          name: "Reduced Response Time",
          description: "Drones enable rapid deployment and immediate situational awareness before larger teams arrive, improving the efficiency of firefighting operations."
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized drone solutions for diverse maintenance and cleaning challenges
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="space-y-3">
                        <Badge variant="secondary" className="text-sm font-semibold">
                          {feature.name}
                        </Badge>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;