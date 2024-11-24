import NavigationItems from "./NavItems";
import StyledButton from "./StyledButton";

export default function NavBar() {
    return (
        <div className="flex justify-between w-full items-center text-black">
            <div className="w-1/2">
                <img src="images/Logo_black.svg"></img>
            </div>

                <nav className="flex justify-between w-full items-center">
                    <NavigationItems className="flex justify-evenly w-full items-center" />
                    <StyledButton
                        bgColour={"white"}
                        buttonText={"Request a Quote"}
                    />
                </nav>
        </div>
    );
}
