import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

interface ButtonProps {
  children: string;
  style: "dark" | "gray" | "green";
  className?: string;
}

const Button = ({ children, style, className }: ButtonProps) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const button = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    gsap.from(button.current, {
      scrollTrigger: {
        trigger: button.current,
        start: "top 90%",
      },
      scale: 0,
      ease: "elastic.out(1, 0.5)",
    });
  });

  let buttonClassName: string = `px-8 py-5 rounded-xl lg:text-xl border whitespace-nowrap transition-colors ${className} `;

  if (style === "dark") {
    buttonClassName +=
      "bg-dark text-white border-dark hover:bg-white hover:text-dark";
  } else if (style === "gray") {
    buttonClassName +=
      "bg-grey text-dark border-dark hover:bg-dark hover:text-white";
  } else if (style === "green") {
    buttonClassName +=
      "bg-green text-dark hover:bg-dark hover:text-white border-0";
  }

  return (
    <button ref={button} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
