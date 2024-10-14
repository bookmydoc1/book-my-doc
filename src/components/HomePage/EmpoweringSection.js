import React from 'react';
import SectionHeader from '../section-header';
import ContainerSection from '@/utils/ContainerSection';
import Button from '../Button';

const EmpoweringSection = ({ title, description }) => {
    return (
        <div className='bg-gradient-container py-10 md:py-20 relative'>
            <img className='absolute h-[30%] lg:h-[70%] left-0 bottom-0 w-auto' src="/images/plus-group1.png" alt="" />
            <ContainerSection>
                <SectionHeader showLogo={false} title={title} description={description} descriptionClass={'md:!w-[75%]'} />
                <div className='flex justify-center gap-3'>
                    <Button variant='primary'>
                        Get Started For Free
                    </Button>
                    <Button variant='secondary'>
                        Join Now For Free
                    </Button>
                </div>
            </ContainerSection>
            <img className='absolute h-[30%] lg:h-[70%] right-0 top-0 w-auto' src="/images/plus-group2.png" alt="" />
        </div>
    );
}

export default EmpoweringSection;
