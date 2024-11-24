import { useState } from "react";
import Divider from "./Divider";

export default function Accordion({ number, title, content }) {
    const [isOpen, setIsOpen] = useState(false); //State used to open and close accordion

    const bgColour = isOpen ? "bg-lightGreen" : "bg-gray"; //Determine the bg-colour when accordion is opened or closed

    return (
        <div
            className={`font-semibold rounded-[70px] lg:rounded-[50px] border border-black p-10 border-b-[6px] ${bgColour} transition ease-in-out hover:cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-5">
                    <span className="text-5xl">{number}</span>
                    <span className="text-2xl">{title}</span>
                </div>
                <div>
                    <button className="bg-gray border border-black rounded-full w-full">
                        <img
                            className="w-full h-11 p-1"
                            src={`${
                                !isOpen
                                    ? "/images/plus.svg"
                                    : "/images/minus.svg"
                            }`}
                        ></img>{" "}
                        {/*Switches image if accordion is opened or closed*/}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="transition translate-x-3">
                    <Divider backgroundColor={"black"} /> {/* Line */}
                    <div className="text-base font-normal">{content}</div>
                </div>
            )}
        </div>
    );
}
