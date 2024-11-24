export default function NavigationItems({ className }) {
    //Gets CSS Classname
    const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"]; //Items for Navigation

    return (
        <div className={className}>
            {navItems.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
}
