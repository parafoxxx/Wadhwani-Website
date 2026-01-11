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

export default function Index() {
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
