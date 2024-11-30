export default function ContactInfo() {
    return (
        <div className="w-[55%] space-y-5 text-center lg:text-left text-p">
            <div>
                <span className="bg-lightGreen text-black font-semibold rounded-lg px-2 whitespace-nowrap text-h4">
                    Contact us:
                </span>
            </div>
            <div>Email: info@positivus.com</div>
            <div>Phone: 555-567-8901</div>
            <div>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
            </div>
        </div>
    );
}
