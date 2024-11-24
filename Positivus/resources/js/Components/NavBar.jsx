import { useState } from "react";
import NavigationItems from "./NavItems";
import StyledButton from "./StyledButton";
import ThreeBars from "./ThreeBars";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);  //State for Opening and Closing Hamburger Menu

    // Function for Open/Close Hamburger Menu
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex lg:px-0 px-5 lg:flex-row flex-col">
            {/* Image Logo and Hamburger Icon (ThreeBars) */}
            <div className="lg:w-1/2 flex items-center justify-between">
                <div>
                    <img src="images/Logo_black.svg"/>
                </div>
                <button className="lg:hidden block" onClick={handleClick}>
                    <ThreeBars/>
                </button>
            </div>
            {/* Desktop Nav Bar Menu */}
            <nav className="lg:flex hidden justify-between w-full items-center">
                {/* Passing in Class Names */}
                <NavigationItems className="flex justify-evenly w-full items-center" />
                {/* Passing Background colour and Text */}
                <StyledButton
                    bgColour={"white"}
                    buttonText={"Request a Quote"}
                />
            </nav>
            {/* Mobile Hamburger Menu */}
            {isOpen && (
                <div className="lg:hidden w-full">
                    <NavigationItems className="flex flex-col justify-center items-start space-y-6 my-4 underline" />
                    <StyledButton
                        bgColour={"white"}
                        buttonText={"Request a Quote"}
                    />
                </div>
            )}
        </div>
    );
}
