export default function SectionHeading({ title, children }) {
    // Gets Title of Section and description fo section (children)
    return (
        <div className="xl:w-[70%] flex items-center flex-col lg:flex-row w-full gap-10 mb-20">
            <h2 className="bg-lightGreen text-h2-mobile lg:text-4xl font-semibold rounded py-0.5 px-1 lg:text-left text-center lg:whitespace-nowrap">
                {title}
            </h2>
            <span className="text-center lg:text-start lg:w-1/2 w-full lg:text-p text-p-mobile">
                {children}
            </span>
        </div>
    );
}
