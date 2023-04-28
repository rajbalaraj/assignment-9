import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data;

    return (
        <div className='m-8 md:m-12'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    quizes.map(quiz => <SingleQuiz
                        key={quiz.id}
                        quiz={quiz}
                    ></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;