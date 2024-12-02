export default function StyledButton({buttonText, bgColour = 'bg-black', textColour = 'bg-black'}) {
    // Styled Button, gets button text. Background Colour and Text Colour are black by default
    //Overrides are needed for colour change
    return (
        <button
            className={`border border-black text-h4 rounded-2xl py-5 lg:px-9 transition hover:!bg-gray duration-200 whitespace-nowrap lg:w-auto w-full ${bgColour} ${textColour}`}
        >
            {buttonText}
        </button>
    )
}
