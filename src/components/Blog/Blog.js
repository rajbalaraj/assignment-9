import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 mx-5 md:mx-12'>
            {/* blog title  */}
            <h2 className='text-3xl md:text-5xl text-center pb-5'>Welcome to our <span className='font-bold text-green-500'>blog</span></h2>

            {/* blog content  */}
            <div className='bg-green-200 p-5 rounded-lg my-5'>
                <h3 className='text-2xl'>What is the purpose of Ract Router?</h3>
                <p><strong>Answer:</strong> React Router enables 'client side routing'.In general websites,browser request documents from server many times as the clients request for it.After that it updates the UI according to the changes.But React router allows the app to update the URL from a link click without making another request. <br />
                    It enables a faster user experience. Thats why it becomes so much popular wroldwide.</p>
            </div>
            <div className='bg-green-200 p-5 rounded-lg my-5'>
                <h3 className='text-2xl'>How does Context API works?</h3>
                <p><strong>Answer:</strong> The phenomenon to pass data via props from parent to child components is known as 'Prop Drilling' .But it becomes inefficient when there are to many components between the sending and receiving components. <br />
                    The Context API allows us to send the variables/props to the desire child component without 'Props Drilling'. <br />
                    There are the ways to use Context API in our React App.
                    <br />
                    1. Declare a context using createContext()
                    <br />
                    2. Set provider and pass the value you want to use.
                    <br />
                    3. Use useContext() hook where you want to use the passed value.
                </p>
            </div>
            <div className='bg-green-200 p-5 rounded-lg my-5'>
                <h3 className='text-2xl'>What is the useRef hook?</h3>
                <p><strong>Answer:</strong> useRef returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a 'box' that can hold a mutable value in its current property. <br />
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                    <br />
                    But the useRef hook doesnot cause Re-render.</p>
            </div>
        </div>
    );
};

export default Blog;