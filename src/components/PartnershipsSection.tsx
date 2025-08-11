import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PartnershipsSection = () => {
  const partnerships = [
    {
      name: "NIDHI PRAYAS",
      type: "Government Initiative",
      description: "Supporting early-stage technology development"
    },
    {
      name: "ICreate Ahmedabad",
      type: "Innovation Hub",
      description: "Technology incubation and mentorship"
    },
    {
      name: "Kerala Startup Mission",
      type: "State Initiative",
      description: "Pilot project validation and deployment support"
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partnerships & <span className="text-primary">Associations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building strong relationships with leading organizations to accelerate innovation
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerships.map((partner, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <Badge variant="outline" className="mb-4">
                  {partner.type}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;