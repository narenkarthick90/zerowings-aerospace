import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import meityLogo from "@/assets/logos/meity-logo.png";
import dstLogo from "@/assets/logos/dst-logo.png";
import nidhiPrayasLogo from "@/assets/logos/nidhi-prayas-logo.png";
import makerVillageLogo from "@/assets/logos/maker-village-logo.png";
import ksumLogo from "@/assets/logos/ksum-logo.png";
import startupTnLogo from "@/assets/logos/startup-tn-logo.png";
import dpiitLogo from "@/assets/logos/dpiit-logo.png";
import icreateLogo from "@/assets/logos/icreate-logo.png";
import nvidiaLogo from "@/assets/logos/nvidia-logo.svg";
import nasscomLogo from "@/assets/logos/nasscom-logo.png";

const PartnershipsSection = () => {
  const partnerships = [
    {
      name: "MeitY",
      fullName: "Ministry of Electronics and Information Technology",
      type: "Central Government",
      description: "Digital India initiatives and technology development support",
      logo: meityLogo
    },
    {
      name: "DST",
      fullName: "Department of Science & Technology",
      type: "Central Government",
      description: "Science and technology research funding and development",
      logo: dstLogo
    },
    {
      name: "NIDHI PRAYAS",
      fullName: "National Initiative for Developing and Harnessing Innovations",
      type: "Government Program",
      description: "Early-stage technology development and startup support",
      logo: nidhiPrayasLogo
    },
    {
      name: "Maker Village",
      fullName: "Maker Village Kochi",
      type: "Innovation Hub",
      description: "Asia's largest electronics incubator and startup ecosystem",
      logo: makerVillageLogo
    },
    {
      name: "KSUM",
      fullName: "Kerala Startup Mission",
      type: "State Initiative",
      description: "Startup ecosystem development and pilot project validation",
      logo: ksumLogo
    },
    {
      name: "Startup TN",
      fullName: "Startup Tamil Nadu",
      type: "State Initiative",
      description: "Tamil Nadu's startup ecosystem enabler and policy support",
      logo: startupTnLogo
    },
    {
      name: "DPIIT",
      fullName: "Department for Promotion of Industry and Internal Trade",
      type: "Central Government",
      description: "Industry promotion and startup recognition programs",
      logo: dpiitLogo
    },
    {
      name: "iCreate",
      fullName: "International Centre for Entrepreneurship and Technology",
      type: "Innovation Hub",
      description: "Technology incubation and entrepreneurship development",
      logo: icreateLogo
    },
    {
      name: "NVIDIA",
      fullName: "NVIDIA Corporation",
      type: "Technology Partner",
      description: "AI and GPU technology collaboration for autonomous systems",
      logo: nvidiaLogo
    },
    {
      name: "NASSCOM",
      fullName: "National Association of Software and Service Companies",
      type: "Industry Association",
      description: "IT industry collaboration and startup ecosystem support",
      logo: nasscomLogo
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

        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...partnerships, ...partnerships].map((partner, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300 h-full flex-shrink-0 w-80 mx-4">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="flex-shrink-0 mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.fullName}
                      className="h-12 w-auto mx-auto object-contain"
                    />
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs mx-auto">
                    {partner.type}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;