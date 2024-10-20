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
        <ContainerSection>
            <div className='py-10 md:py-16 flex items-center justify-between gap-10'>
                <img src="/images/logo.svg" alt="LOGO" />
                <div className='flex-grow'>
                    <div className='text-primary flex border-b border-primary/[.2] pb-4'>
                        {
                            footerLinks.map((link) => (
                                <div className='px-5 first:pl-0 border-r border-gray last:border-none text-sm'>
                                    <Link href={link.href}>
                                        {link.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className='pt-4 flex gap-14 text-primary'>
                        <div className='flex items-center gap-1'>
                            <LuPhone className='' />
                            <a className='text-xs' href="tel:+919654426129">+91-9654426129</a>
                        </div>
                        <div className='flex items-center gap-1'>
                            <TfiEmail className='' />
                            <a className='text-xs' href="mailto:info@bookmydoc.com">info@bookmydoc.com</a>
                        </div>
                        <div className='flex items-center gap-1'>
                            <GrLocation className='' />
                            <p className='text-xs'>1234 Healthcare Lane, Suite 100, MedCity, CA 90001, USA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerSection>
    );
}

export default Footer;
