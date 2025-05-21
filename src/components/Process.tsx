import { useEffect, useRef, useState } from "react";
import Minus from "../assets/minus";
import Plus from "../assets/plus";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ProcessProps {
  id: number;
  heading: string;
  description: string;
}

const Process = ({ id, heading, description }: ProcessProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
  });

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer lg:px-[60px] lg:py-10 p-8 lg:rounded-4xl rounded-[5rem] border shadow-box ${
          isOpen ? "bg-green" : "bg-grey"
        }`}
      >
        <div className={"flex justify-between items-center"}>
          <div className={"flex gap-x-6 items-center"}>
            <h1>0{id}</h1>
            <h3>{heading}</h3>
          </div>
          <div className={""}>{isOpen ? <Minus /> : <Plus />}</div>
        </div>

        <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
          <hr />
          <div className="mt-4">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Process;
