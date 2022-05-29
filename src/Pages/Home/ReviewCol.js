import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import ReactStars from 'react-rating-stars-component';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import people1 from '../../images/people1.png';

const ReviewCol = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: reviews, isLoading, refetch } = useQuery('review', () =>
        fetch('http://localhost:5000/review', {
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

            if(isLoading){
                return <Loading></Loading>
            }

            const reviewCollection = reviews.slice(0, 3);

   
    return (
        <div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">       
                    {
                        reviewCollection.map(review =>
                            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p className='text-sm'>{review.description}</p>
                                <div className='flex items-center mt-5'>
                                    <div className="avatar">
                                        <div className="w-20 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={people1} alt=''/>
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
    );
};

export default ReviewCol;