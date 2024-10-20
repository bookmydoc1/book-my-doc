import React from 'react';

const SectionHeader = ({ title, description, showLogo = true, descriptionClass }) => {
    return (
        <>
            {
                showLogo ?
                    <div className='flex items-center justify-center gap-4'>
                        <img className='w-6 h-8' src="/images/logo-only.svg" alt="logo" />
                        <p className='text-black text-2xl text-center md:text-3xl font-semibold'>{title}</p>
                        <img className='w-6 h-8' src="/images/logo-only.svg" alt="logo" />
                    </div>
                    :
                    <p className='text-black text-2xl md:text-3xl font-semibold text-center'>{title}</p>
            }
            {
                description &&
                <div className='mt-2 mb-6 text-center'>
                    <p className={`md:w-[55%] m-auto text-gray text-medium md:text-sm ${descriptionClass}`}>{description}</p>
                </div>
            }
        </>
    );
}

export default SectionHeader;
