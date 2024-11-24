import StyledButton from "./StyledButton";

export default function NewsletterSubscription() {
    return (
        <div className="w-full lg:flex-row flex-col rounded-xl bg-[#292A32] flex items-center justify-center gap-6 px-5 py-8">
            <input
                placeholder="Email"
                className="bg-[#292A32] text-white rounded-xl p-5 lg:w-1/2 w-full"
            />
            <StyledButton bgColour="#b9ff66" buttonText="Subscribe to news" />
        </div>
    );
}
