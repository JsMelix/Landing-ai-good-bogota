import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import InfoSection from './components/InfoSection/InfoSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContributeSection from './components/ContributeSection/ContributeSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <InfoSection />
      <ProjectsSection />
      <ContributeSection />
      <PartnersSection />
      <Footer />
    </main>
  );
} 
 