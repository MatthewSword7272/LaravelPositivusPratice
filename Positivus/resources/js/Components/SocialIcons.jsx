export default function SocialIcons() {
    // Social Media Icon image names
    const socialIcons = ['linkedin', 'facebook', 'twitter']
    return (
        <div className="justify-end w-1/4 lg:flex hidden gap-5">
            {socialIcons.map((icon, index) => (
                <img key={index} src={`images/${icon}.svg`} alt={`${icon} icon`} />
            ))}
        </div>
    )
}
