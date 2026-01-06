import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/content/HeroSection";
import ProductGrid from "../components/content/ProductGrid";
import AboutSection from "../components/content/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
