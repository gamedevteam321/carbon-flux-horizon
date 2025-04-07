
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import Benefits from "@/components/Benefits";
import OurPlan from "@/components/OurPlan";
import OurTechnology from "@/components/OurTechnology";
import QuoteSlider from "@/components/QuoteSlider";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <ProductCards />
      <Benefits />
      <OurPlan />
      <OurTechnology />
      <QuoteSlider />
      <Projects />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
