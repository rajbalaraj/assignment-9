import React from 'react';

const Options = ({ option, name, handleOption }) => {
    return (
        <div className='p-2 text-xl'>
            <label htmlFor={option}>
                <input onClick={() => handleOption(option)} type="radio" name={name} id={option} />
                <span className='ml-2'>{option}</span>
            </label>
        </div>
    );
};

export default Options;