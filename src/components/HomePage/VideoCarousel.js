import SectionHeader from '../SectionHeader';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowBack } from "react-icons/io";
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player/lazy';
import ContainerSection from '@/utils/ContainerSection';
import Portal from '@/utils/Portal';


const VideoCarousel = ({ title, description }) => {
    const carouselRef = useRef();
    console.log('carouselRef', carouselRef);
    const playerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const handleClickOutside = (event) => {
        if (playerRef.current && !playerRef.current.contains(event.target)) {
            closePopup();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpenVideo = (url) => {
        setVideoUrl(url);
        setIsOpen(true);
    };

    const closePopup = () => {
        setVideoUrl('');
        setIsOpen(false);
    };

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

    const slides = [
        {
            image: '/images/video-section/image1.png',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        {
            image: '/images/video-section/image2.png',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        {
            image: '/images/video-section/image1.png',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    ];

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
        <div className="relative bg-gray-100 pt-14">
            <div className="absolute inset-0 h-[50%] bg-primary/[.2]"></div>
            <ContainerSection className="relative z-[1]">
                <SectionHeader title={title} />
                <div className="relative mt-10">
                    <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        arrows={false}
                        customTransition="transform 300ms ease-in-out"
                        containerClass="carousel-container-no-padding"
                        itemClass="px-4"
                        infinite
                    >
                        {slides.map((item, index) => (
                            <div key={index} className="relative overflow-hidden h-full rounded-lg">
                                <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                                <div onClick={() => handleOpenVideo(item.videoUrl)} className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] border border-white rounded-full p-3 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer'>
                                    <FaPlay className=" text-white text-2xl pl-1" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    {/* Video Popup */}
                    {isOpen && (
                        <Portal>
                            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                                <button
                                    className="absolute top-5 right-5 text-white text-3xl"
                                    onClick={closePopup}
                                >
                                    &times;
                                </button>
                                <div className='w-[80%] h-[80%]' ref={playerRef}>
                                    <ReactPlayer url={videoUrl} playing controls width="100%" height="100%" />
                                </div>
                            </div>
                        </Portal>
                    )}
                    <div className='flex justify-center mt-6 gap-4'>
                        <CustomLeftArrow onClick={() => carouselRef.current.previous()} />
                        <CustomRightArrow onClick={() => carouselRef.current.next()} />
                    </div>
                </div>
            </ContainerSection>
        </div>
    );
};

export default VideoCarousel;
