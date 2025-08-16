import { Card, CardContent } from "@/components/ui/card";
import { 
  Gauge, 
  Package, 
  Droplets, 
  Battery, 
  Navigation, 
  Radar, 
  Plane,
  Wind,
  Shield,
  Search,
  AlertTriangle
} from "lucide-react";

const DroneSpecifications = () => {
  const specifications = [
    {
      icon: Gauge,
      title: "Max Height",
      description: "Up to 100 meters",
    },
    {
      icon: Package,
      title: "Payload",
      description: "Up to 17 kg",
    },
    {
      icon: Droplets,
      title: "Water Pressure",
      description: "Up to 4,500 PSI",
    },
    {
      icon: Battery,
      title: "Battery (24 hr ops)",
      description: "4 swappable sets",
    },
    {
      icon: Navigation,
      title: "Autonomous Flight",
      description: "Path planning",
    },
    {
      icon: Radar,
      title: "Obstacle Avoidance",
      description: "Front & rear radar",
    },
    {
      icon: Plane,
      title: "Flight Redundancy",
      description: "Hexacopter configuration",
    },
  ];

  const productSpecs = [
    {
      icon: Wind,
      title: "Wind Resistance",
      description: "up to 12 m/s",
    },
    {
      icon: Droplets,
      title: "Water Pressure",
      description: "up to 4500 PSI",
    },
    {
      icon: Radar,
      title: "Radar Obstacle Avoidance",
      description: "Advanced collision prevention",
    },
    {
      icon: Search,
      title: "Damage Inspection Capabilities",
      description: "Real-time assessment",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Drone <span className="text-primary">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced technical capabilities designed for professional-grade aerial cleaning operations
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <spec.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h4 className="text-lg font-bold text-foreground mb-2">{spec.title}</h4>
                  <p className="text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Product Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {productSpecs.map((spec, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <spec.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                  <h4 className="text-lg font-bold text-foreground mb-2">{spec.title}</h4>
                  <p className="text-muted-foreground text-sm">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Features */}
        <Card className="bg-card border-border max-w-4xl mx-auto mb-12">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">Safety Features</h3>
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-primary mr-4" />
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Emergency Parachute</h4>
                <p className="text-muted-foreground text-lg">
                  Automatically deploys during critical failures to ensure safe landing and protect nearby people and infrastructure
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default DroneSpecifications;