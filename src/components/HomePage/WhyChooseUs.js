import React from 'react';
import SectionHeader from '../section-header.js';
import ContainerSection from '@/utils/ContainerSection';
import Button from '../Button';

const WhyChooseUs = ({ title, description }) => {
    const cardData = [
        {
            heading: 'Enhance Patient Experience',
            desc: 'Enhance patient satisfaction with Book My Doc. Online scheduling, automated reminders, and teleconsultations foster trust and encourage patient loyalty.'
        },
        {
            heading: 'Better Patient Care Delivery',
            desc: "Empower your practice with Book My Doc’s cloud-based EHR, clinical tools, and online prescription system to deliver better patient care, giving you more time to focus on what truly matters—your patients' health."
        },
        {
            heading: 'Automate Your Practice',
            desc: 'Streamline your practice with Book My Doc’s clinic management app. Providers reduce workload, while patients enjoy increased convenience and ease. Everyone wins!'
        },
        {
            heading: 'Automate Your Practice',
            desc: 'Streamline your practice with Book My Doc’s clinic management app. Providers reduce workload, while patients enjoy increased convenience and ease. Everyone wins!'
        },
    ]
    return (
        <ContainerSection>
            <SectionHeader title={title} description={description} />
            <div className='flex'>
                <div className='flex-1'>
                    <img src="/images/doctor.png" alt="image" />
                </div>
                <div className='flex-1 relative'>
                    <div className='flex w-full flex-col gap-3 px-4 max-h-[85vh] overflow-y-auto scrollbar-hide'>
                        {
                            cardData.map((item, index) => (
                                <div className='bg-blue-50 p-6 rounded relative'>
                                    <h3 className='font-medium text-2xl mb-3'>{item.heading}</h3>
                                    <p className='text-gray text-sm'>{item.desc}</p>
                                    <div className='absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] h-14 w-14 rounded-full bg-white'></div>
                                </div>
                            )
                            )}
                        <div className='absolute w-full h-[30px] bottom-0 bg-white blur-[20px]'></div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-6'>
                <Button className='m-auto' variant='primary'>
                    Start Your Free Journey
                </Button>
            </div>
        </ContainerSection>
    );
}

export default WhyChooseUs;