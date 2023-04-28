import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='min-h-screen relative'>
            <Header></Header>
            <div className='pb-32'>
                <Outlet></Outlet>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;    