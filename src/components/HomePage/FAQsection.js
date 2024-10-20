import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import SectionHeader from '../SectionHeader';
import Accordion from '../Accordian';
import Button from '../Button';

const FAQsection = ({ title }) => {

    const Faqs = [
        {
            title: "Does BookMyDoc offer a website for doctors?",
            content: "BookMyDoc understands the unique needs of doctors in India, and offers tailor-made websites to cater to those needs. These websites are designed to be mobile-responsive, SEO-friendly, and make it convenient for patients to book appointments directly from the website."
        },
        {
            title: "How does the telehealth feature work?",
            content: "Doctors can conduct virtual consultations through secure video calls, and issue digital prescriptions to patients."
        },
        {
            title: "Can patients access their medical records?",
            content: "a. Yes, patients can securely access their medical records after each consultation, ensuring transparency and continuity in care."
        },
        {
            title: "Can I manage my profile from anywhere?",
            content: "Yes, you can access and manage your profile, appointments, and patient data from any device with an internet connection."
        },
        {
            title: "Is patient information secure on BookMyDoc?",
            content: " Absolutely. BookMyDoc uses encrypted data storage and complies with all medical privacy regulations to ensure data security."
        },
    ]

    return (
        <div className='bg-primary/[.1] py-10 md:py-16'>
            <ContainerSection>
                <SectionHeader title={title} />
                <div className='mt-10 container'>
                    <Accordion items={Faqs} />
                </div>
                <div className='flex gap-3 justify-center mt-8'>
                    <Button variant='primary'>
                        Download Free App
                    </Button>
                    <Button variant='secondary'>
                        Join Now For Free
                    </Button>
                </div>
            </ContainerSection>
        </div>
    );
}

export default FAQsection;
