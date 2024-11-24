export default function NavigationItems({ className }) {
    const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

    return (
        <ul className={className}>
            {navItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
