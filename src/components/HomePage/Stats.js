import ContainerSection from '@/utils/ContainerSection';
import React from 'react';

const Stats = () => {
    return (
        <ContainerSection>
            <div className="flex border border-primary/[.2] rounded-lg" id="stats">
                <div className="stats-item-left relative flex-1 p-6 text-center">
                    <p className='text-3xl text-primary mb-1'>400 Clinics</p>
                    <p className='text-gray text-sm'>Across 50 Cities</p>
                </div>
                <div className="stats-item-right relative flex-1 p-6 text-center">
                    <p className='text-3xl text-primary mb-1'>40 Thousand</p>
                    <p className='text-gray text-sm'>5-Star Patient Reviews</p>
                </div>
                <div className="stats-item-left relative flex-1 p-6 text-center">
                    <p className='text-3xl text-primary mb-1'>700 Doctors</p>
                    <p className='text-gray text-sm'>Across India</p>
                </div>
            </div>
        </ContainerSection>
    );
}

export default Stats;
