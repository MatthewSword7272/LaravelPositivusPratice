import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "./SectionHeading";

export default function TestimonialSection() {
    // settings for slider carousel
    // TODO: Center Mode does not change at breakpoints, need to fix
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "290px",
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => (
            <div>
                <ul style={{}}>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="before:bg-blue-500 before:opacity-75 before:hover:opacity-100">
                ●
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024, // This will apply to any screen larger than 1024px
                settings: {},
            },
        ],
    };

    // Function to customize Next Arrow
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, top: "100%", right: "10rem", zIndex: "2" }}
                onClick={onClick}
            >
                <img src="images/Arrow_right.svg"></img>
            </div>
        );
    }

    // Function to customize Previous Arrow
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className}`}
                style={{ ...style, top: "100%", left: "10rem", zIndex: "2" }}
                onClick={onClick}
            >
                <img src="images/Arrow_left.svg"></img>
            </div>
        );
    }

    // Dummy Data for Testimonials
    // TODO: Get data from database
    const testimonials = [
        {
            quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            position: "Marketing Director at XYZ Corp",
        },
        {
            quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            position: "Marketing Director at XYZ Corp",
        },
        {
            quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            position: "Marketing Director at XYZ Corp",
        },
    ];
    return (
        <div className="bg-black rounded-3xl pt-20 pb-18 mb-36">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    // Testimonial: Passes in Testimonial data
                    <Testimonial key={index} testimonial={testimonial} />
                ))}
            </Slider>
        </div>
    );
}
