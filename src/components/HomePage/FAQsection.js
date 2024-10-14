import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import SectionHeader from '../section-header';

const FAQsection = ({ title }) => {
    return (
        <div className='bg-primary/[.1] py-10 md:py-16'>
            <ContainerSection>
                <SectionHeader title={title} />
            </ContainerSection>
        </div>
    );
}

export default FAQsection;
