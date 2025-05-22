import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

interface ProfileImageProps {
  image: string;
  delay: number;
}

const ProfileImage = ({ image, delay }: ProfileImageProps) => {
  const img = useRef<HTMLImageElement | null>(null);
  const path = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

  useGSAP(() => {
    gsap.from(img.current, {
      scrollTrigger: img.current,
      opacity: 0,
      duration: 2,
      delay: delay + 2,
    });
    gsap.from(path.current, {
      scrollTrigger: path.current,
      duration: 2,
      drawSVG: "0%",
      delay: delay,
    });
    gsap.from(path.current, {
      scrollTrigger: path.current,

      duration: 2,
      opacity: "100%",
      delay: delay + 2,
    });
  });

  return (
    <div className={"relative w-fit"}>
      <svg
        className={"absolute"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={path}
          stroke={"black"}
          d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
        />
        <clipPath id="mask">
          <path
            stroke={"black"}
            d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
          />
        </clipPath>
      </svg>

      <div className={"overflow-hidden size-25 drop-shadow-svg"}>
        <img
          ref={img}
          src={image}
          alt=""
          className={"w-full h-full object-cover"}
          style={{ clipPath: "url(#mask)" }}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
