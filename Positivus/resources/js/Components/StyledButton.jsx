export default function StyledButton({buttonText, bgColour = '#191A23', textColour = '#191A23'}) {
    return (
        <button
            className="border border-black rounded-2xl py-5 px-10 transition hover:bg-gray-200 duration-200 w-full lg:w-auto"
            style={{backgroundColor: bgColour, color: textColour}}
        >{buttonText}</button>
    )
}
