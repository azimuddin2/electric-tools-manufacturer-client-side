import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import ReactStars from 'react-rating-stars-component';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import people1 from '../../images/people1.png';
import quote from '../../images/quote.svg';


const Reviews = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: reviews, isLoading, refetch } = useQuery('review', () =>
        fetch('https://sheltered-plateau-99075.herokuapp.com/review', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json()));

    const thirdExample = {
        // size: 40,
        count: 5,
        isHalf: true,
        color: "#ff9800",
        activeColor: "#dadada",
        onChange: newValue => {
            // console.log(Example 3: new value is ${newValue});
        }
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='px-8 my-20'>
            <div className='flex justify-between mb-10'>
                <div>
                    <h3 className='text-secondary font-bold text-base'>Review</h3>
                    <h1 className='font-mediums text-4xl'>What Our Customers Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review =>
                            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <p className='text-sm'>{review.description}</p>
                                    <div className='flex items-center mt-5'>
                                        <div className="avatar">
                                            <div className="w-20 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={people1} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-base font-semibold	'>{review.name}</h3>
                                            <p className='text-sm'><ReactStars value={review.rating} {...thirdExample} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       

                    )
                }


            </div>
            </div>
        </section>



        // <div>
        //     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        //         {
        //             reviews.map(review =>
        //                     <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        //                         <div className="card-body">
        //                             <p className='text-sm'>{review.description}</p>
        //                             <div className='flex items-center mt-5'>
        //                                 <div className="avatar">
        //                                     <div className="w-20 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        //                                         <img src={people1} alt='' />
        //                                     </div>
        //                                 </div>
        //                                 <div>
        //                                     <h3 className='text-base font-semibold	'>{review.name}</h3>
        //                                     <p className='text-sm'><ReactStars value={review.rating} {...thirdExample} /></p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
                       

        //             )
        //         }


        //     </div>

        // </div>
    );
};

export default Reviews;
