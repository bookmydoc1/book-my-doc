import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import Button from '../Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FormPopup from '../FormPopup';

const Header = () => {
    const router = useRouter();
    const pathName = router.pathname;
    const HeaderData = [
        {
            "title": "Home",
            "path": "/",
        },
        {
            "title": "About Us",
            "path": "#",
        },
        {
            "title": "Privacy Policy",
            "path": "#",
        },
        {
            "title": "Contact Us",
            "path": "#",
        }
    ]
    return (
        <div className='flex items-center py-3 sticky top-0 w-full z-10 !bg-white'>
            <FormPopup />
            <ContainerSection>
                <div className='flex items-center justify-between'>
                    <Link href="/">
                        <img className='h-8 md:h-full' src="/images/logo.svg" alt="logo" />
                    </Link>

                    <div className='nav-links hidden md:flex gap-4 px-4'>
                        {
                            HeaderData?.map((value, i) => (
                                <Link key={i} href={value?.path} aria-current="page" className={`py-2
                                    ${pathName === value.path
                                        ? "border-t-2 border-secondary text-secondary whitespace-nowrap pointer-events-none"
                                        : "text-primary whitespace-nowrap"}
                                `}>
                                    <span>
                                        {value.title}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                    <div className='hidden md:block'>
                        <Button variant='primary'>
                            Get Started For Free
                        </Button>
                    </div>
                </div>
            </ContainerSection>
        </div>
    );
}

export default Header;
