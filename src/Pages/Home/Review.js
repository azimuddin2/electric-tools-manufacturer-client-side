import React from 'react';
import quote from '../../images/quote.svg';
import ReviewCol from './ReviewCol';

const Review = () => {
    return (
        <section className='px-8 my-20'>
            <div className='flex justify-between mb-10'>
                <div>
                    <h3 className='font-bold text-cyan-500 text-xl'>Review</h3>
                    <h1 className='font-mediums text-4xl capitalize'>Our Clients Say About Us</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div>
                <ReviewCol></ReviewCol>
            </div>
        </section>
    );
};

export default Review;