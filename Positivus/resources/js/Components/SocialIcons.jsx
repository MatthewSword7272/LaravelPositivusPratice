export default function SocialIcons() {
    const socialIcons = ["linkedin", "facebook", "twitter"];
    return (
        <div className="justify-between w-[200px] lg:flex hidden">
            {socialIcons.map((icon, index) => (
                <img
                    key={index}
                    src={`images/${icon}.svg`}
                    alt={`${icon} icon`}
                />
            ))}
        </div>
    );
}
