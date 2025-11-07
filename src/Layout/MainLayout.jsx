import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <NavBar></NavBar>
                <div className='mt-4'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            <Toaster/>
        </div>
    );
};

export default MainLayout;