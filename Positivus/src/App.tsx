import CaseStudies from "./components/CaseStudies";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MakeThingsHappen from "./components/MakeThingsHappen";
import Services from "./components/Services";
import SponsorCarousel from "./components/SponsorMarquee";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkingProcessList from "./components/WorkingProcessList";
import TheTeam from "./components/TheTeam";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className={"container mx-auto px-10 space-y-16"}>
      <Header></Header>
      <HeroSection />
      <SponsorCarousel />

      <Services />

      <MakeThingsHappen />

      <CaseStudies />

      <WorkingProcessList />

      <TheTeam />

      <Testimonials />
    </main>
  );
}

export default App;
