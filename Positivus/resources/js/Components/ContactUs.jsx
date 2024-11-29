import FormItems from "./FormItems";

export default function ContactUs() {
    const form = [
        {
            title: "Name",
            id: "name",
        },
        {
            title: "Email",
            id: "name",
        },
        {
            title: "Name",
            id: "name",
        },
    ];
    return (
        <div className="bg-gray flex rounded-5xl w-full pl-25 pt-15 pb-20 justify-between">
            <form className="flex flex-col w-1/2">
                <FormItems />
            </form>

            <div>
                <img src="/images/contactUsImage.png" className=""></img>
            </div>
        </div>
    );
}
