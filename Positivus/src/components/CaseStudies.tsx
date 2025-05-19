import Heading from "./Heading";
import Link from "./Link";
import Slider from "react-slick";

const CaseStudies = () => {
  const caseStudies: string[] = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];

  const settings = {
    infinite: false,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
  };

  return (
    <>
      <Heading
        backgroundColor="bg-green"
        heading="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div
        className={
          "hidden lg:flex gap-16 bg-dark rounded-4xl h-80 px-[60px] py-[70px]"
        }
      >
        {caseStudies.map((text, index) => (
          <div
            key={index}
            className={"not-last:pr-16 not-last:border-r border-white"}
          >
            <p className={"text-white xl:leading-6 lg:leading-[18px]"}>
              {text}
            </p>
            <Link style={"simple_green"}>Learn more</Link>
          </div>
        ))}
      </div>

      <Slider {...settings} className={"lg:!hidden caseSlides"}>
        {caseStudies.map((text, index) => (
          <div key={index} className={"bg-dark rounded-4xl -mx-5 px-12 py-10"}>
            <p className={"text-white mb-5"}>{text}</p>
            <Link style={"simple_green"}>Learn more</Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CaseStudies;
