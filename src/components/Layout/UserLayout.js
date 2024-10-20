import React from 'react';
import Header from './Header';
import Footer from './Footer';

const UserLayout = ({ children }) => {
    return (
        <div className='max-w-full overflow-hidden'>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default UserLayout;
