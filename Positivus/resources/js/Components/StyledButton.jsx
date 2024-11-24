export default function StyledButton({
    buttonText,
    bgColour = "#191A23",
    textColour = "#191A23",
}) {
    // Styled Button, gets button text. Background Colour and Text Colour are black by default
    //Overrides are needed for colour change
    return (
        <button
            className="border border-black font-semibold rounded-2xl py-5 px-10 transition hover:!bg-gray duration-200 w-full lg:w-auto"
            style={{ backgroundColor: bgColour, color: textColour }}
        >
            {buttonText}
        </button>
    );
}
