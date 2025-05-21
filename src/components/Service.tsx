import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "./Link";
import { useRef } from "react";

interface ServiceProps {
  service: {
    heading: string[];
    colorCode: number;
    image: string;
  };
  delay: number;
}

const Service = ({ service, delay }: ServiceProps) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const container = useRef<HTMLDivElement | null>(null);
  const image = useRef<HTMLImageElement | null>(null);
  const link = useRef<HTMLDivElement | null>(null);
  const heading = useRef<HTMLHeadingElement | null>(null);

  const delayIndex = delay / 4;

  useGSAP(() => {
    gsap.from(container.current, {
      scrollTrigger: container.current,
      scale: 0,
      duration: 0.5,
      delay: delayIndex,
    });
    gsap.from(image.current, {
      scrollTrigger: image.current,
      scale: 0,
      x: 1000,
      duration: 0.5,
      delay: delayIndex + 1,
    });
    gsap.from(link.current, {
      scrollTrigger: link.current,
      scale: 0,
      y: 500,
      duration: 0.65,
      delay: delayIndex + 1,
    });
    gsap.from(heading.current, {
      scrollTrigger: heading.current,
      duration: 0.65,
      rotationX: 45,
      scaleX: 0,
      z: -300,
      delay: delayIndex + 1,
    });
  });

  return (
    <div
      ref={container}
      className={`serviceContainer  flex justify-between items-center rounded-4xl p-12 lg:gap-10 border shadow-box min-h-80 ${
        service.colorCode === 1 ? "bg-grey" : service.colorCode === 2 ? "bg-green" : "bg-black"
      }`}
    >
      <div className="flex flex-col w-1/2 h-full justify-between">
        <h3 ref={heading} className={`flex flex-col`}>
          {service.heading.map((text, index) => (
            <span
              key={index}
              className={`px-1 w-fit rounded ${
                service.colorCode === 1 || service.colorCode === 4 ? "bg-green" : "bg-white"
              }`}
            >
              {text}
            </span>
          ))}
        </h3>

        <div ref={link}>
          <Link style={service.colorCode === 1 || service.colorCode === 2 ? "black" : "white_2"}>
            <span className={`max-lg:hidden`}>Learn More</span>
          </Link>
        </div>
      </div>
      <div className="lg:w-52 h-full lg:content-center content-end overflow-hidden">
        <img ref={image} src={service.image} alt="" />
      </div>
    </div>
  );
};

export default Service;
