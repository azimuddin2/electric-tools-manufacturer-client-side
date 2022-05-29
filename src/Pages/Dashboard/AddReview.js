import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddReview = () => {
    const [value, setValue] = useState([]) // initial rating value
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const thirdExample = {
        size: 40,
        count: 5,
        isHalf: false,
        value: value,
        color: "#ff9800",
        activeColor: "#dadada",
        onChange: newValue => {
            setValue(newValue);
        }
    };

    const handleReview = data => {
        const reviewData = { ...data, rating: value };
        console.log(reviewData);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log('inserted : ', inserted);
                if (inserted.insertedId) {
                    toast.success('review added successfully');
                    reset();
                } else {
                    toast.error("Failed to add review");
                }
            })
    }

    return (
        <div>
            <div class="hero-content flex-col lg:flex-col-reverse">

                <div class="card   max-w-sm shadow-2xl bg-base-500">

                    <div class="card-body w-80">
                        <div>
                            <h2 className='text-2xl text-center'>Add a Review</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleReview)}>

                            <div class="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    value={user?.email}
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a vilid Email'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            


                            <div class="form-control w-full max-w-xs">
                                <textarea
                                    placeholder='Product Description'
                                    type="text"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'description is Required'
                                        },
                                        pattern: {
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
                                    {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            <p>Please Rating :</p>
                            <div className='flex justify-center items-center '>

                                <ReactStars {...thirdExample} />
                            </div>
                            {/* {signInError} */}
                            <input className=' btn  w-full max-w-xs' type="submit" value="Save" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
