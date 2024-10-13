import React from 'react';
import { PulseLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='h-screen flex items-center justify-center' role="status">
            <PulseLoader
                color="#15658d"
            />
            <span className="sr-only">Loading...</span>
        </div>
    );
}
export default Loader;
