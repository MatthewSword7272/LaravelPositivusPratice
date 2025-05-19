import ProfileImage from "./ProfileImage";
import { FaLinkedinIn } from "react-icons/fa6";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMember = ({ name, role, description, image }: TeamMemberProps) => {
  return (
    <div
      className={"shadow-box rounded-4xl border py-10 px-9 relative space-y-5"}
    >
      <div
        className={
          "absolute flex items-center justify-center top-5 right-5 size-8 bg-black rounded-full"
        }
      >
        <FaLinkedinIn className={" text-green"} />
      </div>
      <div className={"flex items-end gap-5"}>
        <ProfileImage image={image} />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default TeamMember;
