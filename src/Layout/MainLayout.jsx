import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;