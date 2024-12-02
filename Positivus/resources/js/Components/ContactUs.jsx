import FormItems from './FormItems'
import ContactUsRadioButtons from './ContactUsRadioButtons'

export default function ContactUs() {
    return (
        <div className="bg-gray flex rounded-4xl w-full lg:pl-25 lg:pt-15 lg:pb-20 lg:pr-0 px-7.5 py-10 justify-between gap-x-5">
            <form className="flex flex-col lg:w-1/2 w-full">
                <ContactUsRadioButtons />
                <FormItems />
            </form>

            <div className="hidden lg:block">
                <img src="/images/contactUsImage.png" className=""></img>
            </div>
        </div>
    )
}
