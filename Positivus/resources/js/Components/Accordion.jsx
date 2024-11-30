import { useState } from "react";
import Divider from "./Divider";
import MinusImage from "@/svgs/MinusImage";
import PlusImage from "@/svgs/PlusImage";

export default function Accordion({ number, title, content }) {
    const [isOpen, setIsOpen] = useState(false); //State used to open and close accordion

    const bgColour = isOpen ? "bg-lightGreen" : "bg-gray"; //Determine the bg-colour when accordion is opened or closed

    return (
        <div
            className={`font-semibold border border-black px-15 py-10 border-b-6 rounded-5xl ${bgColour} transition ease-in-out hover:cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-5">
                    <span className="lg:text-h1 text-h3">{number}</span>
                    <span className="lg:text-h3 text-h4-mobile">{title}</span>
                </div>
                <div className="">
                    <button>
                        {!isOpen ? (
                            <MinusImage className="h-5 w-5" />
                        ) : (
                            <PlusImage className="h-5 w-5" />
                        )}
                        {/*Switches image if accordion is opened or closed*/}
                    </button>
                </div>
            </div>

            <div
                className={`transition-all duration-700 ${
                    isOpen ? "max-h-96 block" : "max-h-0 hidden"
                }`}
            >
                <Divider backgroundColor={"bg-black"} />
                {/* Line */}
                <div className="text-p font-normal">{content}</div>
            </div>
        </div>
    );
}
