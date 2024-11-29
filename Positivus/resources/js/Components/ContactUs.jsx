export default function ContactUs() {
    const radioButtons = [
        { name: "Say Hi", value: "say-hi" },
        { name: "Get A Quote", value: "get-quote" },
    ];

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
                <div className="flex mb-10 items-center gap-9">
                    {radioButtons.map((radioButton) => (
                        <div className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                value={radioButton.value}
                                name={"radio"}
                                id={radioButton.name}
                            ></input>
                            <label
                                name={"radio"}
                                htmlFor={radioButton.name}
                                className="text-p ml-4 cursor-pointer"
                            >
                                {radioButton.name}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="space-y-5">
                    <div className="flex flex-col">
                        <label name={"name"} htmlFor={"name"}>
                            Name*
                        </label>
                        <input
                            value={""}
                            name={"name"}
                            required
                            placeholder={"Name"}
                            className="rounded-xl border-black px-8 py-5 mt-1"
                        ></input>
                    </div>
                    <div className="flex flex-col">
                        <label name={"email"} htmlFor={"email"}>
                            Email*
                        </label>
                        <input
                            value={""}
                            name={"email"}
                            type="email"
                            required
                            placeholder={"Email"}
                            className="rounded-xl border-black px-8 py-5 mt-1"
                        ></input>
                    </div>
                    <div className="flex flex-col">
                        <label name={"message"} htmlFor={"message"}>
                            Message*
                        </label>
                        <textarea
                            value={""}
                            name={"message"}
                            required
                            placeholder={"Message"}
                            className="rounded-xl border-black px-8 py-5 h-48 mt-1"
                        ></textarea>
                    </div>
                    <button className="text-xl bg-black text-white w-full py-5 rounded-xl">
                        Send Message
                    </button>
                </div>
            </form>

            <div>
                <img src="/images/contactUsImage.png" className=""></img>
            </div>
        </div>
    );
}
