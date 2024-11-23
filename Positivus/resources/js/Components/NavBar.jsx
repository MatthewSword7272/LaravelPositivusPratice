import StyledButton from "./StyledButton";

export default function NavBar() {
    return (
        <div className="flex justify-between w-full items-center text-black">
            <div className="w-1/2">
                <img src='images/Logo_black.svg'></img>
            </div>
            <div className="w-full">
                <nav>
                    <ul className="flex justify-between w-full items-center">
                        <li>About us</li>
                        <li>Services</li>
                        <li>Use Cases</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li><StyledButton bgColour={'white'} buttonText={"Request a Quote"}/></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
