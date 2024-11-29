import LearnMoreBlack from "@/svgs/LearnMoreBlack";
import LearnMoreWhite from "@/svgs/LearnMoreWhite";

export default function Card({ id, title, image }) {
    //Card Compoent gets card title and image. Also uses Id to determine the colours for the card

    const cards = [
        {
            id: 1,
            bgColor: "bg-gray",
            highlightColor: "bg-lightGreen",
            link: <LearnMoreBlack />,
        },
        {
            id: 2,
            bgColor: "bg-lightGreen",
            highlightColor: "bg-white",
            link: <LearnMoreBlack />,
        },
        {
            id: 3,
            bgColor: "bg-black",
            highlightColor: "bg-white",
            link: <LearnMoreWhite />,
        },
    ];
    const currentCard = cards.find((card) => card.id === id);

    return (
        <div
            className={`${currentCard.bgColor} h-72 rounded-[50px] border border-black p-10 flex justify-between border-b-[6px]`}
        >
            <div className="w-1/2 flex justify-between flex-col">
                <h2 className="inline-flex flex-col">
                    {title.split("\n").map((word, index) => (
                        <span
                            key={index}
                            className={`${currentCard.highlightColor} text-h3 font-bold w-fit rounded py-0.5 px-1`}
                        >
                            {word}
                        </span>
                    ))}
                </h2>
                <div className={`hidden lg:block`}>{currentCard.link}</div>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={image}></img>
            </div>
        </div>
    );
}
