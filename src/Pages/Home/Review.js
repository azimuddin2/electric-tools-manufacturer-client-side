import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-sm'>{review.review}</p>
                <div className='flex items-center mt-5'>
                    <div className="avatar">
                        <div className="w-20 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt=''/>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-base font-semibold	'>{review.name}</h3>
                        <p className='text-sm'>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;