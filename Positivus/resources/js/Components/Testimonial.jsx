export default function Testimonial({ testimonial }) {
    // Gets Testimonial Data
    return (
        <div className="text-white px-5">
            <div className=" border border-lightGreen px-3.25rem pt-12 pb-3.25rem rounded-5xl text-p">
                {testimonial.quote}
            </div>
            <div className="flex flex-col px-16 text-lg mt-12 mb-34">
                <span className="text-lightGreen font-medium">
                    {testimonial.name}
                </span>
                <span>{testimonial.position}</span>
            </div>
        </div>
    );
}
