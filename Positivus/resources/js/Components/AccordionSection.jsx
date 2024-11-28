import Accordion from "./Accordion";

export default function AccordionSection() {
    //Dummy data for Process
    // TODO: Get this data from database
    const processSteps = [
        {
            number: "01",
            title: "Consultation",
            content:
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
            number: "02",
            title: "Research and Strategy Development",
            content:
                "We conduct thorough market research and develop a comprehensive strategy tailored to your business objectives.",
        },
        {
            number: "03",
            title: "Implementation",
            content:
                "Our team executes the agreed-upon strategy with precision and attention to detail.",
        },
        {
            number: "04",
            title: "Monitoring and Optimization",
            content:
                "We continuously monitor performance and optimize our approach to ensure the best possible results.",
        },
    ];

    return (
        <div className="flex flex-col gap-y-7 mb-36">
            {processSteps.map((card, index) => (
                //Passes in fields from processSteps
                <Accordion
                    key={index}
                    number={card.number}
                    title={card.title}
                    content={card.content}
                />
            ))}
        </div>
    );
}
