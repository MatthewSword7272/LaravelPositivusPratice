import { useState } from "react";
import RadioButtons from "./RadioButtons";

export default function FormItems() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    return (
        <>
            <RadioButtons />
            <div className="space-y-5">
                {/* Name */}
                <div className="flex flex-col">
                    <label name={"name"} htmlFor={"name"}>
                        Name*
                    </label>
                    <input
                        value={name}
                        name={"name"}
                        required
                        placeholder={"Name"}
                        onChange={handleNameChange}
                        className="formField h-14"
                    ></input>
                </div>
                {/* Email */}
                <div className="flex flex-col">
                    <label name={"email"} htmlFor={"email"}>
                        Email*
                    </label>
                    <input
                        value={email}
                        name={"email"}
                        type="email"
                        required
                        placeholder={"Email"}
                        onChange={handleEmailChange}
                        className="formField h-14"
                    ></input>
                </div>
                {/* Message */}
                <div className="flex flex-col">
                    <label name={"message"} htmlFor={"message"}>
                        Message*
                    </label>
                    <textarea
                        value={message}
                        name={"message"}
                        required
                        onChange={handleMessageChange}
                        placeholder={"Message"}
                        className="formField h-48"
                    ></textarea>
                </div>
                <button className="text-xl bg-black text-white w-full py-5 rounded-xl">
                    Send Message
                </button>
            </div>
        </>
    );
}
