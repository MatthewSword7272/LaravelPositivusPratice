import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

export default function SponsorCarousel() {
  const sponsorLogos = [
    "/logos/amazon.png",
    "/logos/dribbble.png",
    "/logos/hubspot.png",
    "/logos/notion.png",
    "/logos/netflix.png",
    "/logos/zoom.png",
  ];

  const item = useRef<HTMLImageElement | null>(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.from(".grayscale", {
      scrollTrigger: ".grayscale",
      scale: 0,
      duration: 0.6,
      stagger: 0.2,
      rotate: -360,
    });
  }, []);

  return (
    <>
      <div className="lg:flex justify-between w-full hidden">
        {sponsorLogos.map((image, index) => (
          <img ref={item} key={index} src={image} className="grayscale"></img>
        ))}
      </div>

      <div className={"lg:hidden"}>
        <Marquee speed={30}>
          {sponsorLogos.map((image, index) => (
            <img
              ref={item}
              key={index}
              src={image}
              className="grayscale mx-5"
            ></img>
          ))}
        </Marquee>
      </div>
    </>
  );
}
