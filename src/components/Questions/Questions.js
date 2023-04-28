import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questionsData = useLoaderData();
    const { name, questions } = questionsData.data;

    return (
        <div className='mx-8 md:mx-12'>
            <h1 className='text-3xl md:text-6xl text-center my-5'>Quiz on <span className='font-bold text-blue-500'>{name}</span></h1>
            <hr className='border-b-2' />
            {
                questions.map((qs, idx) => <Question
                    key={qs.id}
                    qs={qs}
                    index={idx}
                ></Question>)
            }
        </div>
    );
};

export default Questions;