import Heading from "../Heading";
import Link from "../Link";

const services = [
  {
    heading: ["Search engine", "optimization"],
    colorCode: 1,
    image: "./services/search_engine.png",
  },
  {
    heading: ["Pay-per-click", "advertising"],
    colorCode: 2,
    image: "./services/pay-per-click.png",
  },
  {
    heading: ["Social Media", "Marketing"],
    colorCode: 3,
    image: "./services/social_media.png",
  },
  {
    heading: ["Email", "Marketing"],
    colorCode: 1,
    image: "./services/email.png",
  },
  {
    heading: ["Content", "Creation"],
    colorCode: 2,
    image: "./services/content_creation.png",
  },
  {
    heading: ["Analytics and", "Tracking"],
    colorCode: 4,
    image: "./services/analytics.png",
  },
];

const Services = () => {
  return (
    <>
      <Heading
        backgroundColor="bg-green"
        heading="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="grid lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex justify-between items-center rounded-4xl p-12 lg:gap-10 border shadow-box min-h-80 ${
              service.colorCode === 1
                ? "bg-grey"
                : service.colorCode === 2
                ? "bg-green"
                : "bg-black"
            }`}
          >
            <div className="flex flex-col w-1/2 h-full justify-between">
              <h3 className={`flex flex-col`}>
                {service.heading.map((text, index) => (
                  <span
                    key={index}
                    className={`px-1 w-fit rounded ${
                      service.colorCode === 1 || service.colorCode === 4
                        ? "bg-green"
                        : "bg-white"
                    }`}
                  >
                    {text}
                  </span>
                ))}
              </h3>

              <Link
                style={
                  service.colorCode === 1 || service.colorCode === 2
                    ? "black"
                    : "white_2"
                }
              >
                <span className={`max-lg:hidden`}>Learn More</span>
              </Link>
            </div>
            <div className="lg:w-52 h-full lg:content-center content-end">
              <img className={""} src={service.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
