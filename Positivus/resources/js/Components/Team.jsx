import Divider from './Divider'

export default function Team() {
    const teamMembers = [
        {
            name: 'John Smith',
            position: 'CEO and Founder',
            image: '/images/portrait.png',
            description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        },
        {
            name: 'Jane Doe',
            position: 'Director of Operations',
            image: '/images/portrait.png',
            description:
                '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        },
        {
            name: 'Michael Brown',
            position: 'Senior SEO Specialist',
            image: '/images/portrait.png',
            description:
                '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        },
        {
            name: 'Emily Johnson',
            position: 'PPC Manager',
            image: '/images/portrait.png',
            description:
                '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        },
        {
            name: 'Brian Williams',
            position: 'Social Media Specialist',
            image: '/images/portrait.png',
            description:
                '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        },
        {
            name: 'Sarah Kim',
            position: 'Content Creator',
            image: '/images/portrait.png',
            description:
                '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
        },
    ]

    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mb-52">
            {teamMembers.map((member) => (
                <div className="border border-black border-b-6 rounded-4xl py-10 px-9">
                    <div className="flex gap-x-5 items-stretch">
                        {/* <Portrait image={member.image} /> */}
                        <img src={member.image} className=" object-contain"></img>
                        <div className="flex flex-col justify-between w-full">
                            <button className="flex justify-end">
                                <img src="/images/GreenLinkDin.svg" className="w-fit"></img>
                            </button>
                            <div className="flex flex-col">
                                <span className="lg:text-h4 text-h4-mobile font-bold">{member.name}</span>
                                <span className="lg:text-p text-p-mobile">{member.position}</span>
                            </div>
                        </div>
                    </div>
                    <Divider backgroundColor={'bg-black'} />
                    <div className="lg:text-p text-p-mobile">{member.description}</div>
                </div>
            ))}
        </div>
    )
}
