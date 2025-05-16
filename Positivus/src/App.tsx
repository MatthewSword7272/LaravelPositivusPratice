import Button from "./components/Button";
import Header from "./components/Header";
import Link from "./components/Link";
import SponsorCarousel from "./components/SponsorMarquee";

function App() {
  return (
    <main className={"container mx-auto px-5 space-y-16"}>
      <Header></Header>
      <section className={"flex max-md:flex-col items-center justify-between"}>
        <div className={"lg:w-2/5 flex flex-col gap-y-9 lg:items-start"}>
          <h1 className={"font-semibold"}>
            Navigating the digital landscape for success
          </h1>
          <div className={"lg:hidden"}>
            <img src="/HeroImage.png" alt="" />
          </div>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button style={"dark"}>Book a consultation</Button>
        </div>
        <div className={"max-lg:hidden"}>
          <img src="/HeroImage.png" alt="" />
        </div>
      </section>
      <SponsorCarousel />
    </main>
  );
}

export default App;
