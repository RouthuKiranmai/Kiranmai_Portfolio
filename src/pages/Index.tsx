
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import HobbiesSection from "@/components/HobbiesSection";
import TrainingLeadershipSection from "@/components/TrainingLeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-darkBg min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <HobbiesSection />
      <TrainingLeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
