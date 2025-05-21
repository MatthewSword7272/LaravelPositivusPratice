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
      <div className="w-full fixed top-0 text-center bg-green z-[100] py-1">
        This is design is from{" "}
        <a
          className="underline hover:text-green-500"
          href="https://www.figma.com/design/ICWBzubYlH2NrX9naog0vf/Positivus-Landing-Page-Design--Community-?node-id=330-762&t=joLE1ekrnpBQfdqN-0"
          target="_blank"
        >
          Figma
        </a>
      </div>
      <main className={"container mx-auto lg:px-10 px-5 space-y-16"}>
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
