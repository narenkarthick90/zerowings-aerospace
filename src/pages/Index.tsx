import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CleaningProcess from "@/components/CleaningProcess";
import ExcellenceCenter from "@/components/ExcellenceCenter";
import PartnershipsSection from "@/components/PartnershipsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TeamSection from "@/components/TeamSection";

import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CleaningProcess />
      <ExcellenceCenter />
      <PartnershipsSection />
      <CaseStudiesSection />
      <TeamSection />
      
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
