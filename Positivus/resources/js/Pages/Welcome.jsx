import AccordionSection from '@/Components/AccordionSection'
import CardSection from '@/Components/CardSection'
import CaseStudies from '@/Components/CaseStudies'
import ContactUs from '@/Components/ContactUs'
import SectionHeading from '@/Components/SectionHeading'
import Team from '@/Components/Team'
import TestimonialSection from '@/Components/TestimonialSection'
import ThingsHappen from '@/Components/ThingsHappen'
import AppLayout from '@/Layouts/AppLayout'
import {Head} from '@inertiajs/react'

export default function Welcome({}) {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <SectionHeading title={'Services'}>
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These
                services include:
            </SectionHeading>

            <CardSection />

            <ThingsHappen />

            <SectionHeading title={'Case Studies'}>
                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </SectionHeading>

            <CaseStudies />

            <SectionHeading title={'Team'}>
                Meet the skilled and experienced team behind our successful digital marketing strategies
            </SectionHeading>
            <Team />

            <SectionHeading title={'Our Working Process'}>
                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </SectionHeading>

            <AccordionSection />

            <SectionHeading title={'Testimonials'}>
                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </SectionHeading>
            <TestimonialSection />

            <SectionHeading title={'Contact Us'}>Connect with Us: Let's Discuss Your Digital Marketing Needs</SectionHeading>
            <ContactUs />
        </AppLayout>
    )
}
