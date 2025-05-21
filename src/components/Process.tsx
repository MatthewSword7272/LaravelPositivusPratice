import { useState } from "react";
import Minus from "../assets/minus";
import Plus from "../assets/plus";

interface ProcessProps {
  id: number;
  heading: string;
  description: string;
}

const Process = ({ id, heading, description }: ProcessProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`space-y-5 cursor-pointer lg:px-[60px] lg:py-10 p-8 lg:rounded-4xl rounded-[5rem] border shadow-box ${
          isOpen ? "bg-green" : "bg-grey"
        }`}
      >
        <div className={"flex justify-between items-center"}>
          <div className={"flex gap-x-6 items-center"}>
            <h1>0{id}</h1>
            <h3>{heading}</h3>
          </div>
          <div className={""}>{isOpen ? <Minus /> : <Plus />}</div>
        </div>
        {isOpen && (
          <>
            <hr />
            <div>{description}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Process;
