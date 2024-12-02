import ContactInfo from './ContactInfo'
import Divider from './Divider'
import NavigationItems from './NavItems'
import NewsletterSubscription from './NewsletterSubscription'
import SocialIcons from './SocialIcons'
import WhiteLogo from './WhiteLogo'

export default function Footer() {
    return (
        <div className="bg-black rounded-none lg:rounded-tl-[50px] lg:rounded-tr-[50px] p-14 lg:mx-24 text-white mt-32">
            <div className="flex lg:flex-row flex-col items-center">
                <WhiteLogo />
                {/* Passes in CSS Classname */}
                <NavigationItems className="underline flex flex-col lg:flex-row text-md xl:text-2xl justify-center items-center w-full gap-10 whitespace-nowrap" />
                <SocialIcons />
            </div>
            <div className="flex flex-col lg:flex-row my-10 items-center justify-between gap-36">
                <ContactInfo />
                <NewsletterSubscription />
            </div>
            {/* Passes in background Colour */}
            <Divider backgroundColor={'bg-white'} />
            <div className="flex items-start">
                <span>&copy;2023 Positivus. All Rights Reserved.</span>
            </div>
        </div>
    )
}
