import Button from "./components/Button";
import Header from "./components/Header";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Link from "./components/Link";
import Services from "./components/Services";
import SponsorCarousel from "./components/SponsorMarquee";

function App() {
  return (
    <main className={"container mx-auto px-5 space-y-16"}>
      <Header></Header>
      <HeroSection/>
      <SponsorCarousel />
      <div>
        <Heading backgroundColor="bg-green" heading="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <Services/>
      </div>

    </main>
  );
}

export default App;
