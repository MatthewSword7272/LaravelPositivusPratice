export default function ContactInfo() {
    return (
        <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
            <div>
                <span className="bg-lightGreen text-black font-semibold rounded py-0.5 px-1 whitespace-nowrap">
                    Contact us:
                </span>
            </div>
            <div>Email: info@positivus.com</div>
            <div>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
            </div>
        </div>
    );
}
