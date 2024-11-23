export default function SectionHeading({title, children}) {
    return (
        <div className='lg:w-[70%] flex items-center flex-col lg:flex-row w-full gap-10'>
            <h2 className='bg-lightGreen text-4xl font-semibold rounded py-0.5 px-1 whitespace-nowrap'>{title}</h2>
            <span className="text-center lg:text-start">{children}</span>
        </div>
    )
}
