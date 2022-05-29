import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import ReactStars from 'react-rating-stars-component';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Reviews = () => {
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

    return (
        <div>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review =>

                            <tr>
                                <td>{review.name}</td>
                                <td>{review.description}</td>
                                <td><ReactStars value={review.rating} {...thirdExample} /></td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>

    </div>
    );
};

export default Reviews;
