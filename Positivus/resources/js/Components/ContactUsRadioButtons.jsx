export default function ContactUsRadioButtons() {
    const radioButtons = [
        {name: 'Say Hi', value: 'say-hi'},
        {name: 'Get A Quote', value: 'get-quote'},
    ]

    return (
        <div className="flex lg:mb-10 mb-9 lg:gap-9 gap-15 justify-center lg:justify-start">
            {radioButtons.map((radioButton) => (
                <div className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        value={radioButton.value}
                        name={'radio'}
                        id={radioButton.name}
                        className={'customRadioButton'}
                    ></input>
                    <label name={'radio'} htmlFor={radioButton.name} className="text-p ml-4 cursor-pointer">
                        {radioButton.name}
                    </label>
                </div>
            ))}
        </div>
    )
}
