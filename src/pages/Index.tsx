import ScrollProgress from "../components/ScrollProgress";
import Header from "../components/Header";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import About from "../components/About";
import Research from "../components/Research";
import ResearchCards from "../components/ResearchCards";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import People from "../components/People";
import Partnerships from "../components/Partnerships";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Wait for DOM to render
      // Clean up state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Hero />
      <QuickLinks />
      <About />
      <ResearchCards />
      <Research />
      <Programs />
      <Impact />
      <Achievements />
      <Gallery />
      <People />
      <Partnerships />
      <Footer />
      <BackToTop />
    </div>
  );
}