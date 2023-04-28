import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='text-center pt-12 md:pt-32 mx-8'>
            <h1 className='text-3xl font-bold text-red-500'>Oops!</h1>
            <p className='text-2xl my-3'>Sorry, the page you are visiting is not available at the moment. <br />
                Please try again next time</p>
            <p>
                <span>404 </span><i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorElement;