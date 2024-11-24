export default function Testimonial({ testimonial }) {
    // Gets Testimonial Data
    return (
        <div className="text-white px-5">
            <div className=" border border-lightGreen p-12 rounded-3xl">
                {testimonial.quote}
            </div>
            <div className="flex flex-col px-16 py-8 text-lg">
                <span className="text-lightGreen font-medium">
                    {testimonial.name}
                </span>
                <span>{testimonial.position}</span>
            </div>
        </div>
    );
}
