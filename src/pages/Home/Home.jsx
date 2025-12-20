import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProductShowcase from './sections/ProductShowcase/ProductShowcase';
import AdvancedCapabilities from './sections/AdvancedCapabilities/AdvancedCapabilities';
import IndustriesSection from './sections/IndustriesSection/IndustriesSection';
import CTASection from './sections/CTASection/CTASection';
import Footer from './sections/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <AdvancedCapabilities />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;