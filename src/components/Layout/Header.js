import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import Button from '../Button';

const Header = () => {
    return (
        <div className='flex items-center py-3 sticky top-0 w-full z-10 !bg-white'>
            <ContainerSection>
                <div className='flex items-center justify-between'>
                    <img src="/images/logo.svg" alt="logo" />
                    <div className='nav-links flex gap-3 px-4 py-2'>
                        <p>Home</p>
                        <p>Manage Practice</p>
                        <p>Practice Growth</p>
                        <p>Contact Us</p>
                    </div>
                    <Button variant='primary'>
                        Get Started For Free
                    </Button>
                </div>
            </ContainerSection>
        </div>
    );
}

export default Header;