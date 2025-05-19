import Slider from "react-slick";
import Heading from "./Heading";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const Testimonials = () => {
  const testimonialsData = {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  };

  const testimonialsArray = Array(3).fill(testimonialsData);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={"absolute right-1/4 -bottom-5 z-30 cursor-pointer"}
      >
        <FiArrowRight className={"text-white size-6"}></FiArrowRight>
      </div>
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={"absolute left-1/4 -bottom-5 z-30 cursor-pointer"}
      >
        <FiArrowLeft className={"text-white size-6"}></FiArrowLeft>
      </div>
    );
  }

  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "230px",
    centerMode: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "110px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <Heading
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
        heading={"Testimonials"}
      />

      <div className={"bg-dark rounded-4xl py-20"}>
        <Slider {...settings}>
          {testimonialsArray.map((test, index) => (
            <div key={index} className={"px-7 lg:mb-32 mb-16"}>
              <p
                className={
                  "mb-5 border-green border rounded-[3rem] text-white p-12"
                }
              >
                {test.quote}
              </p>
              {/* <svg
                className={"size-10 bottom-17 left-20 absolute z-30"}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5,10 L50,55" fill="none" stroke="#b9ff66" />

                <path d="M95,10 L50,55" fill="none" stroke="#b9ff66" />

                <path d="M5,10 L95,10" fill="none" stroke="#191a23" />
              </svg> */}
              <div className={"px-28"}>
                <h4 className={"text-green"}>{test.name}</h4>
                <p className={"text-white"}>{test.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
