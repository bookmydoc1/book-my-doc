import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import SectionHeader from '../SectionHeader';
import Accordion from '../Accordian';
import Button from '../Button';

const FAQsection = ({ title }) => {

    const Faqs = [
        {
            title: "What is the purpose of this website?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla ut sit quo adipisci! Facere molestias dignissimos tenetur mollitia consequatur, explicabo perferendis vitae dolorum provident ipsam labore itaque sapiente laboriosam!"
        },
        {
            title: "What is the purpose of this website?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla ut sit quo adipisci! Facere molestias dignissimos tenetur mollitia consequatur, explicabo perferendis vitae dolorum provident ipsam labore itaque sapiente laboriosam!"
        },
        {
            title: "What is the purpose of this website?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla ut sit quo adipisci! Facere molestias dignissimos tenetur mollitia consequatur, explicabo perferendis vitae dolorum provident ipsam labore itaque sapiente laboriosam!"
        },
        {
            title: "What is the purpose of this website?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla ut sit quo adipisci! Facere molestias dignissimos tenetur mollitia consequatur, explicabo perferendis vitae dolorum provident ipsam labore itaque sapiente laboriosam!"
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
