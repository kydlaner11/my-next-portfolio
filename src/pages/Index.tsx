import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ContactWaSection from "@/components/ContactWaSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      {/* <ServicesSection /> */}
      <FaqSection />
      {/* <TestimonialSection /> */}
      {/* <ContactSection /> */}
      <ContactWaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
