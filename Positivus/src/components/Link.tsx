import SimpleBlack from "../assets/link/simple_black.svg";
import SimpleWhite from "../assets/link/simple_white.svg";
import SimpleGreen from "../assets/link/simple_green.svg";
import Black from "../assets/link/black.svg";
import Black2 from "../assets/link/black_2.svg";
import White from "../assets/link/white.svg";
import White2 from "../assets/link/white_2.svg";
import Green from "../assets/link/green.svg";
import Green2 from "../assets/link/green_2.svg";

interface LinkProps {
  children: string;
  style:
    | "simple_black"
    | "simple_white"
    | "simple_green"
    | "green_2"
    | "green"
    | "black_2"
    | "black"
    | "white"
    | "white_2";
}

const Link = ({ style, children }: LinkProps) => {
  let svg: any;

  if (style === "simple_black") {
    svg = SimpleBlack;
  } else if (style === "simple_white") {
    svg = SimpleWhite;
  } else if (style === "simple_green") {
    svg = SimpleGreen;
  } else if (style === "white") {
    svg = White;
  } else if (style === "white_2") {
    svg = White2;
  } else if (style === "black") {
    svg = Black;
  } else if (style === "black_2") {
    svg = Black2;
  } else if (style === "green") {
    svg = Green;
  } else if (style === "green_2") {
    svg = Green2;
  }

  return (
    <a
      className={`text-xl flex gap-x-3.5 items-center w-fit m-1 ${
        style.includes("simple") ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img src={svg} alt="" />
      <span className={style === 'white' || style === 'white_2' ? 'text-white' : 'text-black'}>{children}</span>
    </a>
  );
};

export default Link;
