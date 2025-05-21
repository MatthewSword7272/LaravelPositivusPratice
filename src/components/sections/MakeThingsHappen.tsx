import MakeThingsHappenImage from "../../assets/MakeThingsHappenImage";
import Button from "../Button";

const MakeThingsHappen = () => {
  return (
    <div className={"h-80 flex justify-between items-center bg-grey rounded-4xl lg:p-14 px-11"}>
      <div className={"lg:w-1/2 space-y-6"}>
        <h3>Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing services can help your business grow and
          succeed online.
        </p>
        <Button className="max-lg:w-full" style={"dark"}>
          Get your free proposal
        </Button>
      </div>
      <div className={"max-lg:hidden"}>
        <MakeThingsHappenImage />
      </div>
    </div>
  );
};

export default MakeThingsHappen;
