import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Path from '../Path/Path';

const Header = () => {
    // useState for navbar toggle
    const [open, setOpen] = useState(false);

    const toggleBar = (open) => {
        setOpen(!open);
    };

    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/quiz', name: 'Quiz' },
        { id: 3, path: '/statistics', name: 'Statistics' },
        { id: 4, path: '/blog', name: 'Blog' }
    ];

    return (
        <nav className='bg-green-400 text-white flex justify-between md:px-10 py-3'>

            <h2 className='text-3xl font-bold mx-5'>IQ Tester </h2>

            {/* nav icon toggle */}
            <button onClick={() => toggleBar(open)} className="h-8 w-8 md:hidden mx-5">
                {open ? <div><XMarkIcon></XMarkIcon></div> : <div><Bars3Icon></Bars3Icon></div>}
            </button>

            {/* nav bar responsive */}
            <ul className={`bg-green-400 flex flex-col md:flex-row absolute duration-500 ease-out md:static w-full md:w-auto pb-3 md:pb-1 ${open ? 'top-14' : '-top-40'}`}>
                {
                    routes.map(route => <Path
                        key={route.id}
                        route={route}
                    ></Path>)
                }
            </ul>
        </nav>
    );
};

export default Header;