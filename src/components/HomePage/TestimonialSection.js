import ContainerSection from '@/utils/ContainerSection';
import React, { useRef } from 'react';
import SectionHeader from '../SectionHeader';
import ReactStars from 'react-stars'
import Carousel from 'react-multi-carousel';
import { IoIosArrowBack } from 'react-icons/io';

const Testimonial = ({ title }) => {
    const carouselRef = useRef();

    const CustomLeftArrow = ({ onClick }) => (
        <button
            className="lg:absolute top-[50%] -translate-y-[50%] border text-secondary hover:text-white border-secondary hover:border-primary h-10 w-10 flex items-center justify-center bg-gray-800 hover:bg-primary/[.8] rounded-full transition-all ease-in-out duration-300"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button
            className="lg:absolute top-[50%] -translate-y-[50%] right-0 border text-secondary hover:text-white border-secondary hover:border-primary h-10 w-10 flex items-center justify-center bg-gray-800 hover:bg-primary/[.8] rounded-full transition-all ease-in-out duration-300"
            onClick={onClick}
        >
            <IoIosArrowBack className='transform rotate-180' />
        </button>
    );

    const slides = [
        {
            image: '/images/video-section/image1.png',
            review: "Having extensive telemedicine experience, I can say with command that BookMyDoc stands apart in offering practice growth platform for the doctors that enables them in managing their clinic, their practice and their patient care throughout various touch-points both online and offline.",
            name: "Dr. Haleema Yezdani",
            title: "Global future 50 clinical leader in HIMSS",
            location: "South Delhi",
            stars: 5,
        },
        {
            image: '/images/video-section/image2.png',
            review: 'Highly recommend BookMyDoc for clinic appointments software and website development. The team has been very prompt and helpful over the past year and am especially happy with the follow-up of appointments booked through the website. Their App is a one-stop solution for all patient and clinic-related information. Hoping for a fruitful association in the coming year as well.',
            name: "Dr. Manni Hingorani",
            title: "ENT Surgeon",
            location: "South Delhi",
            stars: 4,
        },
        {
            image: '/images/video-section/image1.png',
            review: 'Extremely satisfied with my association with BookMyDoc. Especially happy with the way they have engaged patients on my Google profile facilitating easy reach for diabetes patients to my practice. They started social media posts basis my recommendation. I receive 4-5 posts every week which I post on my social media, and getting attractions from there as well. Kudos to the great team. Would highly recommend BookMyDoc to fellow doctors, looking to grow their practice.',
            name: "Dr. Anuradha Kapoor",
            title: "Dr A Kapoor's Diabetes Control Clinic",
            location: "Mumbai",
            stars: 5,
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
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
            <SectionHeader title={title} />
            <div className='relative mt-6'>
                <div className='hidden lg:block'>
                    <CustomLeftArrow onClick={() => carouselRef.current.previous()} />
                    <CustomRightArrow onClick={() => carouselRef.current.next()} />
                </div>
                <div className='lg:px-10'>
                    <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        arrows={false}
                        customTransition="transform 300ms ease-in-out"
                        containerClass=""
                        itemClass="p-4"
                        infinite
                    >
                        {slides.map((item, index) => (
                            <div key={index} className="h-auto lg:h-52 testimonial p-6 pb-12 lg:pb-6 lg:pr-12 flex flex-col lg:flex-row gap-10">
                                <img src={item.image} alt={`Slide ${index + 1}`} className="aspect-square w-full lg:w-auto lg:h-full rounded-full object-cover" />
                                <div>
                                    <p className='text-gray text-medium lg:text-sm'>{item.review}</p>
                                    <div className='h-[1px] border-b border-gray/[.5] w-full my-4'></div>
                                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                                        <div>
                                            <p className='font-semibold text-black'>{item.name}</p>
                                            <p><span className='text-[.80rem]'>{item.title}</span> | <span className='text-[.80rem]'>{item.location}</span></p>
                                        </div>
                                        <ReactStars count={5} value={item.stars} className='text-xl pr-2' color2='#FFD700' edit={false} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <div className='lg:hidden flex items-center justify-center mt-10 gap-4'>
                        <CustomLeftArrow onClick={() => carouselRef.current.previous()} />
                        <CustomRightArrow onClick={() => carouselRef.current.next()} />
                    </div>
                </div>
            </div>
        </ContainerSection>
    );
}

export default Testimonial;
