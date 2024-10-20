import ContainerSection from '@/utils/ContainerSection';
import React from 'react';
import SectionHeader from '../SectionHeader';

const SubscriptionSection = ({ title }) => {
  const plan1 = {
    name: "Clinic Subscription",
    features: [
      'Cloud based Web Admin',
      'Online Calendar',
      'Patient EHR',
      'Pen & Paper Based Prescription',
    ]
  };

  const plan2 = {
    name: "Hospital Subscription",
    features: [
      'Cloud based Web Admin',
      'Online Calendar',
      'Patient EHR',
      'Pen & Paper Based Prescription',
    ]
  }
  return (
    <ContainerSection>
      <SectionHeader title={title} />
      <div className='mt-10 grid md:grid-cols-2 gap-4'>
        <div className='relative bg-primary/[.1] rounded-2xl text-center pb-10'>
          <div className='w-[60%] md:w-[45%] absolute -top-[1px] left-[50%] -translate-x-[50%] bg-white rounded-b-2xl flex items-center justify-center text-lg md:text-2xl font-medium p-4'>
            Clinic Subscription
          </div>
          <img className='m-auto mt-28 h-28' src="/images/subscription-cards/img1.svg" alt="img" />
          <h3 className='text-xl md:text-2xl my-4 font-medium'>{plan1.name}</h3>
          {
            plan1.features.map((feature, index) => (
              <div>
                <p className='text-sm md:text-base'>{feature}</p>
                <div className={`flex items-center gap-10 px-8 md:px-12 my-4 ${plan1.features.length === index + 1 && 'hidden'}`}>
                  <div className='h-3 w-3 border-2 border-primary/[.1]'></div>
                  <div className='h-0 w-full border border-primary/[.1]'></div>
                  <div className='h-3 w-3 border-2 border-primary/[.1]'></div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='relative bg-white border border-primary/[.1] rounded-2xl text-center'>
          <div className='w-[60%] md:w-[45%] absolute -top-[1px] left-[50%] -translate-x-[50%] bg-white border border-primary/[.1] border-t-0 rounded-b-2xl flex items-center justify-center text-lg md:text-2xl font-medium p-4'>
            Hospital Subscription
          </div>
          <img className='m-auto mt-28 h-28' src="/images/subscription-cards/img2.svg" alt="img" />
          <h3 className='text-xl md:text-2xl my-4 font-medium'>{plan2.name}</h3>
          {
            plan2.features.map((feature, index) => (
              <div>
                <p className='text-sm md:text-base'>{feature}</p>
                <div className={`flex items-center gap-10 px-8 md:px-12 my-4 ${plan1.features.length === index + 1 && 'hidden'}`}>
                  <div className='h-3 w-3 border-2 border-primary/[.1]'></div>
                  <div className='h-0 w-full border border-primary/[.1]'></div>
                  <div className='h-3 w-3 border-2 border-primary/[.1]'></div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </ContainerSection>
  );
}

export default SubscriptionSection;
