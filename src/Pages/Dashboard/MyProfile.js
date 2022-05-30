import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleProfile = data => {
        console.log(data)
        fetch('https://sheltered-plateau-99075.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                toast.success('Product added successfully');
                reset();
            }
            else{
                toast.error('Failed to add the Product')
            }
        })
        
    }


    if (loading) {
        return
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-col-reverse">

                <div className="card shadow-xl">

                    <div className="card-body w-96">
                        <div>
                            <h2 className='text-center font-medium text-2xl mb-4 text-cyan-500'>Update Your Profile</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleProfile)}>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    value={user?.email}
                                    className="input input-bordered w-full max-w-xs"
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
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder='Education'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder='City'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: 'City is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder='Phone'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder='LinkedIn Link'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedIn", {
                                        required: {
                                            value: true,
                                            message: 'LinkedIn is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedIn.message}</span>}
                                </label>
                            </div>
                            <input className=' btn  w-full max-w-xs' type="submit" value="Save" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;