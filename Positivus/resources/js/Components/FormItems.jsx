import { useState } from "react";
import StyledButton from "./StyledButton";

export default function FormItems() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="space-y-5 py-2.5">
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
                    onChange={() => setName(e.target.value)}
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
                    onChange={() => setEmail(e.target.value)}
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
                    onChange={() => setMessage(e.target.value)}
                    placeholder={"Message"}
                    className="formField h-48"
                ></textarea>
            </div>
            <StyledButton
                buttonText="Send Message"
                bgColour="bg-black"
                textColour="text-white"
            />
        </div>
    );
}
