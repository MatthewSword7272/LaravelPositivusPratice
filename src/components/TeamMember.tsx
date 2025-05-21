import ProfileImage from "./ProfileImage";
import { FaLinkedinIn } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  delay: number;
}

const TeamMember = ({
  name,
  role,
  description,
  image,
  delay,
}: TeamMemberProps) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  const container = useRef<HTMLDivElement | null>(null);
  const line = useRef<HTMLHRElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const split = SplitText.create(descriptionRef.current, {
      type: "words, chars",
    });

    gsap.from(container.current, {
      scrollTrigger: container.current,
      scale: 0,
      delay: delay / 4,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.from(line.current, {
      scrollTrigger: line.current,
      width: 0,
      delay: delay / 4 + 1,
      duration: 1,
    });
    gsap.from(split.words, {
      scrollTrigger: line.current,
      delay: delay / 4 + 1,
      duration: 1,
      x: 100,
      autoAlpha: 0,
      ease: "power4",
      stagger: 0.04,
    });
  });
  return (
    <div
      ref={container}
      className={"shadow-box rounded-4xl border py-10 px-9 relative space-y-5"}
    >
      <div
        className={
          "absolute flex items-center justify-center top-5 right-5 size-8 bg-black rounded-full"
        }
      >
        <FaLinkedinIn className={" text-green"} />
      </div>
      <div className={"flex items-end gap-5"}>
        <ProfileImage image={image} delay={delay / 4 + 1} />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <hr ref={line} />
      <p ref={descriptionRef}>{description}</p>
    </div>
  );
};

export default TeamMember;
