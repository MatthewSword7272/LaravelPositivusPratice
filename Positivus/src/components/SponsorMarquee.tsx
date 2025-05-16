import Marquee from "react-fast-marquee";

export default function SponsorCarousel() {
  const sponsorLogos = [
    "/amazon.png",
    "/dribbble.png",
    "/hubspot.png",
    "/notion.png",
    "/netflix.png",
    "/zoom.png",
  ];

  return (
    <>
      <div className="lg:flex justify-between w-full hidden">
        {sponsorLogos.map((image, index) => (
          <img key={index} src={image} className="grayscale"></img>
        ))}
      </div>

      <div className={"lg:hidden"}>
        <Marquee speed={30}>
          {sponsorLogos.map((image, index) => (
            <img key={index} src={image} className="grayscale mx-5"></img>
          ))}
        </Marquee>
      </div>
    </>
  );
}
