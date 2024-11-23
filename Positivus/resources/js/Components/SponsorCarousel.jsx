export default function SponsorCarousel() {
    const sponsorLogos = [
        'images/amazon_logo.svg',
        'images/dribbble_logo.svg',
        'images/HubSpot_logo.svg',
        'images/notion_logo.svg',
        'images/netflix_logo.svg',
        'images/zoom_logo.svg',
    ]

    const halfwayPoint = Math.ceil(sponsorLogos.length / 2)
    const firstHalf = sponsorLogos.slice(0, halfwayPoint)
    const secondHalf = sponsorLogos.slice(halfwayPoint)

    return (
       <>
            <div className="lg:flex justify-between w-full hidden">
                {sponsorLogos.map((image) => (
                    <img src={image} className="grayscale"></img>
                ))}
            </div>
            <div className="flex flex-col lg:hidden w-full">
                <div className="flex justify-evenly">
                    {firstHalf.map((image) => (
                        <img src={image} className="grayscale"></img>
                    ))}
                </div>
                <div className="flex justify-evenly">
                    {secondHalf.map((image) => (
                        <img src={image} className="grayscale"></img>
                    ))}
                </div>
            </div>
       </>
    )
}
