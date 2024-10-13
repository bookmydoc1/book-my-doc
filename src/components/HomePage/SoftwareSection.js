import React, { useState } from 'react';
import SectionHeader from '../section-header.js';
import ContainerSection from '@/utils/ContainerSection';

const SoftwareSection = ({ title, description }) => {
    const [activeFeature, setActiveFeature] = useState(0);
    const features = [
        {
            icon: '/icons/telemedicine.svg',
            image: '/images/app-section/telemedicine.png',
            title: 'Telemedicine',
            desc: 'Expand your practice beyond physical boundaries, and offer online consultation services to your patients.'
        },
        {
            icon: '/icons/ehr.svg',
            image: '/images/app-section/ehr.png',
            title: 'EHR & EMR',
            desc: 'Expand your practice beyond physical boundaries, and offer online consultation services to your patients.'
        },
        {
            icon: '/icons/calender.svg',
            image: '/images/app-section/calender.png',
            title: 'Appointment Calendar',
            desc: 'Reviews build trust and reputation among patients. Get reviews from your patients, manage and respond directly from the app.'
        },
        {
            icon: '/icons/reviews.svg',
            image: '/images/app-section/reviews.png',
            title: 'Patient Reviews',
            desc: 'Reviews build trust and reputation among patients. Get reviews from your patients, manage and respond directly from the app.'
        },
        {
            icon: '/icons/management.svg',
            image: '/images/app-section/management.png',
            title: 'Patient Management',
            desc: 'Reviews build trust and reputation among patients. Get reviews from your patients, manage and respond directly from the app.'
        },
        {
            icon: '/icons/gateway.svg',
            image: '/images/app-section/gateway.png',
            title: 'Payment Gateway',
            desc: 'Reviews build trust and reputation among patients. Get reviews from your patients, manage and respond directly from the app.'
        },
        {
            icon: '/icons/portal.svg',
            image: '/images/app-section/portal.png',
            title: 'Admin Portal',
            desc: 'Reviews build trust and reputation among patients. Get reviews from your patients, manage and respond directly from the app.'
        },
        {
            icon: '/icons/growth.svg',
            image: '/images/app-section/growth.png',
            title: 'Practice Growth',
            desc: 'Reviews build trust and reputation among patients. Get reviews from your patients, manage and respond directly from the app.'
        },
    ]
    return (
        <ContainerSection className={'mb-16'}>
            <SectionHeader title={title} description={description} />
            <div className='grid grid-cols-8'>
                {features.map((feature, index) => (
                    <div onClick={() => setActiveFeature(index)} className='text-center cursor-pointer'>
                        <img className='h-11 m-auto' key={index} src={feature.icon} alt={feature.title} />
                        <h3 className={`${activeFeature === index ? 'text-secondary font-semibold' : 'text-gray font-medium'} text-xs whitespace-nowrap mt-1`}>{feature.title}</h3>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 gap-20 mt-10'>
                <img src={features[activeFeature].image} alt={features[activeFeature].title} />
                <div className='flex flex-col justify-between py-4'>
                    <img className='h-[5.2rem] w-max' src={features[activeFeature].icon} alt="icon" />
                    <h3 className='text-xl font-semibold'>{features[activeFeature].title}</h3>
                    <p className='text-sm text-gray'>{features[activeFeature].desc}</p>
                </div>
            </div>
        </ContainerSection>
    );
}

export default SoftwareSection;
