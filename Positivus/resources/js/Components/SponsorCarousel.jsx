export default function SponsorCarousel() {
    // Names of Images of Sponsor Logos
    const sponsorLogos = [
        "images/amazon_logo.svg",
        "images/dribbble_logo.svg",
        "images/HubSpot_logo.svg",
        "images/notion_logo.svg",
        "images/netflix_logo.svg",
        "images/zoom_logo.svg",
    ];

    // Find the halfway point of row and split in half
    const halfwayPoint = Math.ceil(sponsorLogos.length / 2);
    const firstHalf = sponsorLogos.slice(0, halfwayPoint);
    const secondHalf = sponsorLogos.slice(halfwayPoint);

    const mobileSponsorRowClassName = "gap-9 -mx-5 px-7 flex sm:justify-around";

    return (
        <>
            <div className="lg:flex justify-between w-full hidden">
                {sponsorLogos.map((image, index) => (
                    <img key={index} src={image} className="grayscale"></img>
                ))}
            </div>
            {/* In Mobile View, split and row and turn into a column */}
            <div className="flex flex-col lg:hidden w-full gap-y-5">
                <div
                    className={`${mobileSponsorRowClassName} justify-start overflow-hidden`}
                >
                    {firstHalf.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="grayscale"
                        ></img>
                    ))}
                </div>
                <div className={`${mobileSponsorRowClassName} justify-end`}>
                    {secondHalf.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="grayscale"
                        ></img>
                    ))}
                </div>
            </div>
        </>
    );
}
