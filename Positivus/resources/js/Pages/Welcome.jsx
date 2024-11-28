import AccordionSection from "@/Components/AccordionSection";
import CardSection from "@/Components/CardSection";
import SectionHeading from "@/Components/SectionHeading";
import TestimonialSection from "@/Components/TestimonialSection";
import ThingsHappen from "@/Components/ThingsHappen";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({}) {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <SectionHeading title={"Services"}>
                At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
            </SectionHeading>

            <CardSection />

            <ThingsHappen />

            <SectionHeading title={"Our Working Process"}>
                Explore Real-Life Examples of Our Proven Digital Marketing
                Success through Our Case Studies
            </SectionHeading>

            <AccordionSection />

            <TestimonialSection />
        </AppLayout>
    );
}
