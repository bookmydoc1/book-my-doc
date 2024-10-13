import React from 'react';
import Header from './Header';

const UserLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default UserLayout;
