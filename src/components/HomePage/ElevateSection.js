import ContainerSection from '@/utils/ContainerSection';
import React, { useRef } from 'react';
import SectionHeader from '../section-header';
import Carousel from 'react-multi-carousel';
import { IoIosArrowBack } from 'react-icons/io';

const ElevateSection = ({ title, description }) => {
    const carouselRef = useRef();
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

    const CustomLeftArrow = ({ onClick }) => (
        <button
            className="border text-secondary hover:text-white border-secondary hover:border-primary h-10 w-10 flex items-center justify-center bg-gray-800 hover:bg-primary/[.8] rounded-full transition-all ease-in-out duration-300"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button
            className="border text-secondary hover:text-white border-secondary hover:border-primary h-10 w-10 flex items-center justify-center bg-gray-800 hover:bg-primary/[.8] rounded-full transition-all ease-in-out duration-300"
            onClick={onClick}
        >
            <IoIosArrowBack className='transform rotate-180' />
        </button>
    );

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <ContainerSection>
            <SectionHeader title={title} description={description} descriptionClass={'md:!w-[60%]'} />
            <div className="hidden md:block h-[calc(2*theme('spacing.44')+theme('spacing.7'))] overflow-y-auto space-y-6 scrollbar-hide">
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
            <div className='md:hidden'>
                <Carousel
                    ref={carouselRef}
                    responsive={responsive}
                    arrows={false}
                    customTransition="transform 300ms ease-in-out"
                    containerClass="carousel-container-no-padding"
                    itemClass="px-4"
                    renderButtonGroupOutside={true}
                    infinite
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {technologies.map((tech, i) => (
                        <div key={i} className="border border-gray/[.2] rounded-lg p-4">
                            <div className="text-[1.4rem] text-black font-medium mb-2">{tech.title}</div>
                            <div>
                                <p className="text-gray-600 text-sm leading-5">{tech.desc}</p>
                                <a href={tech.link} className="text-secondary text-xs underline mt-4 mb-2 inline-block">
                                    {tech.link}
                                </a>
                            </div>
                            <img src={tech.image} alt={tech.title} />
                        </div>
                    ))}
                </Carousel>
                <div className='flex justify-center mt-4 gap-4'>
                    <CustomLeftArrow onClick={() => carouselRef.current.previous()} />
                    <CustomRightArrow onClick={() => carouselRef.current.next()} />
                </div>
            </div>

        </ContainerSection>
    );
}

export default ElevateSection;
