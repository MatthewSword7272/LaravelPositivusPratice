import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
interface HeadingProps {
  heading: string;
  className?: string;
  description?: string;
  backgroundColor?: "bg-green" | "bg-dark" | "bg-white";
}

const Heading = ({
  heading,
  description,
  backgroundColor = "bg-green",
  className = "",
}: HeadingProps) => {
  gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

  const h2 = useRef<HTMLHeadingElement | null>(null);
  const p = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const split = SplitText.create(p.current, { type: "words, chars" });

    gsap.from(h2.current, {
      scrollTrigger: h2.current,
      rotation: "10rad",
      x: "500%",
      duration: 1,
    });

    gsap.from(split.words, {
      scrollTrigger: p.current,
      x: 100,
      autoAlpha: 0,
      duration: 1.5,
      ease: "power4",
      delay: 0.5,
      stagger: 0.04,
    });
  });

  return (
    <div className="flex max-lg:flex-col gap-x-10 gap-y-7 items-center mb-10">
      <h2
        ref={h2}
        className={`${backgroundColor} font-medium rounded-lg px-3 py-1 ${className}`}
      >
        {heading}
      </h2>
      {description && (
        <p ref={p} className="lg:w-1/2 max-lg:text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
