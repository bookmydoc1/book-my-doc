import React from 'react';
import Header from './Header';

const UserLayout = ({ children }) => {
    return (
        <div className='max-w-full overflow-hidden'>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default UserLayout;
