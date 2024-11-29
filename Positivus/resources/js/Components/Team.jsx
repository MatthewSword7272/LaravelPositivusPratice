import Divider from "./Divider";
import Portrait from "./Portrait";

export default function Team() {
    const teamMembers = [
        {
            name: "John Smith",
            position: "CEO and Founder",
            image: "/images/portrait.png",
            description:
                "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        },
        {
            name: "Jane Doe",
            position: "Director of Operations",
            image: "/images/portrait.png",
            description:
                "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        },
        {
            name: "Michael Brown",
            position: "Senior SEO Specialist",
            image: "/images/portrait.png",
            description:
                "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        },
        {
            name: "Emily Johnson",
            position: "PPC Manager",
            image: "/images/portrait.png",
            description:
                "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        },
        {
            name: "Brian Williams",
            position: "Social Media Specialist",
            image: "/images/portrait.png",
            description:
                "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        },
        {
            name: "Sarah Kim",
            position: "Content Creator",
            image: "/images/portrait.png",
            description:
                "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-10 mb-52">
            {teamMembers.map((member) => (
                <div className="border border-black border-b-6 rounded-4xl py-10 px-9">
                    <div className="flex gap-x-5">
                        {/* <Portrait image={member.image} /> */}
                        <img src={member.image}></img>
                        <div className="flex flex-col justify-between w-full">
                            <button className="flex justify-end">
                                <img
                                    src="/images/GreenLinkDin.svg"
                                    className="w-fit"
                                ></img>
                            </button>
                            <div className="flex flex-col">
                                <span className="text-h4 font-bold">
                                    {member.name}
                                </span>
                                <span className="text-p">
                                    {member.position}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Divider backgroundColor={"black"} />
                    <div className="text-p">{member.description}</div>
                </div>
            ))}
        </div>
    );
}
