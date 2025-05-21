import { useState } from "react";
import BlackLogo from "../assets/logos/black_logo.svg";
import Button from "./Button";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <>
      <header className={"flex justify-between items-center my-[30px]"}>
        <img src={BlackLogo} alt="" />
        <div>
          <HiBars3 onClick={() => setMobileMenu(true)} size={24} className={"lg:hidden"} />
        </div>
        <nav className={`max-lg:hidden whitespace-nowrap text-xl flex items-center xl:gap-10 gap-4`}>
          <a>About us</a>
          <a>Services</a>
          <a>Use Cases</a>
          <a>Pricing</a>
          <a>Blog</a>
          <Button style={"gray"} className={"bg-white"}>
            Request a quote
          </Button>
        </nav>
      </header>
      {mobileMenu && (
        <div className={"fixed   bg-white z-50 inset-0 h-screen"}>
          <IoMdClose onClick={() => setMobileMenu(false)} size={35} className={"lg:hidden absolute top-10 right-10"} />
          <nav className={`flex flex-col gap-5 text-4xl text-center items-center justify-center h-full`}>
            <a>About us</a>
            <a>Services</a>
            <a>Use Cases</a>
            <a>Pricing</a>
            <a>Blog</a>
            <Button style={"gray"} className={"bg-white"}>
              Request a quote
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
