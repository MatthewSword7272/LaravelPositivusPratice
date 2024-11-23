import CardSection from '@/Components/CardSection';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ }) {

    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className='w-[70%] flex items-center gap-x-10'>
                <h2 className='bg-lightGreen text-4xl font-semibold'>Services</h2>
                <div>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </div>
            </div>

            <CardSection/>

        </AppLayout>
    );
}
