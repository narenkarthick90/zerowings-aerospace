import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/c60ddfc6-725b-4a0d-946d-6db426ec9c4e.png" 
          alt="Zerowings Aerospace Drone Cleaning Building" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            <span className="hero-gradient bg-clip-text text-transparent">
              Zerowings
            </span>
            <br />
            <span className="text-foreground">Aerospace</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary drone-powered cleaning solutions for the aerospace industry. 
            Precision, efficiency, and excellence in every mission.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow"
            onClick={() => document.getElementById("cleaning-process")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discover Our Process
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-primary text-2xl">↓</div>
      </div>
    </section>
  );
};

export default HeroSection;