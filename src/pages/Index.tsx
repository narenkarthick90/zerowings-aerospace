import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CleaningProcess from "@/components/CleaningProcess";
import ExcellenceCenter from "@/components/ExcellenceCenter";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CleaningProcess />
      <ExcellenceCenter />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
