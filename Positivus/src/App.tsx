import CaseStudies from "./components/sections/CaseStudies";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import MakeThingsHappen from "./components/sections/MakeThingsHappen";
import Services from "./components/sections/Services";
import SponsorCarousel from "./components/SponsorMarquee";
import WorkingProcessList from "./components/sections/WorkingProcessList";
import TheTeam from "./components/sections/TheTeam";
import Testimonials from "./components/sections/Testimonials";
import ContactUs from "./components/sections/ContactUs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
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

        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
