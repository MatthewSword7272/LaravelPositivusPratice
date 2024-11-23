export default function Card({id, title, image}) {

    //Card Compoent gets card title and image. Also uses Id to determine the colours for the card

    //Define Background colour based on id
    const bgColor = {
        1: "bg-gray", // Gray for id 1
        2: "bg-lightGreen", // Light Green for id 2
        3: "bg-black", // Black for id 3
    }

    // Define highlight text colors based on id
    const highlightColor = {
        1: "bg-lightGreen", // Light Green for id 1
        2: "bg-white", // Black for id 2
        3: "bg-white", // Black for id 3
    }

    // Define text colors based on id
    const textColor = {
        1: "text-black", // Light Green for id 1
        2: "text-black", // Black for id 2
        3: "text-white", // Black for id 3
    }

    return (
        <div className={`${bgColor[id]} h-72 rounded-[50px] border border-black p-10 flex justify-between border-b-[6px]`}>
            <div className="w-1/2 flex justify-between flex-col">
                <h2 className="inline-flex flex-col">
                    {title.split('\n').map((word, index) => (
                        <span key={index} className={`${highlightColor[id]} text-2xl font-bold w-fit rounded py-0.5 px-1`}>
                            {word}
                        </span>
                    ))}
                </h2>
                <div className={`${textColor[id]}`}>Learn More</div>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={image}></img>
            </div>
        </div>
    )
}
