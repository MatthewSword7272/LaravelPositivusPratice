export default function RadioButtons() {
    const radioButtons = [
        { name: "Say Hi", value: "say-hi" },
        { name: "Get A Quote", value: "get-quote" },
    ];

    return (
        <div className="flex mb-10 items-center gap-9">
            {radioButtons.map((radioButton) => (
                <div className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        value={radioButton.value}
                        name={"radio"}
                        id={radioButton.name}
                        className={"customRadioButton"}
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
    );
}
