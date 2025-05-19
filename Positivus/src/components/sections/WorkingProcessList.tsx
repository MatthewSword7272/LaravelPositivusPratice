import Heading from "../Heading";
import Process from "../Process";

const WorkingProcessList = () => {
  const process = [
    {
      id: 1,
      heading: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      heading: "Research and Strategy Development",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 3,
      heading: "Implementation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 4,
      heading: "Monitoring and Optimization",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 5,
      heading: "Reporting and Communication",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 6,
      heading: "Continual Improvement",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <>
      <Heading
        backgroundColor={"bg-green"}
        description={"Step-by-Step Guide to Achieving Your Business Goals"}
        heading={"Our Working Process"}
      />
      <div className={"space-y-7"}>
        {process.map((step) => (
          <Process
            key={step.id}
            id={step.id}
            heading={step.heading}
            description={step.description}
          />
        ))}
      </div>
    </>
  );
};

export default WorkingProcessList;
