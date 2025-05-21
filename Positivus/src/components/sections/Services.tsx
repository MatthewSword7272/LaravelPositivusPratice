import Heading from "../Heading";
import Service from "../Service";

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
          <Service key={index} delay={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
