import React from 'react';
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import ContainerSection from '@/utils/ContainerSection';
import Link from 'next/link';

const Footer = () => {
    const footerLinks = [
        {
            title: 'About Us',
            href: '/'
        },
        {
            title: 'Contact Us',
            href: '/'
        },
        {
            title: 'Blog',
            href: '/'
        },
        {
            title: 'Patient Portal',
            href: '/'
        },
        {
            title: 'Terms of use',
            href: '/'
        },
        {
            title: 'Privacy Policy',
            href: '/'
        },
    ]
    return (
        <>
            <ContainerSection>
                <div className='py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-10'>
                    <Link href='/'>
                        <img className='max-w-52' src="/images/logo.svg" alt="LOGO" />
                    </Link>
                    <div className='flex-grow'>
                        <div className='text-primary flex flex-wrap gap-y-3 border-b border-primary/[.2] pb-4'>
                            {
                                footerLinks.map((link, index) => (
                                    <div key={index} className='flex items-center'>
                                        <div className='text-sm whitespace-nowrap'>
                                            <Link href={link.href}>
                                                {link.title}
                                            </Link>
                                        </div>
                                        {
                                            index !== footerLinks.length - 1 &&
                                            <div className='border-r w-1 h-full mx-4 md:mx-5' />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className='pt-4 flex gap-14 gap-y-5 text-primary flex-wrap'>
                            <a href="tel:+919654426129" className='flex items-center gap-1'>
                                <div className='footer-contact-links'>
                                    <LuPhone className='link' />
                                </div>
                                <p className='text-xs'>+91-9654426129</p>
                            </a>
                            <a href="mailto:info@bookmydoc.com" className='flex items-center gap-1'>
                                <div className='footer-contact-links'>
                                    <TfiEmail className='link' />
                                </div>
                                <p className='text-xs'>info@bookmydoc.com</p>
                            </a>
                            <div className='flex items-center gap-1'>
                                <div className='footer-contact-links'>
                                    <GrLocation className='link' />
                                </div>
                                <p className='text-xs'>1234 Healthcare Lane, Suite 100, MedCity, CA 90001, USA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerSection>
            <div className='banner-gradient py-3'>
                <ContainerSection>
                    <div className='flex justify-between'>
                        <p className='text-white text-xs'>© 2024 All rights reserved.</p>
                        <div></div>
                    </div>
                </ContainerSection>
            </div>
        </>
    );
}

export default Footer;
