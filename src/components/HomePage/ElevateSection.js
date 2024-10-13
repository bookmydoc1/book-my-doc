import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import SectionHeader from '../section-header';

const ElevateSection = ({ title, description }) => {
    const technologies = [
        {
            title: "Connect With Your Patients Via Telemedicine",
            desc: "Expand your practice with Book My Doc's secure online consultation app. Connect via HD video/audio, manage patients remotely, and get notified when patients join the waiting room.",
            link: "Start your Online Consultation",
            image: "/images/elevate-section/1.png",
        },
        {
            title: "Enhance patient care with EHR and EMR.",
            desc: "Digitize patient records with Book My Doc’s EHR and EMR to secure health data for future reference. Create personalized online prescriptions and access patient records during consultations or anytime.",
            link: "Start writing Online Prescription",
            image: "/images/elevate-section/2.png",
        },
        {
            title: "Connect With Your Patients Via Telemedicine",
            desc: "Expand your practice with Book My Doc's secure online consultation app. Connect via HD video/audio, manage patients remotely, and get notified when patients join the waiting room.",
            link: "Start your Online Consultation",
            image: "/images/elevate-section/1.png",
        },
        {
            title: "Enhance patient care with EHR and EMR.",
            desc: "Digitize patient records with Book My Doc’s EHR and EMR to secure health data for future reference. Create personalized online prescriptions and access patient records during consultations or anytime.",
            link: "Start writing Online Prescription",
            image: "/images/elevate-section/2.png",
        },
        {
            title: "Connect With Your Patients Via Telemedicine",
            desc: "Expand your practice with Book My Doc's secure online consultation app. Connect via HD video/audio, manage patients remotely, and get notified when patients join the waiting room.",
            link: "Start your Online Consultation",
            image: "/images/elevate-section/1.png",
        },
        {
            title: "Enhance patient care with EHR and EMR.",
            desc: "Digitize patient records with Book My Doc’s EHR and EMR to secure health data for future reference. Create personalized online prescriptions and access patient records during consultations or anytime.",
            link: "Start writing Online Prescription",
            image: "/images/elevate-section/2.png",
        },
    ]

    return (
        <ContainerSection>
            <SectionHeader title={title} description={description} descriptionClass={'!w-[60%]'} />
            <div className="h-[calc(2*theme('spacing.44')+theme('spacing.7'))] overflow-y-auto space-y-6 scrollbar-hide">
                {technologies.map((tech, i) => (
                    <div key={i} className="grid grid-cols-3 gap-10 items-center border border-gray/[.2] rounded-lg p-4">
                        <div className="text-[1.4rem] text-black font-medium">{tech.title}</div>
                        <div>
                            <p className="text-gray-600 text-xs leading-5">{tech.desc}</p>
                            <a href={tech.link} className="text-secondary text-xs underline mt-4 inline-block">
                                {tech.link}
                            </a>
                        </div>
                        <img src={tech.image} alt={tech.title} />
                    </div>
                ))}
            </div>

        </ContainerSection>
    );
}

export default ElevateSection;
