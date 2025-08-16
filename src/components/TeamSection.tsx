import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, GraduationCap, Briefcase, Award } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Akilan R",
      title: "Co-Founder",
      image: "/lovable-uploads/3fac1667-e5ee-4f87-a74b-ededf394debe.png",
      linkedin: "https://www.linkedin.com/in/akilan-r-9039b6135/",
      education: "B.Tech in Instrumentation and Control Engineering from NIT Trichy",
      experience: [
        "Associate Consultant at Amazon Web Services (AWS)",
        "SDE Intern at Boeing"
      ],
      expertise: [
        "Solution architecture, technical implementation, and scaling cloud-based systems",
        "Data analysis and migration for robust infrastructure optimization",
        "Strategic planning and execution through leadership roles in tech organizations",
        "Certifications in machine learning and cloud computing"
      ]
    },
    {
      name: "Sree Aravinth V",
      title: "Co-Founder", 
      image: "/lovable-uploads/3fac1667-e5ee-4f87-a74b-ededf394debe.png",
      linkedin: "https://www.linkedin.com/in/sree-aravinth-v-2049a9190/",
      education: "B.Tech in Mechanical Engineering from NIT Trichy",
      experience: [
        "Senior Mechanical Engineer (Robotics startup)",
        "Supply Chain Planning Manager at P&G",
        "Intern at Caterpillar Inc. (Engine Controls)"
      ],
      expertise: [
        "Mechanical system design and development for autonomous vehicles",
        "Advanced CFD analysis for optimizing propulsion systems", 
        "Leading end-to-end product development, including experimental validation and prototyping",
        "Strategic problem-solving and team leadership in high-pressure technical environments"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Building the future of autonomous aerial maintenance systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.title}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </a>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Education</h4>
                    </div>
                    <p className="text-muted-foreground pl-7">{member.education}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Industry Experience</h4>
                    </div>
                    <ul className="space-y-1 pl-7">
                      {member.experience.map((exp, idx) => (
                        <li key={idx} className="text-muted-foreground">• {exp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Expertise</h4>
                    </div>
                    <ul className="space-y-1 pl-7">
                      {member.expertise.map((skill, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">• {skill}</li>
                      ))}
                    </ul>
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

export default TeamSection;