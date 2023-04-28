import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className='text-center bg-green-500 text-white py-5'>
            <h2 className='text-xl'>Follow us on</h2>
            <div className='flex justify-center'>
                <div className='flex items-center mx-2'>
                    <AtSymbolIcon className='h-4 w-4'></AtSymbolIcon><a href="https://www.facebook.com/">Facebook</a>
                </div>
                <div className='flex items-center mx-2'>
                    <AtSymbolIcon className='h-4 w-4'></AtSymbolIcon><a href="https://twitter.com/">Twitter</a>
                </div>
                <div className='flex items-center mx-2'>
                    <AtSymbolIcon className='h-4 w-4'></AtSymbolIcon><a href="https://www.instagram.com/">Instagram</a>
                </div>
            </div>
            <p className='text-sm'>Copyright @2023.All rights reserved.</p>
        </footer>
    );
};

export default Footer;