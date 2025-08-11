import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world validation of our drone cleaning solutions
          </p>
        </div>

        <div className="space-y-12">
          {/* Kerala Startup Mission Pilot */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">Pilot Project Validation</Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">Kerala Startup Mission</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  <strong>Date:</strong> May 11, 2025 | <strong>Location:</strong> Kerala Startup Mission Digital Hub
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Project Overview</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Zerowings successfully executed a live pilot of its semi autonomous high rise cleaning drone at the Kerala Startup Mission Digital Hub. The objective was to validate system performance, safety, and cleaning efficiency in a dense urban environment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Within one hour including setup, the drone cleaned four thousand square feet of glass facade using a combination of heated deionized water and eco friendly biodegradable foam.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Key Results</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Zero human intervention at height with remote control mode</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Autonomous stabilization and targeted nozzle control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Demonstrated technical readiness under real world conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Confirmed precision navigation of complex facades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Showcased sustainability, speed, and operational ease</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <p className="text-foreground font-medium">
                  "The results showcased the product's sustainability, speed, and operational ease, positioning Zerowings as a viable alternative to traditional facade cleaning solutions. Feedback from the facility management team reaffirmed its potential as a game changing solution in urban maintenance and infrastructure care."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ship Fire Case Study Placeholder */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">Emergency Response</Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">Ship Fire Response - Kerala</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Emergency deployment for firefighting support operations
                </p>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg text-center">
                <p className="text-muted-foreground text-lg">
                  Case study details coming soon. This project demonstrates our rapid response capabilities and specialized firefighting support systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;