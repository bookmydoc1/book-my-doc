import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader.js';
import ContainerSection from '@/utils/ContainerSection';

const SoftwareSection = ({ title, description }) => {
    const [activeFeature, setActiveFeature] = useState(null);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setActiveFeature(features[0]);
        }
    }, []);

    const features = [
        {
            id: 1,
            icon: '/icons/telemedicine.svg',
            image: '/images/app-section/telemedicine.png',
            title: 'Telemedicine',
            desc: 'Broaden your practice beyond physical limits by providing online consultation services to your patients.'
        },
        {
            id: 2,
            icon: '/icons/ehr.svg',
            image: '/images/app-section/ehr.png',
            title: 'EHR & EMR',
            desc: 'EHR and EMR systems will efficiently organise patient records, making them easily accessible without the challenges of maintaining physical documentation. With BookMyDoc, you can access any patient’s records within seconds, streamlining your workflow and enhancing patient care.'
        },
        {
            id: 3,
            icon: '/icons/calender.svg',
            image: '/images/app-section/calender.png',
            title: 'Appointment Calendar',
            desc: 'The built-in appointment calendar will help you manage your schedule and enable you to add offline appointments, ensuring a more organised and productive workday.'
        },
        {
            id: 4,
            icon: '/icons/reviews.svg',
            image: '/images/app-section/reviews.png',
            title: 'Patient Reviews',
            desc: 'Reviews foster trust and enhance your reputation among patients. Collect feedback from your patients and manage responses directly through our app.'
        },
        {
            id: 5,
            icon: '/icons/management.svg',
            image: '/images/app-section/management.png',
            title: 'Patient Management',
            desc: 'The integrated patient management system tracks previous prescriptions you’ve issued, along with any test reports uploaded by the patient, making patient care simpler and more efficient.'
        },
        {
            id: 6,
            icon: '/icons/gateway.svg',
            image: '/images/app-section/gateway.png',
            title: 'Payment Gateway',
            desc: 'The integrated payment gateway allows easily managed finances. '
        },
        {
            id: 7,
            icon: '/icons/portal.svg',
            image: '/images/app-section/portal.png',
            title: 'Admin Portal',
            desc: 'The admin portal centralises all administrative tasks into a single dashboard, eliminating the need to switch between different tasks. The built-in customizable checklist feature ensures that no administrative duties are overlooked at the end of each business day.'
        },
        {
            id: 8,
            icon: '/icons/growth.svg',
            image: '/images/app-section/growth.png',
            title: 'Practice Growth',
            desc: 'Your Google My Business account, combined with our social media team, enhances your reach in both online and offline spheres, resulting in a positive impact on your practice.'
        },
    ]
    return (
        <ContainerSection className={'mb-16'}>
            <SectionHeader title={title} description={description} />
            <div className='grid grid-cols-2 md:grid-cols-8 gap-3 md:gap-0'>
                {features.map((feature, index) => (
                    <div key={index} onClick={() => setActiveFeature(feature)} className='text-center cursor-pointer border md:border-none border-primary/[.2] rounded-lg py-4 md:py-0'>
                        <img className='h-11 m-auto' key={index} src={feature.icon} alt={feature.title} />
                        <h3 className={`${activeFeature === index ? 'text-secondary font-semibold' : 'text-gray font-medium'} text-xs whitespace-nowrap mt-1`}>{feature.title}</h3>
                    </div>
                ))}
            </div>
            {
                activeFeature ?
                    <div className='hidden md:grid grid-cols-2 gap-20 mt-10'>
                        <img src={activeFeature?.image} alt={activeFeature?.title} />
                        <div className='flex flex-col justify-between py-4'>
                            <img className='h-[5.2rem] w-max' src={activeFeature?.icon} alt="icon" />
                            <h3 className='text-xl font-semibold'>{activeFeature?.title}</h3>
                            <p className='text-sm text-gray'>{activeFeature?.desc}</p>
                        </div>
                    </div>
                    :
                    null
            }
        </ContainerSection>
    );
}

export default SoftwareSection;
