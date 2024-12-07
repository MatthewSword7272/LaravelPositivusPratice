export default function Testimonial({testimonial}) {
    // Gets Testimonial Data
    return (
        <div className="text-white relative px-5">
            <div className="border border-lightGreen lg:p-12 p-7.5 rounded-5xl lg:text-p text-p-mobile">
                {testimonial.quote}
                <div className="bg-red-500 text-white w-fit absolute left-24 bottom-24 text-center">TRIANGLE HERE</div>
            </div>
            <div className="flex flex-col px-16 text-lg mt-12 mb-34">
                <span className="text-lightGreen font-medium">{testimonial.name}</span>
                <span>{testimonial.position}</span>
            </div>
        </div>
    )
}
