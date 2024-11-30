import NavBar from "./NavBar";
import SponsorCarousel from "./SponsorCarousel";
import StyledButton from "./StyledButton";

export default function Header() {
    return (
        <div className="flex flex-col space-y-14">
            <NavBar /> {/* Nav Bar Component*/}
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
                <div className="flex flex-col justify-center space-y-10 lg:w-[45%] w-full text-black">
                    <h1 className="lg:text-h1 text-h1-mobile font-medium">
                        Navigating the digital landscape for success
                    </h1>
                    <div className="flex justify-center w-auto lg:hidden">
                        <img src="images/HeaderImage.svg" />
                    </div>
                    <div className="lg:text-h4 text-p-mobile">
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </div>
                    <div>
                        {/* Styled Button: Passing in the white for text colour and text */}
                        <StyledButton
                            textColour="white"
                            buttonText={"Book a Consultation"}
                        />
                    </div>
                </div>
                <div className="hidden justify-center w-1/2 lg:flex">
                    <img src="images/HeaderImage.svg" />
                </div>
            </div>
            <SponsorCarousel />
        </div>
    );
}
