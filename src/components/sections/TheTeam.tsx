import Button from "../Button";
import Heading from "../Heading";
import TeamMember from "../TeamMember";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    profileImage: `./team/john_smith.png`,
  },
  {
    name: "Jane Smith",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    profileImage: `./team/jane_smith.png`,
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    profileImage: `./team/micheal_brown.png`,
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    profileImage: `./team/emily_johnson.png`,
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    profileImage: `./team/brian_williams.png`,
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    profileImage: `./team/sarah_kim.png`,
  },
];

const TheTeam = () => {
  return (
    <>
      <Heading
        description={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
        heading={"Team"}
      />
      <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"}>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            delay={index}
            role={member.role}
            name={member.name}
            description={member.description}
            image={member.profileImage}
          />
        ))}
      </div>
      <div className={"flex lg:justify-end"}>
        <Button className={"lg:w-64 w-full"} style={"dark"}>
          See all team
        </Button>
      </div>
    </>
  );
};

export default TheTeam;
