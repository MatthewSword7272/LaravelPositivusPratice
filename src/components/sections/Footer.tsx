import WhiteLogo from "../../assets/logos/white_logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import Button from "../Button";

const Footer = () => {
  const navLinks = ["About Us", "Services", "Use Cases", "Pricing", "Blog"];
  return (
    <footer className="lg:container lg:mx-auto lg:rounded-t-4xl text-white bg-dark mt-16 pt-14 pb-[3.125rem] lg:px-[3.75rem] px-5 space-y-12">
      <div className=" flex max-lg:flex-col justify-between items-center gap-y-8">
        <div className="">
          <img src={WhiteLogo} alt="" />
        </div>
        <nav className="flex gap-x-10 gap-y-4 max-lg:flex-col items-center">
          {navLinks.map((text, index) => (
            <p className="lg:underline text-[18px]" key={index}>
              {text}
            </p>
          ))}
        </nav>
        <div className="flex gap-5 items-center max-lg:hidden">
          <div className="bg-white rounded-full size-fit p-1.5">
            <FaLinkedinIn className="text-dark" />
          </div>
          <FaFacebook size={27} />
          <AiFillTwitterCircle size={31} />
        </div>
      </div>
      <div className="flex justify-between max-lg:flex-col gap-y-12">
        <div className="lg:w-80 flex flex-col justify-center max-lg:items-center max-lg:text-center space-y-5">
          <h4 className="bg-green px-1 rounded-md text-dark w-fit">Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className="bg-zinc-800 lg:py-[60px] lg:px-10 p-7 rounded-2xl flex max-lg:flex-col items-center gap-5 lg:w-1/2">
          <input className="!bg-zinc-800 !text-white !border-white lg:w-1/2 w-full" type="email" placeholder="Email" />
          <Button className="lg:w-1/2 w-full max-xl:!text-base" style="green">
            Subscribe to news
          </Button>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center lg:hidden">
        <div className="bg-white rounded-full size-fit p-1.5">
          <FaLinkedinIn size={23} className="text-dark" />
        </div>
        <FaFacebook size={37} />
        <AiFillTwitterCircle size={41} />
      </div>
      <hr />
      <p className="flex gap-x-11 gap-y-5 items-center max-lg:flex-col">
        &copy; 2025 Positivus. All Right Reversed<span className="underline">Privacy Policy</span>
      </p>
    </footer>
  );
};

export default Footer;
