import Heading from "../Heading";
import Button from "../Button";

const ContactUs = () => {
  return (
    <>
      <Heading
        heading={"Contact Us"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
        backgroundColor={"bg-green"}
      />

      <div
        className={
          "bg-grey rounded-4xl relative lg:py-[60px] py-10 lg:px-24 px-7 lg:pr-0 flex justify-between"
        }
      >
        <form className={"flex flex-col justify-between lg:w-1/2 w-full gap-5"}>
          <div className={"flex gap-x-10 max-lg:justify-center"}>
            <div className={"flex gap-x-4 items-center"}>
              <input type="radio" id="hi" name="form" value="hi"></input>
              <label htmlFor="hi">Say Hi</label>
            </div>
            <div className={"flex gap-x-4 items-center"}>
              <input type="radio" id="quote" name="form" value="quote" />
              <label htmlFor="quote">Get a Quote</label>
            </div>
          </div>

          <div className={"flex flex-col gap-2"}>
            <label htmlFor="Name">Name</label>
            <input name="Name" type={"text"} placeholder={"Name"} />
          </div>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="Email">Email*</label>
            <input name="Email" type={"email"} placeholder={"Email"} />
          </div>
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="message">Message</label>
            <textarea rows={5} name="Message" placeholder={"Message"} />
          </div>
          <Button className={"w-full max-lg:hidden"} style={"dark"}>
            Send Message
          </Button>
        </form>
        <div className={"max-lg:hidden"}>
          <img src="./contact_us.svg" alt="" />
        </div>
      </div>
      <Button className={"w-full lg:hidden -mt-5"} style={"dark"}>
        Send Message
      </Button>
    </>
  );
};

export default ContactUs;
