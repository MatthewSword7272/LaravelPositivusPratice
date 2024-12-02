import LearnMoreBlack from '@/svgs/LearnMoreBlack'
import LearnMoreBlackMobile from '@/svgs/LearnMoreBlackMobile'
import LearnMoreWhite from '@/svgs/LearnMoreWhite'
import LearnMoreWhiteMobile from '@/svgs/LearnMoreWhiteMobile'

export default function Card({id, title, image}) {
    //Card Component gets card title and image. Also uses Id to determine the colours for the card

    const cards = [
        {
            id: 1,
            bgColor: 'bg-gray',
            highlightColor: 'bg-lightGreen',
            link: <LearnMoreBlack />,
            mobileLink: <LearnMoreBlackMobile />,
        },
        {
            id: 2,
            bgColor: 'bg-lightGreen',
            highlightColor: 'bg-white',
            link: <LearnMoreBlack />,
            mobileLink: <LearnMoreBlackMobile />,
        },
        {
            id: 3,
            bgColor: 'bg-black',
            highlightColor: 'bg-white',
            link: <LearnMoreWhite />,
            mobileLink: <LearnMoreWhiteMobile />,
        },
    ]
    const currentCard = cards.find((card) => card.id === id)

    return (
        <div
            className={`${currentCard.bgColor} lg:h-75 rounded-5xl border border-black p-13 flex lg:flex-row flex-col justify-between border-b-6 gap-y-7`}
        >
            <div className="flex justify-between flex-col">
                <h2 className="inline-flex flex-col">
                    {title.split('\n').map((word, index) => (
                        <span
                            key={index}
                            className={`${currentCard.highlightColor} lg:text-h3 text-h3-mobile font-bold w-max rounded py-0.5 px-1`}
                        >
                            {word}
                        </span>
                    ))}
                </h2>
                <button className={`hidden lg:block`}>{currentCard.link}</button>
            </div>
            <div className="lg:max-w-52 flex justify-between items-end lg:items-center">
                <button className={`lg:hidden`}>{currentCard.mobileLink}</button>
                <img src={image} className="lg:max-h-max max-h-32"></img>
            </div>
        </div>
    )
}
