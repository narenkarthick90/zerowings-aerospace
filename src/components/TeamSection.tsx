import { Card, CardContent } from "@/components/ui/card";
import { Users, Microscope, Target, Shield } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Building the future of autonomous aerial maintenance systems
          </p>
        </div>

        <Card className="bg-card border-border max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-6">Student-Founded Innovation</h3>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Zerowings is a student founded venture with core members from <strong className="text-foreground">NIT Trichy</strong>. Our team works at the intersection of robotics, electronics, and sustainable design.
                </p>
                <p>
                  We are supported by technical mentors and early advisors from academia and drone innovation ecosystems.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <Microscope className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Field Learning</h4>
                  <p className="text-sm text-muted-foreground">Learning from real-world applications</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Purpose-Built</h4>
                  <p className="text-sm text-muted-foreground">Building only what is needed</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Safety First</h4>
                  <p className="text-sm text-muted-foreground">Making safety a first principle</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;