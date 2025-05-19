import Button from "../Button";

const HeroSection = () => {
  return (
    <section className={"flex max-md:flex-col items-center justify-between"}>
      <div className={"lg:w-2/5 flex flex-col gap-y-9 lg:items-start"}>
        <h1>Navigating the digital landscape for success</h1>
        <div className={"lg:hidden"}>
          <img src="/HeroImage.png" alt="" />
        </div>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button style={"dark"}>Book a consultation</Button>
      </div>
      <div className={"max-lg:hidden"}>
        <img src="/HeroImage.png" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
