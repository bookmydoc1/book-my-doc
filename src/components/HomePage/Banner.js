import ContainerSection from '@/utils/ContainerSection';
import React from 'react';

const Banner = () => {
  return (
    <div className='banner-section relative'>
      <ContainerSection className={'md:!pr-0'}>
        <div className='w-full md:w-[50%] py-10 md:py-20 text-white'>
          <p className='bg-[#e1ffe11f] px-2 py-2 mb-2 backdrop-blur-3xl rounded-lg w-max'>#1 doctor work management app.</p>
          <p className='text-[2.5rem] leading-[60px] mb-3 font-light'>Optimize your clinic with our all-in-one <span className='uppercase whitespace-nowrap font-semibold banner-bold-text-bg'>doctor app.</span></p>
          <p className='text-[#DEDEDE] text-sm'>Our all-in-one app simplifies daily tasks and workflows for doctors, allowing them to manage their practices more efficiently and ultimately improving the quality of patient care.</p>
        </div>
        <div className='md:hidden h-auto translate-y-2.5'>
          <img src="/images/banner-section/banner.png" alt="Image" />
        </div>
      </ContainerSection>
      <div className='hidden md:block absolute w-[45%] h-auto right-0 -bottom-4'>
        <img src="/images/banner-section/banner.png" alt="Image" />
      </div>
    </div>
  );
}

export default Banner;
