import LearnMoreSimpleGreen from "@/svgs/LearnMoreSimpleGreen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CaseStudies() {
    const caseStudies = [
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    ];

    const settings = {
        arrows: false,
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20px",
    };

    return (
        <div>
            <div className="bg-black py-18 px-15 lg:flex text-white rounded-5xl mb-36 gap-32 hidden">
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className="flex w-1/3">
                        <div className="flex flex-col space-y-5">
                            <div className="text-p">{caseStudy}</div>
                            <LearnMoreSimpleGreen />
                        </div>
                        {index !== caseStudies.length - 1 && (
                            <div className="flex flex-col w-1 h-full bg-white relative left-14"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="block lg:hidden">
                <Slider {...settings}>
                    {caseStudies.map((caseStudy, index) => (
                        <div key={index} className="mb-36">
                            <div className="space-y-10 mx-2 py-10.5 px-13 h-60 rounded-5xl bg-black text-white">
                                <div className="text-p-mobile">{caseStudy}</div>
                                <LearnMoreSimpleGreen />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
