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
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: "150px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // This will apply to any screen larger than 1024px
                settings: {
                    centerMode: true,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 9999,
                settings: {
                    centerMode: false,
                    centerPadding: "50px",
                },
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
            />
        );
    }

    // Function to customize Previous Arrow
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, top: "100%", left: "10rem", zIndex: "2" }}
                onClick={onClick}
            />
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
        <div className="space-y-16">
            <SectionHeading title={"Testimonials"}>
                Explore Real-Life Examples of Our Proven Digital Marketing
                Success through Our Case Studies
            </SectionHeading>
            <div className="bg-black rounded-3xl px-8 py-16">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        // Testimonial: Passes in Testimonial data
                        <Testimonial key={index} testimonial={testimonial} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
