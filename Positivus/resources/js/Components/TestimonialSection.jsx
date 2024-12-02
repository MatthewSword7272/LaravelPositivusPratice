import Slider from 'react-slick'
import Testimonial from './Testimonial'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function TestimonialSection() {
    // settings for slider carousel
    // TODO: Center Mode does not change at breakpoints, need to fix
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '290px',
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerMode: false,
                },
            },
        ],
    }

    // Function to customize Next Arrow
    function NextArrow(props) {
        const {className, style, onClick} = props
        return (
            <button className={className} style={{...style, right: '15%'}} onClick={onClick}>
                <img src="images/Arrow_right.svg"></img>
            </button>
        )
    }

    // Function to customize Previous Arrow
    function PrevArrow(props) {
        const {className, style, onClick} = props
        return (
            <button className={className} style={{...style, left: '15%'}} onClick={onClick}>
                <img src="images/Arrow_left.svg"></img>
            </button>
        )
    }

    // Dummy Data for Testimonials
    // TODO: Get data from database
    const testimonials = [
        {
            quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
            name: 'John Smith',
            position: 'Marketing Director at XYZ Corp',
        },
        {
            quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
            name: 'John Smith',
            position: 'Marketing Director at XYZ Corp',
        },
        {
            quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
            name: 'John Smith',
            position: 'Marketing Director at XYZ Corp',
        },
        {
            quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
            name: 'John Smith',
            position: 'Marketing Director at XYZ Corp',
        },
        {
            quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
            name: 'John Smith',
            position: 'Marketing Director at XYZ Corp',
        },
    ]
    return (
        <div className="xl:flex xl:justify-center">
            <div className="bg-black max-w-7xl rounded-4xl pt-20 pb-18 mb-36">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        // Testimonial: Passes in Testimonial data
                        <Testimonial key={index} testimonial={testimonial} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
