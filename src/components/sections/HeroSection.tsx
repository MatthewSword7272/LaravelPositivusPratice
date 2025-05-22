import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HeroSection = () => {
  const h1 = useRef<HTMLHeadingElement | null>(null);
  const p = useRef<HTMLParagraphElement | null>(null);
  const img = useRef<HTMLImageElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(h1.current, {
      x: "-200%",
      delay: 0.5,
      duration: 1,
    });
    gsap.from(p.current, {
      x: "-200%",
      delay: 0.7,
      duration: 1,
    });
    gsap.from(".button", {
      x: "-200%",
      delay: 1,
      duration: 1,
    });
    gsap.from(".image", {
      scale: 0,
      delay: 0.5,
      duration: 2,
      ease: "power3.out",
    });
  });

  return (
    <section className={"flex max-md:flex-col items-center justify-between"}>
      <div className={"lg:w-2/5 flex flex-col gap-y-9 lg:items-start"}>
        <h1 ref={h1}>Navigating the digital landscape for success</h1>
        <div className={"lg:hidden"}>
          <img className="image" ref={img} src="/HeroImage.png" alt="" />
        </div>
        <p ref={p}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div className={"button"}>
          <Button className="max-lg:w-full" style={"dark"}>
            Book a consultation
          </Button>
        </div>
      </div>
      <div className={"max-lg:hidden"}>
        <img className="image" src="/HeroImage.png" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
